export const Types = {
  SALVAR_CLIENTE: '@cliente/SALVAR_CLIENTE',
  EXCLUIR_CLIENTE: '@cliente/EXCLUIR_CLIENTE',
  CLIENTE_EXCLUIDO: '@cliente/CLIENTE_EXCLUIDO',
  ATUALIZAR_LISTA_CLEINTE: '@cliente/ATUALIZAR_LISTA_CLEINTE',
  RECUPERAR_CLIENTE: '@cliente/RECUPERAR_CLIENTE',
  CLIENTES_RECUPERADOS: '@cliente/CLIENTES_RECUPERADOS',
  EDITAR_CLIENTE: '@cliente/EDITAR_CLIENTE',
  LIMPAR_CLIENTE: '@cliente/LIMPAR_CLIENTE'
}

export const Actions = {
  salvarCliente: (payload) => {
    return { type: Types.SALVAR_CLIENTE, payload }
  },
  excluirCliente: (payload) => {
    return { type: Types.EXCLUIR_CLIENTE, payload }
  },
  clienteExcluido: () => {
    return { type: Types.CLIENTE_EXCLUIDO }
  },
  atualizarListaClientes: (payload) => {
    return { type: Types.ATUALIZAR_LISTA_CLEINTE, payload }
  },
  recuperarClientes: () => {
    return { type: Types.RECUPERAR_CLIENTE }
  },
  editarCliente: (payload) => {
    return { type: Types.EDITAR_CLIENTE, payload }
  },
  limparCliente: () => {
    return { type: Types.LIMPAR_CLIENTE }
  }
}

const INITIAL_STATE = {
  cliente: {},
  clientes: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ATUALIZAR_LISTA_CLEINTE:
    case Types.CLIENTES_RECUPERADOS:
      return {
        ...state,
        clientes: action.payload
      }
    case Types.EDITAR_CLIENTE:
      console.log('editar ', action.payload)
      return {
        ...state,
        cliente: action.payload
      }
    case Types.LIMPAR_CLIENTE: {
      return { ...INITIAL_STATE }
    }
    default: {
      return state
    }
  }
}
export default reducer
