import action from './util/action'

export const Types = {
  ERRO: '@avisos/ERRO',
  ALERTA: '@avisos/ALERTA',
  INFO: '@avisos/INFO',
  SUCESSO: '@avisos/SUCESSO',
  LIMPAR: '@avisos/LIMPAR'
}

export const Actions = {
  limpar: () => action(Types.LIMPAR, {}),
  erro: (mensagens, detalhe) => action(Types.ERRO, { erro: { mensagens, detalhe } }),
  alerta: (mensagens, detalhe) => action(Types.ALERTA, { alerta: { mensagens, detalhe } }),
  info: (mensagens, detalhe) => action(Types.INFO, { info: { mensagens, detalhe } }),
}

const INITIAL_STATE = { erro: null, alerta: null, info: null, sucesso: null }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ERRO:
      return {
        erro: {
          mensagens: action.erro.mensagens,
          detalhe: action.erro.detalhe
        }
      }
    case Types.ALERTA:
      return {
        alerta: {
          mensagens: action.alerta.mensagens,
          detalhe: action.alerta.detalhe
        }
      }
    case Types.INFO:
      return {
        info: {
          mensagens: action.info.mensagens,
          detalhe: action.info.detalhe
        },
      }
    case Types.SUCESSO:
      return {
        sucesso: {
          mensagens: action.sucesso.mensagens,
          detalhe: action.sucesso.detalhe
        }
      }
    case Types.LIMPAR:
      return INITIAL_STATE
    default:
      return state
  }
}
