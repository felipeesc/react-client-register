import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormikRadioButton from './FormikRadioButton'

const FormikRadioGroup = ({ label, radios }) => {
  const [value, setValue] = React.useState('female')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={`group-${label}`}
        value={value}
        onChange={handleChange}
        row
      >
        {radios.map((radioButton) => {
          return <FormikRadioButton label={radioButton.label} {...radioButton.props} />
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default FormikRadioGroup
