import axios from 'axios'
import { Actions as progressBar } from '../ducks/operationInProgress'
import reduxStore from '../store/reduxStore'
// You can use any cookie library or whatever
// library to access your client storage.

const closeProgressBar = () => {
  reduxStore.dispatch(progressBar.progress(false))
}

axios.interceptors.request.use(
  (config) => {
    reduxStore.dispatch(progressBar.progress(true))
    return Promise.resolve(config)
  },
  (err) => {
    closeProgressBar()
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (config) => {
    closeProgressBar()
    return Promise.resolve(config)
  },
  (err) => {
    closeProgressBar()
    return Promise.reject(err)
  }
)
