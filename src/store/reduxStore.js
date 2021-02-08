import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { routerMiddleware } from 'react-router-redux'
import rootSaga from '../sagas'
import history from './history'
import rootReducer from '../ducks'

const sagaMiddleware = createSagaMiddleware()

const reduxStore = createStore(
  rootReducer(history), // root reducer with router state
  {},
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
      reduxImmutableStateInvariant()
    )
  )
)

sagaMiddleware.run(rootSaga)

export default reduxStore
