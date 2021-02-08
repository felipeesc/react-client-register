import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import { Actions as ClienteActions } from '../../../ducks/cliente'
import history from '../../../store/history'
import ListaClienteStyles from './ListaClienteStyles'
import CardCliente from './CardCliente'

const useStyles = makeStyles(ListaClienteStyles, { name: 'ListaCliente' })

const ListaCliente = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // const { clientes: cliente = [] } = useSelector((state) => state.cliente)
  const { clientes: cliente = [] } = []

  useEffect(() => {
    dispatch(ClienteActions.recuperarClientes())
  }, [dispatch])

  const handleCadastrar = () => {
    dispatch(ClienteActions.limparCliente())
    history.push('/cliente')
  }

  return (
    <Formik enableReinitialize>
      <Form>
        <Grid
          container
          className={classes.gridPrincipalVazio}
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={6} className={classes.novoCliente}>
            <h3>Cadastrar nova Pessoa</h3>
            <AddCircleRoundedIcon />
            <Typography>Clique aqui para cadastrar</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.gridPrincipal} direction='row'>
          <Grid item xs={12}>
            <Typography variant='h5' gutterBottom>
              Pessoas cadastradas
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.novoCliente}>
              <h3>Cadastrar nova Pessoa</h3>
              <div className={classes.corpo}>
                <AddCircleRoundedIcon data-testid='btn-novo-cadastro' onClick={handleCadastrar} />
                <Typography>Clique aqui para cadastrar</Typography>
              </div>
            </div>
          </Grid>
          {cliente &&
            cliente?.map((cliente, index) => (
              <Grid key={`gridAnimal-${index}`} item xs={3}>
                <CardCliente key={`cardCliente-${index}`} cliente={cliente} index={index} />
              </Grid>
            ))}
        </Grid>
      </Form>
    </Formik>
  )
}

export default ListaCliente
