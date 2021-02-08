import { all } from 'redux-saga/effects'
import { watchProgressBar } from './progressBarTesteSaga'
import { watchCliente } from './clienteSaga'

export default function * rootSaga () {
  yield all([watchProgressBar(), watchCliente()])
}
