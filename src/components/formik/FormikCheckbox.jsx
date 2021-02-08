import React from 'react'
import { Field, useField } from 'formik'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const FormikCheckbox = ({ label = '', disabled, callbackOnChange = () => {}, ...props }) => {
  const [field] = useField(props)

  return (
    <>
      <FormControlLabel
        label={label}
        // error={true}
        control={
          <Field
            name={field.name}
            type='checkbox'
            data-testid={field.name}
            disabled={disabled}
            as={Checkbox}
          />
        }
      />
      {callbackOnChange()}
      {/* {true && <FormHelperText>exibir msg erro</FormHelperText>} */}
    </>
  )
}

export default FormikCheckbox
