import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#5F6368',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Name of the component
    MuiList: {

      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
        },
      },
    },
  },
});

export default theme;