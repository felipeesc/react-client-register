import React, { useState, useContext } from 'react'
import history from '../../store/history'
import StoreContext from '../Store/Context'
import UIButton from '../UI/Button/Button'
import { decodeToken } from 'react-jwt'
import axios from 'axios'

import './Login.css'

function initialState () {
  return { user: '', password: '' }
}

const origin = 'http://localhost:8080/oauth/token'

const UserLogin = () => {
  const [values, setValues] = useState(initialState)
  const [error, setError] = useState(null)
  const { setToken } = useContext(StoreContext)

  function onChange (event) {
    const { value, name } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const login = ({ user, password }) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFyMA==')

    const body = `username=${user}&password=${password}&grant_type=password`

    return axios.post(origin, body, { headers })
      .then(response => {
        armazenarToken(response.json().access_token)
        history.push('/lista-cliente')
      })
      .catch(response => {
        if (response.status === 400) {
          const respostaJson = response.json()

          if (respostaJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!')
          }
        }
        return Promise.reject(response)
      })
  }
  const armazenarToken = (token) => {
    const jwtPayload = decodeToken(token)
    localStorage.setItem('token', token)
  }

  const carregarToken = () => {
    const token = localStorage.getItem('token')

    if (token) {
      armazenarToken(token)
    }
  }

  function onSubmit (event) {
    event.preventDefault()

    const { token } = login(values)

    if (token) {
      setToken(token)
      return history.push('/cliente')
    }

    setError(error)
    setValues(initialState)
  }

  return (
    <div className='user-login'>
      <h1 className='user-login__title'>Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className='user-login__form-control'>
          <label htmlFor='user'>Usuário</label>
          <input id='user' type='text' name='user' onChange={onChange} value={values.user} />
        </div>
        <div className='user-login__form-control'>
          <label htmlFor='password'>Senha</label>
          <input id='password' type='password' name='password' onChange={onChange} value={values.password} />
        </div>
        <UIButton
          type='submit'
          theme='contained-green'
          className='user-login__submit-button'
          rounded
        >
              Entrar
        </UIButton>
      </form>
    </div>
  )
}

export default UserLogin
