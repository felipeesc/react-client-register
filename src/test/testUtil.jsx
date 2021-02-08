// eslint-disable-next-line import/no-extraneous-dependencies
import { render as rtlRender } from '@testing-library/react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { resetMiddlewares } from 'redux-dynamic-middlewares'
import DateFnsUtils from '@date-io/date-fns'
import ptBRLocale from 'date-fns/locale/pt-BR'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import rootSaga from '../sagas'
import rootReducer from '../ducks'

function renderWithRedux(ui, { initialState = {}, reducer = rootReducer, ...renderOptions } = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const myStore = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))

  // noinspection JSUnresolvedFunction
  sagaMiddleware.run(rootSaga)

  function Wrapper({ children }) {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBRLocale}>
        <Provider store={myStore}>{children}</Provider>
      </MuiPickersUtilsProvider>
    )
  }

  return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), store: myStore }
}

afterEach(() => {
  resetMiddlewares()
})

export function getTextFieldByLabel(screen, label) {
  return screen.queryByText(label).parentNode.querySelector('input')
}

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react'

// override render method
export { renderWithRedux }

// this is just a little hack to silence a warning that we'll get until we
// upgrade to 16.9: https://github.com/facebook/react/pull/14853
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})
afterAll(() => {
  console.error = originalError
})
