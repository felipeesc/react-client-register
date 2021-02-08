import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import TextField from '@material-ui/core/TextField'

class DebouncedTextField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      termoPesquisa: '',
      helperText: '',
    }
  }

  componentDidMount() {
    this.pesquisarComDebounce = debounce(this.pesquisarComDebounce, 500)
    this.setState({ termoPesquisa: this.props.termoPesquisa })
  }

  handleTextChange = (e) => {
    this.setState({ termoPesquisa: e.target.value })
    this.pesquisarComDebounce(e.target.value.trim())
  }

  pesquisarComDebounce = async (termoPesquisa) => {
    if (termoPesquisa.length >= 3) {
      this.setState({ helperText: 'Aguarde o resultado da pesquisa' })
      await this.pesquisar(termoPesquisa)
    } else {
      this.setState({ helperText: 'Digite ao menos 3 caracteres' })
    }
  }

  async pesquisar(termoPesquisa) {
    let _helperText
    try {
      const resultado = await this.props.pesquisar(termoPesquisa)

      _helperText = resultado?.length === 0 ? 'Nenhum resultado com o parâmetro informado' : ''
    } catch (e) {
      _helperText = `Erro ao buscar informações: ${e.toString().replace('Error: ', '')}`
    } finally {
      this.setState({ helperText: _helperText })
    }
  }

  render() {
    const { name, label, placeholder, field, meta, pesquisar, ...rest } = this.props
    const { helperText, termoPesquisa } = this.state

    return (
      <TextField
        {...rest}
        name={field.name}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        value={termoPesquisa}
        onChange={this.handleTextChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={helperText ? helperText : meta.touched && meta.error}
      />
    )
  }
}
export default DebouncedTextField
