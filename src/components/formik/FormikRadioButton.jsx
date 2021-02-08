import React from 'react'
import { useField } from 'formik'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const FormikRadioButton = ({ label, ...props }) => {
  const [field] = useField(props)

  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

export default FormikRadioButton
