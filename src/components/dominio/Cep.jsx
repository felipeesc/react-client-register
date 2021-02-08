import React from 'react'
import MaskedInput from 'react-text-mask'
import { retirarCharEspeciais } from '../formik/funcoesUtilitarias'
import FormikTextField from '../formik/FormikTextField'

const DEFAULT_PLACEHOLDER = 'Informe o CEP'

const Cep = ({
  name,
  placeholder = DEFAULT_PLACEHOLDER,
  callbackOnChange,
  label = 'CEP',
  disabled,
  errors,
  ...otherProps
}) => {
  const onChange = (event) => {
    if (event && event.target) {
      let cep = event.target.value
      cep = retirarCharEspeciais(cep)
      if (callbackOnChange) {
        callbackOnChange(cep)
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
        mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
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
        error={Boolean(errors && errors.cep)}
      />
    </>
  )
}
export default Cep
