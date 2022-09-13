import './App.scss';
import {PrimarySearchAppBar} from "./components/Header";
import Box from "@mui/material/Box";


function App() {
  return (
    <Box  sx={{
      width: '100%',
      height: '100%',
      backgroundColor: 'primary.dark',
    }}>
      <PrimarySearchAppBar/>
    </Box>
  );
}

export default App;
