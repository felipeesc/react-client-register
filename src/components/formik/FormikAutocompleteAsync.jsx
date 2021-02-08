import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useField } from 'formik'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import cookie from 'cookie-machine'
import { TOKEN_KEY, USER_FINGER_PRINT_KEY } from '../../sagas/services/authenticationService'
import DebouncedTextField from '../DebouncedInputComponent'

function tratarErro(e, response) {
  console.error(e)

  if (response.status === 401) {
    throw new Error(`Token inválido ou expirado. Favor logar novamente.`)
  } else {
    throw new Error(
      `${e.toString().replace('Error: ', '')} - HTTP Status: ${response.status} (${
        response.statusText
      })`
    )
  }
}

function FormikAutoCompleteAsync({
  name = 'async',
  label,
  defaultValue,
  placeholder,
  url,
  queryParameterName,
  httpMethod = 'GET',
  postData,
  postParameterName = 'parametroPesquisa',
  mapper,
  onChange = () => {},
}) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [field, meta, helper] = useField(name)

  const carregarOpcoes = (param) => {
    const token = cookie.get(TOKEN_KEY)
    const userFingerPrint = cookie.get(USER_FINGER_PRINT_KEY)
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-UFP': userFingerPrint,
    }

    if (httpMethod === 'POST') {
      const body = { ...postData }
      body[postParameterName] = param

      return fetch(`${url}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      })
    }

    return fetch(`${url}?${queryParameterName}=${param}`, {
      method: 'GET',
      headers,
    })
  }

  React.useEffect(() => {}, [options])

  async function executarPesquisa(value) {
    setLoading(true)
    setOpen(false)

    let options = []
    let dados = []
    let response
    try {
      response = await carregarOpcoes(value)
      dados = await response.json()
      options = dados.map(mapper)
    } catch (e) {
      tratarErro(e, response)
    }

    setOptions(options)
    setLoading(false)
    setOpen(true)

    return dados
  }

  return (
    <Autocomplete
      freeSolo
      name={field.name}
      data-testid={field.name}
      value={defaultValue ? defaultValue : field.value}
      fullWidth
      open={open}
      onOpen={() => {
        if (options.length > 0) {
          setOpen(true)
        }
      }}
      onClose={() => {
        setOpen(false)
      }}
      onBlur={() => helper.setTouched(true)}
      options={options}
      filterOptions={() => {
        return options
      }}
      onChange={(event, newValue) => {
        const value = newValue && newValue.codigo ? newValue.codigo : null
        helper.setTouched(true)
        helper.setValue(value)
        const descricao = options.find((it) => it.codigo === value)?.descricao
        onChange(value, descricao)
      }}
      getOptionSelected={(option, value) => {
        if (typeof value === 'number' || typeof value === 'object') {
          return value.codigo ? option.codigo === value.codigo : option.codigo === value
        }
        return null
      }}
      getOptionLabel={(option) => {
        if (typeof option === 'object') {
          return option.descricao
            ? option.descricao
            : options.find((it) => it.codigo === option)?.descricao
        }
        return option
      }}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.descricao, inputValue)
        const parts = parse(option.descricao, matches)

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        )
      }}
      loading={loading}
      loadingText="Aguarde o resultado da pesquisa"
      noOptionsText="Nenhum resultado com o parâmetro informado"
      renderInput={(params) => (
        <DebouncedTextField
          label={label}
          placeholder={placeholder}
          pesquisar={executarPesquisa}
          {...params}
          field={field}
          meta={meta}
        />
      )}
    />
  )
}
export default FormikAutoCompleteAsync
