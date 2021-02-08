import { createMuiTheme } from '@material-ui/core/styles'

export const configTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: '#054672',
      },
      secondary: {
        main: '#2D9CDB',
      },
      background: {
        default: '#F9F9F9',
      },
    },
    overrides: {
      MuiInputBase: {
        root: {
          background: '#fff',
        },
      },
    },
  })

const styles = (theme) => ({
  root: theme.typography.body1,
})

export default styles
