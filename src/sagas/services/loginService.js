import axios from 'axios'

const urlOauthToken = 'oauth/token'

export const obterAccessToken = (cliente) => {
  return axios.post(urlOauthToken, cliente.payload)
}

export default {
  obterAccessToken
}
