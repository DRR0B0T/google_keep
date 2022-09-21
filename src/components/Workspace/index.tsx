import * as React from "react";
import Box from "@mui/material/Box";
import { InputText } from "../InputText";
import { Input } from "../Input";
import { AppContext } from "../../hoc/Context";

export const Workspace: React.FC = () => {
  const { changeArea, setChangeArea, value, setValue, setContainer } =
    React.useContext(AppContext);

  const sortRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const path = event.composedPath && event.composedPath(); //type of path clicked by mouse
      if (!path.includes(sortRef.current as HTMLDivElement)) {
        if (value) {
          setContainer((prev: Array<string>) => [value, ...prev]);
          setValue("");
        }
        setChangeArea(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [value]);

  return (
    <Box
      ref={sortRef}
      component="form"
      sx={{
        m: "16px auto 32px auto",
        p: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 600,
      }}
    >
      {changeArea ? <InputText /> : <Input />}
    </Box>
  );
};
