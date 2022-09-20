import * as React from "react";

interface AppContextType {
  changeArea: boolean;
  value: string;
  setValue: (value: string) => void;
  setChangeArea: (changeArea: boolean) => void;
}

export const IAppContext = {
  value: "",
  changeArea: false,
  setValue: () => "",
  setChangeArea: () => false,
};

export const AppContext = React.createContext<AppContextType>(IAppContext);
