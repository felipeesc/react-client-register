import React from 'react'
import { useField } from 'formik'
import TextField from '@material-ui/core/TextField'

const FormikTextField = ({
  label,
  placeholder,
  disabled,
  type = 'text',
  maxLength = 5000,
  multiline = false,
  ...props
}) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      data-testid={field.name}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      type={type}
      {...field}
      {...props}
      helperText={errorText}
      multiline={multiline}
      error={Boolean(errorText)}
      inputProps={{
        maxLength: { maxLength },
      }}
    />
  )
}

export default FormikTextField
