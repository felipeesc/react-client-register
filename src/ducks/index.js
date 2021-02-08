import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import operationInProgress from './operationInProgress'
import avisos from './avisos'
import cliente from './cliente'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    operationInProgress,
    avisos,
    cliente
  })

export default rootReducer
