import './App.scss';
import {MiniDrawer} from './components/Dashboard'
import Box from "@mui/material/Box";
import * as React from "react";


function App() {
  return (
    <Box  sx={{
      width: '100%',
      height: '100%',
    }}>
      <MiniDrawer />
    </Box>
  );
}

export default App;
