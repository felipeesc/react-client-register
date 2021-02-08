import React from 'react'
import { Form, Formik } from 'formik'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import makeStyles from '@material-ui/core/styles/makeStyles'
import history from '../../store/history'
import ClienteStyles from './ClienteStyles'
import { Actions as ClienteActions } from '../../ducks/cliente'
import FormikTextField from '../formik/FormikTextField'
import Cpf from '../dominio/Cpf'
import Cep from '../dominio/Cep'
import Telefone from '../dominio/Telefone'
import { retirarCharEspeciais } from '../formik/funcoesUtilitarias'

const useStyles = makeStyles(ClienteStyles, { name: 'Animal' })

export const validationSchema = Yup.object().shape({
  nome: Yup.string().trim().required('Informe o nome').nullable(),
  email: Yup.string().trim().required('Informe o email').nullable(),
  cep: Yup.string().trim().required('Informe o cep').nullable(),
  telefone: Yup.string().trim().required('Informe o telefone').nullable(),
  logradouro: Yup.string().trim().required('Informe o logradouro').nullable(),
  bairro: Yup.string().trim().required('Informe o bairro').nullable(),
  localidade: Yup.string().trim().required('Informe a localidade').nullable(),
  uf: Yup.string().trim().required('Informe uf').nullable(),
  complemento: Yup.string().trim()
})

export const INITIAL_FORM_VALUES = {
  nome: '',
  email: '',
  telefone: '',
  cep: '',
  Cpf: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: '',
  complemento: ''
}

const Cliente = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cliente = null

  const submitForm = (values) => {
    const jsonString = JSON.stringify(values)
    const posicao = jsonString.indexOf('cep')
    const trataString = jsonString.substr(0, posicao).concat('endereco' + '"' + ':' + '{').concat(jsonString.substr(posicao - 1))
    const ultimaPosition = trataString.length
    const jsonValue = trataString.substr(0, ultimaPosition).concat('}')
    dispatch(ClienteActions.salvarCliente(jsonValue))
  }

  const getInitialValuesFormik = () => {
    return INITIAL_FORM_VALUES
  }

  function buscaViaCep (ev, setFieldValue) {
    const { value } = ev.target
    const cep = retirarCharEspeciais(value)
    if (cep.length !== 8) {
      return
    }
    console.log(`https://viacep.com.br/ws/${cep}/json/`)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        setFieldValue('logradouro', data.logradouro)
        setFieldValue('bairro', data.bairro)
        setFieldValue('localidade', data.localidade)
        setFieldValue('uf', data.uf)
        setFieldValue('complemento', data.complemento)
      })
  }

  return (
    <Formik
      initialValues={getInitialValuesFormik(cliente)}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={submitForm}
    >
      {({ values, handleBlur, setFieldValue }) => {
        return (
          <Form>
            <Grid container direction='row' justify='center' className={classes.gridPrincipal}>
              <Grid item xs={6}>
                <Grid item xs={12}>
                  <Box m={3} color='secondary.main'>
                    <Typography variant='h5' gutterBottom>
                      Cadastrar Pessoa
                    </Typography>
                  </Box>
                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      Nome
                    </Typography>
                    <FormikTextField
                      data-testid='nome'
                      name='nome'
                      label='Nome'
                      placeholder='Nome'
                      variant='outlined'
                      maxLength={100}
                      fullWidth
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      CPF
                    </Typography>
                    <Cpf
                      name='Cpf'
                      label='Cpf'
                      placeholder='informe seu CPF'
                      variant='outlined'
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={handleBlur}
                      callbackOnChange={(valor) => values.Cpf = valor}
                    />
                  </Box>
                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      Email
                    </Typography>
                    <FormikTextField
                      data-testid='email'
                      name='email'
                      label='email'
                      placeholder='informe seu email'
                      variant='outlined'
                      fullWidth
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      Telefone
                    </Typography>
                    <Telefone
                      data-testid='telefone'
                      name='telefone'
                      label='telefone'
                      placeholder='informe seu telefone'
                      variant='outlined'
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={handleBlur}
                      callbackOnChange={(valor) => values.telefone = valor}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      CEP
                    </Typography>
                    <Cep
                      data-testid='cep'
                      name='cep'
                      label='cep'
                      placeholder='informe seu CEP'
                      variant='outlined'
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={(ev) => buscaViaCep(ev, setFieldValue)}
                      callbackOnChange={(valor) => values.cep = valor}

                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      logradouro
                    </Typography>
                    <FormikTextField
                      data-testid='logradouro'
                      name='logradouro'
                      label='logradouro'
                      placeholder='logradouro'
                      variant='outlined'
                      fullWidth
                      style={{ margin: '10px 0 10px 0' }}
                      disabled={handleBlur}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      bairro
                    </Typography>
                    <FormikTextField
                      data-testid='bairro'
                      name='bairro'
                      label='bairro'
                      placeholder='bairro'
                      variant='outlined'
                      style={{ margin: '10px 0 10px 0' }}
                      disabled={handleBlur}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      cidade
                    </Typography>
                    <FormikTextField
                      data-testid='localidade'
                      name='localidade'
                      label='localidade'
                      placeholder='localidade'
                      variant='outlined'
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      UF
                    </Typography>
                    <FormikTextField
                      data-testid='uf'
                      name='uf'
                      label='uf'
                      placeholder='uf'
                      variant='outlined'
                      style={{ margin: '10px 0 10px 0' }}
                      disabled={handleBlur}
                      onBlur={handleBlur}
                    />
                  </Box>

                  <Box m={3}>
                    <Typography variant='h6' gutterBottom>
                      complemento
                    </Typography>
                    <FormikTextField
                      data-testid='complemento'
                      name='complemento'
                      label='complemento'
                      placeholder='complemento'
                      variant='outlined'
                      fullWidth
                      style={{ margin: '10px 0 10px 0' }}
                      onBlur={handleBlur}
                    />
                  </Box>

                </Grid>
              </Grid>

              <Grid item xs={6} className={classes.rodape}>
                <Box display='flex' className={classes.botaoCentralizado}>
                  <Box display='flex' alignItems='center'>
                    <Button data-testid='btn-cancelar' onClick={() => history.push('/')}>
                      CANCELAR
                    </Button>
                  </Box>
                  <Box display='flex' alignItems='center'>
                    <Button
                      data-testid='btn-salvar'
                      type='submit'
                      color='primary'
                      variant='contained'
                      style={{ margin: '20px' }}
                    >
                      Salvar
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Cliente
