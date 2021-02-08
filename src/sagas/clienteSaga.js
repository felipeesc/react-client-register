import { call, put, takeEvery } from 'redux-saga/effects'
import { Types as ClienteTypes } from '../ducks/cliente'
import clienteService from './services/clienteService'
import history from '../store/history'
import { Actions as AvisosActions } from '../ducks/avisos'
import { safely } from './util/util'

export function * recuperarClientes () {
  const data = yield call(clienteService.recuperarClientes)
  yield put({ type: ClienteTypes.CLIENTES_RECUPERADOS, payload: data })
}

export function * criarCliente (cliente) {
  yield call(clienteService.criarCliente, cliente)
  yield put(AvisosActions.info(['Cliente cadastrada com sucesso.']))
  history.push('/lista-cliente')
}

export function * excluirCliente (action) {
  yield call(clienteService.excluirCliente, action.payload)
  yield put({ type: ClienteTypes.CLIENTE_EXCLUIDO })
  yield put({ type: ClienteTypes.RECUPERAR_CLIENTE })
  yield put(AvisosActions.info(['Cliente excluído com sucesso.']))
}

export function * watchCliente () {
  yield takeEvery(ClienteTypes.SALVAR_CLIENTE, safely(criarCliente))
  yield takeEvery(ClienteTypes.RECUPERAR_CLIENTE, safely(recuperarClientes))
  yield takeEvery(ClienteTypes.EXCLUIR_CLIENTE, safely(excluirCliente))
}
