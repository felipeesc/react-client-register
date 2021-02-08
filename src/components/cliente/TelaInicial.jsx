import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import history from '../../store/history'
import TelaInicialStyles from './TelaInicialStyles'
import telaInicialImg from '../../img/img-fundo.jpeg'

const useStyles = makeStyles(TelaInicialStyles, { name: 'TelaInicial' })

const TelaInicial = () => {
  const classes = useStyles()
  const handleIniciarClick = () => {
    history.push('/lista-cliente')
  }

  return (
    <Grid
      className={classes.gridPrincipal}
      container
      direction='row'
      alignItems='center'
      justify='center'
    >
      <Grid container item spacing={2} sm={12} md={11} xl={9}>
        <Grid item xs={7} className={classes.colunaEsquerda}>
          <Typography variant='h2' gutterBottom>
            Clientes
          </Typography>
          <Button
            data-testid='btnCadastro'
            variant='contained'
            onClick={handleIniciarClick}
            color='primary'
          >
            Cadastrar Clientes
          </Button>
          <img alt='imagem_' src={telaInicialImg} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TelaInicial
