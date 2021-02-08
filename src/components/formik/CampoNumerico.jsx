import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Field } from 'formik'

const CampoNumerico = ({
  name,
  value,
  onChange,
  onBlur,
  setFieldValue,
  label = ' ',
  maxLength = 5000,
  ...otherProps
}) => {
  const changeNumber = (event) => {
    if (event && event.target) {
      setFieldValue(event.target.name, event.target.value.replace(/[^\d]+/g, ''))
    }
  }
  return (
    <Field name={name}>
      {({ meta, field }) => {
        return (
          <TextField
            {...field}
            {...otherProps}
            id={name}
            label={label}
            variant='outlined'
            fullWidth
            onChange={changeNumber}
            style={{ margin: '10px 0 10px 0' }}
            InputProps={{
              value,
              onBlur
            }}
            inputProps={{
              maxLength
            }}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        )
      }}
    </Field>
  )
}
export default CampoNumerico
