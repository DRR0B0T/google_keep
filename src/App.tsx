import './App.scss';
import {MiniDrawer} from './components/Dashboard'
import Box from "@mui/material/Box";
import * as React from "react";

const AppContext = React.createContext<{}>({})


function App() {
  const [changeArea, setChangeArea] = React.useState(false)

  return (
   <AppContext.Provider value={{
     changeArea,
     setChangeArea
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
