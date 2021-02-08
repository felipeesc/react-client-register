import React from 'react'
import MaskedInput from 'react-text-mask'
import { retirarCharEspeciais } from '../formik/funcoesUtilitarias'
import FormikTextField from '../formik/FormikTextField'

const DEFAULT_PLACEHOLDER = 'Informe o telefone'

const Telefone = ({
  name,
  placeholder = DEFAULT_PLACEHOLDER,
  callbackOnChange,
  label = 'TELEFONE',
  disabled,
  errors,
  ...otherProps
}) => {
  const onChange = (event) => {
    if (event && event.target) {
      let telefone = event.target.value
      telefone = retirarCharEspeciais(telefone)
      if (callbackOnChange) {
        callbackOnChange(telefone)
      }
    }
  }

  function TextMaskCustom (props) {
    const { inputRef, ...other } = props
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null)
        }}
        placeholder={placeholder}
        mask={['(',/\d/, /\d/, ')', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
      />
    )
  }

  return (
    <>
      <FormikTextField
        {...otherProps}
        label={label}
        name={name}
        disabled={disabled}
        InputProps={{
          inputComponent: TextMaskCustom
        }}
        onChange={onChange}
        error={Boolean(errors && errors.telefone)}
      />
    </>
  )
}
export default Telefone
