import React from 'react'
import { QueryParamProvider } from 'use-query-params'

import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import NotFound from '../components/NotFound'
import AppToolbar from '../components/AppToolbar'
import history from '../store/history'
import Alertas from '../components/Alertas'
import Cliente from '../components/cliente/Cliente'
import ListaCliente from '../components/cliente/listacliente/ListaCliente'
import UserLogin from '../components/login/Login'

const AppRoutes = () => {
  return (
    <ConnectedRouter history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <AppToolbar />
        <Switch>
          <Route path='/' component={UserLogin} />
          <Route path='/cliente' component={Cliente} />
          <Route path='/lista-cliente' component={ListaCliente} />
          <Route component={NotFound} />
        </Switch>
        <Alertas />
      </QueryParamProvider>
    </ConnectedRouter>
  )
}

export default AppRoutes
