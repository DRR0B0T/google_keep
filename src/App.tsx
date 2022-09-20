import './App.scss';
import {Dashboard} from './components/Dashboard'
import Box from "@mui/material/Box";
import * as React from "react";
import AppContext from "./hoc/Context";




function App () {


  return (
   <AppContext.Provider value={{

   }}>
     <Box
         sx={{
           width: '100%',
           height: '100%',
         }}>
       <Dashboard />
     </Box>
   </AppContext.Provider>
  );
}

export default App;