import grey from '@material-ui/core/colors/grey'

const ListaClienteStyles = (theme) => ({
  gridPrincipalVazio: {
    minHeight: 'calc(100vh - 64px)',
    display: 'none',
  },

  gridPrincipal: {
    height: '100%',
    padding: 20,
    '& h5': {
      color: '#2D9CDB',
    },
  },
  novoCliente: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
    '& h3': {
      fontSize: 18,
      fontStyle: 'Normal',
      fontWeight: 'Normal',
      color: theme.palette.secondary.main,
      margin: 0,
      padding: 10,
      textAlign: 'center',
      borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)',
    },
    '& svg': {
      fontSize: '84px',
      color: '#2D9CDB',
      margin: 16,
      cursor: 'pointer',
    },
    '& p': {
      fontSize: '14px',
      color: '#333333',
      margin: '0px 16px 16px 16px',
    },
  },
  animal: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    '& h5': {
      fontSize: 14,
      fontStyle: 'Normal',
      fontWeight: 'Normal',
      color: '#2D9CDB',
      margin: 0,
      padding: 10,
      textAlign: 'left',
      borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)',
    },
  },
  corpo: {
    minHeight: 176,
  },
  linhasTelaInteira: {
    border: '1px solid #E0E0E0',
    borderBottom: 'none',
    height: '100%',
    width: 446,
    top: 0,
    marginLeft: 20,
    zIndex: 1,
    position: 'fixed',
  },
  gridSecundario: {
    justifyContent: 'space-between',
  },
  colunaEsquerda: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h5': {
      fontSize: 32,
      padding: 30,
    },
    '& button': {
      boxShadow: 'none',
      zIndex: 2,
    },
  },
  titulo: {
    backgroundColor: '#F3F3F3',
    marginLeft: '-70%',
    paddingLeft: '70%',
  },
  colunaDireita: {
    height: 'calc(100vh - 138px)',
    border: '1px solid #E0E0E0',
    '& img': {
      width: '45%',
      position: 'fixed',
      top: '25vh',
      right: 0,
      boxShadow: '22px 22px 0 80px rgba(224,224,224,1)',
    },
  },
  rodape: {
    height: 76,
    marginLeft: 12,
    '& button': {
      fontSize: 26,
      color: '#CCC8C5',
      zIndex: 2,
      textTransform: 'lowercase',
    },
  },
  cardInterno: {
    border: '1px solid',
    borderColor: grey[400],
    boxShadow: 'none',
    borderRadius: 0,
    marginBottom: 10,
    '&:hover': {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      backgroundColor: grey[100],
    },
  },
  'spacing-xs-3': {
    margin: '200px',
  },
})

export default ListaClienteStyles
