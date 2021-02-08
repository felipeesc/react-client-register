import axios from 'axios'

const urlCriarCliente = 'api/cliente'
const urlExcluirCliente = 'api/cliente/'
const urlRecuperarClientes = 'api/cliente'

export const criarCliente = (cliente) => {
  return axios.post(urlCriarCliente, cliente.payload)
}

const excluirCliente = (cliente) => {
  return axios.post(urlExcluirCliente.concat(cliente.codigo))
}

export const recuperarClientes = async () => {
  const response = await axios.get(urlRecuperarClientes)
  return response?.data
}

export default {
  criarCliente,
  excluirCliente,
  recuperarClientes
}
