import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Popover from '@material-ui/core/Popover'
import logo from '../img/cadastro.jpeg'
import AppToolbarStyles from './AppToolbarStyles'

const useStyles = makeStyles(AppToolbarStyles, { name: 'AppToolbar' })

const AppToolbar = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorElApp, setAnchorApp] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseApp = () => {
    setAnchorApp(null)
  }

  const sair = Boolean(anchorEl)
  const apps = Boolean(anchorElApp)

  const id = sair ? 'simple-popover' : undefined
  const id2 = apps ? 'simple-popover' : undefined
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.cor}>
          <img alt='imagem_' className={classes.logo} src={logo} />
          <Divider orientation='vertical' flexItem className={classes.divisor} />
          <Typography className={classes.title}>Meus Clientes</Typography>

          <div>
            <Popover
              id={id}
              open={sair}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
            />
          </div>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppToolbar
