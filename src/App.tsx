import './App.scss';
import {MiniDrawer} from './components/Dashboard'
import Box from "@mui/material/Box";
import * as React from "react";
import {createContext} from "react";

const AppContext = createContext({})


function App() {
  return (
   <AppContext.Provider value={{

   }}>
     <Box
         sx={{
           width: '100%',
           height: '100%',
         }}>
       <MiniDrawer />
     </Box>
   </AppContext.Provider>
  );
}

export default App;
