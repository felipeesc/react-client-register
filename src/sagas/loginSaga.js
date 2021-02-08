import { call, put, takeEvery } from 'redux-saga/effects'
import { Types as LoginTypes } from '../ducks/login'
import loginService from './services/loginService'
import history from '../store/history'
import { Actions as AvisosActions } from '../ducks/avisos'
import { safely } from './util/util'



export function * criarCliente (cliente) {
  yield call(loginService.obterAccessToken, cliente)
  yield put(AvisosActions.info(['autenticado com sucesso.']))
  history.push('/lista-cliente')
}

export function * watchCliente () {
  yield takeEvery(LoginTypes.CONSULTAR, safely(criarCliente))
}
