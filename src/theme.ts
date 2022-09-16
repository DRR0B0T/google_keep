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
      main: '#202124',
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
        },
      },
    },
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