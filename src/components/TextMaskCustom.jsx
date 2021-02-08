import React from 'react'
import MaskedInput from 'react-text-mask'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

const TextMaskCustom = (props) => {
  const { inputRef, mascaraRegex, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={mascaraRegex}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

export default TextMaskCustom
