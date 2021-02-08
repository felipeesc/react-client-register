import action from './util/action'

export const Types = {
  CONSULTAR: '@login/CONSULTANDO'
}

export const Actions = {
  consultar: (payload) => action(Types.CONSULTAR, payload)
}

const INITIAL_STATE = { cliente: {} }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CONSULTAR:
      return {
        ...state,
        cliente: action.payload
      }
    default:
      return state
  }
}
