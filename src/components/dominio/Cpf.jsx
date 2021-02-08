import React from 'react'
import MaskedInput from 'react-text-mask'
import { retirarCharEspeciais } from '../formik/funcoesUtilitarias'
import FormikTextField from '../formik/FormikTextField'

const DEFAULT_PLACEHOLDER = 'Informe o CPF'

const Cpf = ({
  name,
  placeholder = DEFAULT_PLACEHOLDER,
  callbackOnChange,
  label = 'CPF',
  disabled,
  errors,
  ...otherProps
}) => {
  const onChange = (event) => {
    if (event && event.target) {
      let cpf = event.target.value
      cpf = retirarCharEspeciais(cpf)
      if (callbackOnChange) {
        callbackOnChange(cpf)
      }
    }
  }

  function TextMaskCustom(props) {
    const { inputRef, ...other } = props
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null)
        }}
        placeholder={placeholder}
        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
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
        error={Boolean(errors && errors.cpf)}
      />
    </>
  )
}
export default Cpf
