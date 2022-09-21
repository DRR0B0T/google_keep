import * as React from "react";

interface AppContextType {
  changeArea: boolean;
  value: string;
  setValue: (value: string) => void;
  setChangeArea: (changeArea: boolean) => void;
  container: Array<string>;
  setContainer: (container: (prev: Array<string>) => any) => void;
  onSaveStore: () => void;
}

export const IAppContext = {
  value: "",
  setValue: () => null,
  changeArea: false,
  setChangeArea: () => null,
  container: [],
  setContainer: () => null,
  onSaveStore: () => null,
};

export const AppContext = React.createContext<AppContextType>(IAppContext);
