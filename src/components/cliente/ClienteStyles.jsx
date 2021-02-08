const ClienteStyles = () => ({
  gridPrincipal: {
    minHeight: 'calc(100vh - 64px)',
    overflow: 'hidden',
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
      fontFamily: 'Quattrocento',
      fontSize: 32,
      padding: 30,
    },
    '& button': {
      fontFamily: 'Quattrocento Sans',
      boxShadow: 'none',
      zIndex: 2,
    },
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
  },
  botaoCentralizado: {
    justifyContent: 'center',
  },
})

export default ClienteStyles
