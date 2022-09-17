import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import UTurnRightOutlinedIcon from '@mui/icons-material/UTurnRightOutlined';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import {Button,  Typography} from "@mui/material";

interface IWorkSpace {

}


export const Workspace: React.FC<IWorkSpace> = () => {
  const [value, setValue] = React.useState('')
  const [changeArea, setChangeArea] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClearInput = () => {
    setValue('')
  }

  const sortRef = React.useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLInputElement>
  React.useEffect(() => {

    if (sortRef.current) {
      sortRef.current.focus()
    }
    const handleOutsideClick = (event: MouseEvent): void => {
      const path = (event.composedPath && event.composedPath()) //type of path clicked by mouse
      if (!path.includes(sortRef.current as HTMLDivElement)) {
        setChangeArea(false)
      }
    }
    document.body.addEventListener('click', handleOutsideClick)

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [setChangeArea, sortRef])

  //moving caret to the end of string when user clicked on it
  const moveCaretAtEnd = (e: React.FocusEvent<HTMLInputElement>):void => {
    console.log(e.target.value)
    let temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }
  return (
    <Box
      component="form"
      sx={{
        m: '16px auto 32px auto',
        p: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 600,
      }}
    >

      {!changeArea ? <TextField
          onClick={() => setChangeArea(true)}
          value={value}
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
          onChange={handleChange}
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
        : <TextField
          onFocus={moveCaretAtEnd}
          autoFocus
          ref={sortRef}
          value={value}
          multiline
          minRows={1}
          maxRows={15}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: 'inherit',
            borderRadius: '5px',
            boxShadow: '-1px 1px 2px 2px #C2C3C3',
            "& fieldset": {border: 'none',},
            "& textarea": {pt: '15px', mt: 3, fontSize: '.875rem'},
            "& .MuiInputBase-root": {
              p: '0.7em',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '& textarea::placeholder': {
                color: '#4c4c4c',
                opacity: 1,
                fontWeight: 500
              }
            },

          }}
          placeholder="Заметка..."
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography
                  color='secondary'
                  sx={{
                    mt: 2,
                    fontWeight: 500,
                  }} variant='body1'>
                  Введите заголовок
                </Typography>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                sx={{
                  display: 'flex',
                  width: 220,
                  mb: 2,
                  mt: 4
                }}
                position="end">
               <Tooltip title='Сохранить напоминание' placement='bottom'>
                 <IconButton
                   type="button" aria-label="Сохранить напоминание">
                   <AddAlertOutlinedIcon fontSize={'small'}/>
                 </IconButton>
               </Tooltip>
                <Tooltip title='Соавторы' placement='bottom'>
                  <IconButton
                    type="button" aria-label="Соавторы">
                    <PersonAddAltOutlinedIcon fontSize={'small'}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title='Параметры фона' placement='bottom'>
                  <IconButton
                    type="button" aria-label="Параметры фона">
                    <PaletteOutlinedIcon fontSize={'small'}/>
                  </IconButton>
                </Tooltip>
               <Tooltip title='Добавить картинку' placement='bottom'>
                 <IconButton
                   type="button" aria-label="Добавить картинку">
                   <PhotoOutlinedIcon fontSize={'small'}/>
                 </IconButton>
               </Tooltip>
                <Tooltip title='Архивировать' placement='bottom'>
                  <IconButton
                    type="button" aria-label="Архивировать">
                    <ArchiveOutlinedIcon fontSize={'small'}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title='Ещё' placement='bottom'>
                  <IconButton
                    type="button" aria-label="Ещё">
                    <MoreVertOutlinedIcon fontSize={'small'}/>
                  </IconButton>
                </Tooltip>
                {!value ?
                    <IconButton
                      sx={{
                        transform: 'rotate(90deg)'
                      }}
                      type="button"
                      aria-label="Отменить"
                      onClick={onClearInput}
                      disabled
                    >
                      <UTurnLeftOutlinedIcon fontSize={'small'}/>
                    </IconButton>
                  :
                  <Tooltip title='Отменить' placement='bottom'>
                    <IconButton
                      sx={{
                        transform: 'rotate(90deg)'
                      }}
                      type="button"
                      aria-label="Отменить"
                      onClick={onClearInput}
                    >
                      <UTurnLeftOutlinedIcon fontSize={'small'}/>
                    </IconButton>
                  </Tooltip>
                }
                <Tooltip title='Повторить' placement='bottom'>
                  <IconButton sx={{
                    transform: 'rotate(270deg)'
                  }}
                              type="button" aria-label="Повторить">
                    <UTurnRightOutlinedIcon fontSize={'small'}/>
                  </IconButton>
                </Tooltip>
                <Button
                  sx={{
                    position: 'absolute',
                    textTransform: 'none',
                    right: 10,
                    w: 40,
                    h: 20,
                    color: '#212121'
                  }}
                  onClick={() => setChangeArea(false)}
                >Закрыть</Button>
              </InputAdornment>
            ),
          }}
        />}
    </Box>
  );
}
