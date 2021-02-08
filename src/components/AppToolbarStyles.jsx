const AppToolbarStyles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    '& .MuiAppBar-root': {
      boxShadow: 'none',
      borderBottom: '1px solid #BDBDBD',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    alignItems: 'center',
    color: '#2D9CDB',
  },
  divisor: {
    background: '#BDBDBD',
    margin: '12px',
  },
  cor: {
    backgroundColor: '#FFFFFF',
    color: '#000',
  },
  avatar: {
    backgroundColor: '#2D9CDB',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    '& span': {
      display: 'block',
      visibility: 'hidden',
      width: 12,
      '&:first-letter': {
        visibility: 'visible',
      },
    },
  },
  logo: {
    maxWidth: '50px',
    maxHeight: '70px',
    width: '5%',
    height: '5%',
  },
})
export default AppToolbarStyles
