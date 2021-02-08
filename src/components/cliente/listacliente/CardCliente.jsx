import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { useDispatch } from 'react-redux'
import '@ckeditor/ckeditor5-build-classic/build/translations/pt-br'
import EditIcon from '@material-ui/icons/Edit'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import history from '../../../store/history'
import { Actions } from '../../../ducks/cliente'
import CardClienteStyles from './CardClienteStyles'

const useStyles = makeStyles(CardClienteStyles, { name: 'CardCliente' })

const CardCliente = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEditarCliente = (animal) => {
    handleClose()
    dispatch(Actions.editarCliente(animal))
    history.push('/cliente')
  }

  const handleRemoverCliente = (animal) => {
    handleClose()
    dispatch(Actions.excluirCliente(animal))
  }

  return (
    <Card data-testid={`testeAnimal-${props.index}`} className={classes.cardInterno}>
      <Box display='flex' className={classes.barraTitulo}>
        <Box display='flex' alignItems='center' flexGrow={1}>
          <Typography variant='h5' data-testid={`nomeAnimal-${props.index}`}>
            {props.animal.nome}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center'>
          <IconButton
            data-testid={`editarAnimal-${props.index}`}
            name='edit'
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <EditIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleEditarCliente(props.animal)}>Editar</MenuItem>
            <MenuItem
              data-testid={`excluirAnimal-${props.index}`}
              onClick={() => handleRemoverCliente(props.animal)}
            >
              Deletar
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box className={classes.corpo}>
        <Typography variant='h6'>Categoria do Animal</Typography>
        <Typography variant='h5'>{props.animal.tipoAnimal?.descricao}</Typography>
        <Typography variant='h6'>Raça</Typography>
        <Typography variant='h5'>{props.animal.tipoAnimal?.racas[0].descricao}</Typography>
      </Box>
    </Card>
  )
}

export default CardCliente
