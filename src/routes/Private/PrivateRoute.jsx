import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router'
import StoreContext from '../../components/Store/Context'
import Cliente from '../../components/cliente/Cliente'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext)

  return (
    <Route
      {...rest}
      render={() => token
        ? <Cliente {...rest} />
        : <Redirect to='/' />}
    />
  )
}

export default PrivateRoute
