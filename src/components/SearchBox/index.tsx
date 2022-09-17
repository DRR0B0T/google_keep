import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    position: 'relative',
    padding: theme.spacing(1, 1, 1, 5),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#F1f3f4',
    '&:focus': {
      backgroundColor: '#fff',
      boxShadow: 'inset 1px 1px 0 rgb(0 0 0 / 10%), inset -1px -1px 0 rgb(0 0 0 / 7%)',
    },
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      height: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '65ch',
      height: '30px',
    },
  },
}));
export const SearchBox: React.FC = () => {
  return (
    <Search sx={{
      flex: 1,

    }}>
      <Tooltip title='Поиск' placement='bottom'>
        <IconButton size="medium" aria-label="show 4 new mails" color="secondary" sx={{
          position:'absolute',
          left: 0,
          top: 2,
          zIndex: 1,
        }}>
          <SearchIcon/>
        </IconButton>
      </Tooltip>
      <StyledInputBase
        placeholder="Поиск…"
        inputProps={{'aria-label': 'search',}}
      />
      <Tooltip title='Удалить поисковый запрос' placement='bottom'>
        <IconButton size="medium" aria-label="show 4 new mails" color="secondary" sx={{
          position:'absolute',
          left: {lg: '25em', md: '15em'},
          top: 2,
          zIndex: 1,

        }}>
          <CloseIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title='Обновить' placement='bottom'>
        <IconButton sx={{ml:20}} size="large" aria-label="show 4 new mails" color="secondary">
          <RefreshIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Список' placement='bottom'>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="secondary"
        >
          <GridViewIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Настройки' placement='bottom'>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="secondary"
        >
          <SettingsOutlinedIcon/>
        </IconButton>
      </Tooltip>
    </Search>
  );
};

