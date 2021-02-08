/* eslint-disable import/prefer-default-export */
import { runSaga } from 'redux-saga'

export const safely = (originalSaga) =>
  function* _safely(payload) {
    try {
      yield originalSaga(payload)
    } catch (e) {
      console.error(e)
    }
  }

export async function recordSaga(saga, initialAction) {
  const dispatched = []

  const task = runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction
  )

  await task.toPromise()

  return dispatched
}
