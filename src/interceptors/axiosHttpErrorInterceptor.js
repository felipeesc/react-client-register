import axios from 'axios'
import _ from 'lodash'
import { Actions as AvisosActions } from '../ducks/avisos'
import reduxStore from '../store/reduxStore'

const LABEL_NOME_SISTEMA = 'Cadastro Cliente'

function erro(mensagens, detalhe) {
  return { mensagens, detalhe, erro: true }
}

function alerta(mensagens, detalhe) {
  return { mensagens, detalhe, erro: false }
}

function aviso(err) {
  const { status } = err.response
  const { message } = err
  switch (true) {
    case status === 400:
      return erro([`Requisição ao serviço de ${LABEL_NOME_SISTEMA} está inválida`], message)
    case status === 412: {
      const violacoes = _.get(err, 'response.data.violacoes')
      if (!_.isNil(violacoes)) {
        const errosFiltrados = violacoes.filter((v) => v.tipo === 'ERRO').map((v) => v.mensagem)
        if (!_.isEmpty(errosFiltrados)) {
          return erro([errosFiltrados])
        }
        const alertasFiltados = violacoes.filter((v) => v.tipo === 'ALERTA').map((v) => v.mensagem)
        if (!_.isEmpty(alertasFiltados)) {
          return alerta([alertasFiltados])
        }
      }
      return erro(
        [`O serviço do sistema de ${LABEL_NOME_SISTEMA} considerou essa ação inválida`],
        'Apesar disso, não conseguimos identificar qual problema.'
      )
    }
    case status === 404:
      return erro(['Recurso solicitado não foi encontrado'], message)
    case status === 504:
      return erro([
        `Serviço de ${LABEL_NOME_SISTEMA} esta indisponível. Tente mais tarde novamente.`,
      ])
    case status > 500:
      return erro(
        [
          `Ocorreu um erro interno no serviço de ${LABEL_NOME_SISTEMA}.
            Tente mais tarde novamente.`,
        ],
        message
      )
    default:
      return erro(
        [`Falha ao fazer requisição HTTP para o serviço de ${LABEL_NOME_SISTEMA}`],
        message
      )
  }
}

axios.interceptors.response.use(
  (config) => {
    return Promise.resolve(config)
  },
  (err) => {
    const { mensagens, detalhe, erro } = aviso(err)
    if (erro) {
      reduxStore.dispatch(AvisosActions.erro(mensagens, detalhe))
      throw erro
    } else {
      reduxStore.dispatch(AvisosActions.alerta(mensagens, detalhe))
      throw erro
    }
  }
)
