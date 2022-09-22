import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../hoc/Context";

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
  "& .MuiInputBase-root, & .MuiTextField-root": {
    position: "relative",
    height: "30px",
    width: "100%",
    padding: theme.spacing(1, 2, 1, 2),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    borderRadius: 10,
    backgroundColor: "#F1f3f4",
    //change background for input
    "&.Mui-focused": {
      backgroundColor: "#fff",
      boxShadow: "-1px 1px 3px 1px #C2C3C3",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      width: "60ch",
      height: "46px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75ch",
      height: "46px",
    },
  },
}));

export const SearchBox: React.FC = () => {
  const { value, container } = React.useContext(AppContext);
  const [search, setSearch] = React.useState("");

  console.log(container);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <Search
      sx={{
        flex: 1,
      }}
    >
      <StyledInputBase
        onChange={onSearch}
        value={search}
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
                  onClick={() => setSearch("")}
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
