import React from 'react'
import { useField } from 'formik'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PropTypes from 'prop-types'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

const FormikAutocomplete = ({
  options,
  label,
  disabled,
  onChange = () => {},
  largura = 300,
  ...props
}) => {
  const [field, meta, helper] = useField(props)

  return (
    <Autocomplete
      name={field.name}
      data-testid={field.name}
      options={options}
      value={field.value}
      onBlur={() => helper.setTouched(true)}
      onChange={(event, newValue) => {
        const value = newValue && newValue.codigo ? newValue.codigo : null
        helper.setTouched(true)
        helper.setValue(value)
        onChange(value)
      }}
      getOptionSelected={(option, value) => {
        if (typeof value === 'number' || typeof value === 'object') {
          return value.codigo ? option.codigo === value.codigo : option.codigo === value
        }
        return null
      }}
      getOptionLabel={(option) => {
        return option.descricao
          ? option.descricao
          : options.find((it) => it.codigo === option)?.descricao
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
      style={{ width: largura, margin: '10px 0 10px 0' }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={field.name}
          label={label}
          variant="outlined"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    />
  )
}

export default FormikAutocomplete

FormikAutocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      codigo: PropTypes.number.isRequired,
      descricao: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
