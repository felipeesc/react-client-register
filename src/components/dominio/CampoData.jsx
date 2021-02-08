import React, { useEffect, useState } from 'react'
import { KeyboardDatePicker } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import { convertDateToPtBr } from '../formik/funcoesUtilitarias'

const CampoData = ({ name, value, onBlur, setFieldValue, label = ' ' }) => {
  const [dataInformada, setDataInformada] = useState(null)

  useEffect(() => {
    if (value) {
      const dia = value.substring(0, 2)
      const mes = value.substring(3, 5)
      const ano = value.substring(6, 10)
      const dataPadraoUS = `${mes}/${dia}/${ano}`

      setDataInformada(dataPadraoUS)
    }
  }, [value])

  const handleChange = (data) => {
    if (data) {
      const novaData = convertDateToPtBr(data)
      setDataInformada(data)
      setFieldValue(name, novaData)
    } else {
      setFieldValue(name, null)
    }
  }

  return (
    <Grid container>
      <KeyboardDatePicker
        // disableToolbar
        // variant="inline"
        format='dd/MM/yyyy'
        margin='normal'
        id={name}
        inputVariant='outlined'
        data-testid={name}
        label={label}
        value={dataInformada}
        onChange={handleChange}
        onBlur={onBlur}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      />
    </Grid>
  )
}
export default CampoData
