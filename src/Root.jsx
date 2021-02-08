import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ptBRLocale from 'date-fns/locale/pt-BR'
import AppRoutes from './routes/AppRoutes'
import styles, { configTheme } from './RootStyles'
import ErrorBoundary from './components/ErrorBoundary'
import reduxStore from './store/reduxStore'
import './interceptors/axiosHttpInProgressInterceptor'
import ProgressBar from './components/ProgressBar'
import './interceptors/axiosHttpErrorInterceptor'

function Root () {
  return (
    <MuiThemeProvider theme={configTheme(styles)}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBRLocale}>
        <CssBaseline />
        <ErrorBoundary>
          <Provider store={reduxStore}>
            <ProgressBar />
            <AppRoutes />
          </Provider>
        </ErrorBoundary>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

export default Root
