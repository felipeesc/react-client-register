import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useEffect, useState } from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import _ from 'lodash'
import DetailsIcon from '@material-ui/icons/Details'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import { Actions as AvisosActions } from '../ducks/avisos'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

function CloseButon ({ close }) {
  return <CloseIcon aria-label='Close' color='inherit' onClick={close} />
}

function DetailButon ({ open, detail }) {
  return !open ? <DetailsIcon onClick={detail} /> : <ChangeHistoryIcon onClick={detail} />
}

function Snackbar ({ property, close, severity }) {
  const [detalhar, setDetalhar] = useState(false)
  const [actions, setActions] = useState([])

  const handleDetalhar = useCallback(() => {
    setDetalhar(!detalhar)
  }, [detalhar])

  useEffect(() => {
    const actions = []
    if (!_.isNil(property) && !_.isNil(property.detalhe)) {
      actions.push(
        <DetailButon key={`detail${severity}`} open={detalhar} detail={handleDetalhar} />
      )
    }
    actions.push(<CloseButon key={`close${severity}`} close={close} />)
    setActions(actions)
  }, [property, detalhar, close, severity, handleDetalhar])

  return !_.isNil(property) ? (
    <MuiSnackbar key={severity} open autoHideDuration={10000} onClose={close}>
      <Alert onClose={close} severity={severity} action={actions}>
        {property.mensagens.map((mensagem, index) => (
          <Typography key={`severity${index}`}>{mensagem}</Typography>
        ))}
        <Typography>{detalhar ? property.detalhe : null}</Typography>
      </Alert>
    </MuiSnackbar>
  ) : null
}

const Alertas = () => {
  const erro = useSelector(({ avisos: { erro } }) => erro)

  const alerta = useSelector(({ avisos: { alerta } }) => alerta)

  const info = useSelector(({ avisos: { info } }) => info)

  const sucesso = useSelector(({ avisos: { sucesso } }) => sucesso)

  const dispatch = useDispatch()

  const handleFechar = () => {
    dispatch(AvisosActions.limpar())
  }

  return (
    <>
      <Snackbar property={erro} close={handleFechar} severity='error' />
      <Snackbar property={alerta} close={handleFechar} severity='warning' />
      <Snackbar property={info} close={handleFechar} severity='info' />
      <Snackbar property={sucesso} close={handleFechar} severity='success' />
    </>
  )
}

export default Alertas
