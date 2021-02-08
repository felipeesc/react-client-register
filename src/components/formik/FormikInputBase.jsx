import React from 'react'
import { useField } from 'formik'
import InputBase from '@material-ui/core/InputBase'

const FormikInputBase = ({
  label,
  placeholder,
  disabled,
  type = 'text',
  maxLength = 5000,
  multiline = false,
  ...props
}) => {
  const [field] = useField(props)

  return (
    <InputBase
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      type={type}
      {...field}
      {...props}
      multiline={multiline}
      inputProps={{
        'data-testid': field.name,
        maxLength: { maxLength },
      }}
    />
  )
}

export default FormikInputBase
