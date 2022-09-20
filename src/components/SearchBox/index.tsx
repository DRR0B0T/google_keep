import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "auto",
  },
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& fieldset": { border: "none" },
  "& .MuiInputBase-input": {
    height: "30px",
    width: "100%",
  },
  "& .MuiInputBase-root, & .MuiTextField-root": {
    position: "relative",
    padding: theme.spacing(1, 2, 1, 2),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    borderRadius: 5,

    width: "100%",
    backgroundColor: "#F1f3f4",
    "&:focus": {
      backgroundColor: "#fff",
      boxShadow:
        "inset 1px 1px 0 rgb(0 0 0 / 10%), inset -1px -1px 0 rgb(0 0 0 / 7%)",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      width: "60ch",
      height: "46px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70ch",
      height: "46px",
    },
  },
}));

export const SearchBox: React.FC = () => {
  // const { value } = React.useContext(AppContext);

  // const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <Search sx={{ flex: 1 }}>
      <StyledInputBase
        // onChange={onSearch}
        placeholder="Поиск…"
        InputProps={{
          "aria-label": "search",
          startAdornment: (
            <InputAdornment position="start">
              <Tooltip title="Поиск" placement="bottom">
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="secondary"
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="Удалить поисковый запрос" placement="bottom">
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="secondary"
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </Search>
  );
};
