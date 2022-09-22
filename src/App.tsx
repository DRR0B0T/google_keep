import "./App.scss";
import { Dashboard } from "./components/Dashboard";
import Box from "@mui/material/Box";
import * as React from "react";
import { AppContext } from "./hoc/Context";

function App() {
  const [changeArea, setChangeArea] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [container, setContainer] = React.useState<Array<string>>([]);

  //save to store
  const onSaveStore = () => {
    if (value.length) {
      setContainer((prev: Array<string>) => [value, ...prev]);
      setValue("");
    }
    setChangeArea(false);
  };

  return (
    <AppContext.Provider
      value={{
        changeArea,
        setChangeArea,
        value,
        setValue,
        container,
        setContainer,
        onSaveStore,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Dashboard />
      </Box>
    </AppContext.Provider>
  );
}

export default App;
