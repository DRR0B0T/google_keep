import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import CloseIcon from '@mui/icons-material/Close';

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

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(1, 1),
  marginLeft: theme.spacing(1),
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  top: 2
}));

const CloseIconWrapper = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  right: 0,
  top: 2
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
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
      width: '50ch',
      height: '30px',
    },
  },
}));
export const SearchBox: React.FC = () => {
  return (
      <Search>
        <SearchIconWrapper>
          <SearchIcon
              sx={{
                fill: '#909397',
                zIndex: 5,
                width: 24,
                height: 24,
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#e3e5e6',
                  cursor: 'pointer',
                  padding: 1,
                  width: 38,
                  height: 38,
                }
              }}
          />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Поиск…"
            inputProps={{'aria-label': 'search'}}
        />
        <CloseIconWrapper>
          <CloseIcon sx={{
            fill: '#909397',
            zIndex: 5,
            width: 24,
            height: 24,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: '#e3e5e6',
              cursor: 'pointer',
              padding: 1,
              width: 38,
              height: 38,
            }
          }}/>
        </CloseIconWrapper>
      </Search>
  );
};

