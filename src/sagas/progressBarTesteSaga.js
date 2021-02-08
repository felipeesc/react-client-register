import { call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { Types as Operation } from '../ducks/operationInProgress'
import { safely } from './util/util'

const requisacaoHttp = () => {
  return axios.get('/bff/teste/obter-teste')
}

export function* requestTesteProgress() {
  try {
    yield call(requisacaoHttp)
  } catch (error) {
    console.log('Erro durante requisacao', error)
  }
}

export function* watchProgressBar() {
  yield takeEvery(Operation.PROGRESS_REQUEST, safely(requestTesteProgress))
}
