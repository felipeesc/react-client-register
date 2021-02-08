import grey from '@material-ui/core/colors/grey'

const styles = (theme) => ({
  cardInterno: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: 'none',
    borderRadius: 0,
    margin: 10,
    '& h5': {
      fontSize: 14,
      fontStyle: 'Normal',
      fontWeight: 'Normal',
      color: '#2D9CDB',
      margin: 0,
      padding: 10,
      textAlign: 'left',
    },
    '&:hover': {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      backgroundColor: grey[100],
    },
  },
  barraTitulo: {
    margin: 0,
    borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)',
  },
  corpo: {
    minHeight: 174,
    padding: 15,
    '& h6': {
      fontSize: 10,
      color: '#2D9CDB',
    },
    '& h5': {
      fontSize: 14,
      color: '#000000 !important',
      padding: '4px 0 16px 0',
    },
  },
})

export default styles
