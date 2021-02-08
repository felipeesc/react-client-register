import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null, info: null }
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    })
  }

  render () {
    const { info } = this.state
    const { error } = this.state
    const { children } = this.props
    if (info) {
      return (
        <div>
          <h2>Ocorreu um erro inesperado.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {info.componentStack}
          </details>
        </div>
      )
    }
    return children
  }
}

export default ErrorBoundary
