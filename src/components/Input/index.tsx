import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

interface IInput {
  setChangeArea:(changeArea:boolean)=>void
}


export const Input: React.FC<IInput> = ({setChangeArea}) => {

  return (
    <TextField
      onClick={()=>setChangeArea(true)}
      defaultValue={''}
      sx={{
        flex: 1,
        width: 'inherit',
        borderRadius: '5px',
        boxShadow: '-1px 1px 2px 2px #C2C3C3',

        "& fieldset": {border: 'none'},
        "& .MuiInputBase-root": {
          "& input::placeholder":{
            color: '#4c4c4c',
            opacity: 1,
            fontWeight: 500
          },
          '& .MuiOutlinedInput-input': {
            p: '0.6em',
          },

        },
      }}
      placeholder="Заметка..."
      InputProps={{
        endAdornment: (
          <InputAdornment
            sx={{width: 220, display: 'flex', justifyContent: 'space-between'}}
            position="end">
            <Tooltip title='Создать список' placement='bottom'>
              <IconButton

                type="button" aria-label="Создать список">
                <CheckBoxOutlinedIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title='Создать заметку с рисунком' placement='bottom'>
              <IconButton
                type="button" aria-label="Создать заметку с рисунком">
                <BrushOutlinedIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title='Создать фотозаметку' placement='bottom'>
              <IconButton
                type="button" aria-label="Создать фотозаметку">
                <PhotoOutlinedIcon/>
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  );
};

