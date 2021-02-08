import action from './util/action'

export const Types = {
  PROGRESS: '@PROGRESS_BAR',
  PROGRESS_REQUEST: '@PROGRESS_BAR_TESTE_REQUEST',
}

export const Actions = {
  progress: (operationInProgress) => action(Types.PROGRESS, { operationInProgress }),
  progress_request: () => action(Types.PROGRESS_REQUEST, {}),
}

export default (state = { operationInProgress: false }, action) => {
  switch (action.type) {
    case Types.PROGRESS: {
      return { operationInProgress: action.operationInProgress }
    }
    default:
      return state
  }
}
