const TelaInicialStyles = () => ({
  linhasTelaInteira: {
    border: '1px solid #E0E0E0',
    height: '100vh',
    width: 446,
    top: 0,
    marginLeft: 20,
    zIndex: 1,
    position: 'absolute',
  },
  gridPrincipal: {
    overflow: 'hidden',
    backgroundColor: '#FFFFFC',
  },
  colunaEsquerda: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    height: 'calc(100vh - 48px)',
    zIndex: 2,
    '& h2': {
      fontFamily: 'Quattrocento',
      marginLeft: 12,
      marginTop: 100,
    },
    '& button': {
      backgroundColor: '#B8A78D',
      borderRadius: '0',
      fontFamily: 'Quattrocento',
      marginBottom: 100,
      marginLeft: 12,
    },
    '& img': {
      width: '90%',
      boxShadow: '-574px 625px 0px 600px rgba(224,224,224,1)',
      marginBottom: '-8px',
    },
  },
  colunaDireita: {
    overflow: 'auto',
    height: 'calc(100vh - 48px)',
    padding: '40px 20px 20px 20px !important',
    border: '1px solid #E0E0E0',
    borderTop: 'none',
    borderBottom: 'none',
    '& h4': {
      fontFamily: 'Quattrocento',
    },
    '& p': {
      fontFamily: 'Quattrocento Sans',
      color: '#888380',
    },
  },
})

export default TelaInicialStyles
