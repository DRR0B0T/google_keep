import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import UTurnRightOutlinedIcon from '@mui/icons-material/UTurnRightOutlined';
import {Button, Typography} from "@mui/material";

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
    const handleOutsideClick = (event: MouseEvent):void => {
      const path = (event.composedPath && event.composedPath()) //type of path clicked by mouse
      if (!path.includes(sortRef.current as HTMLDivElement)) {
        setChangeArea(false)
      }
    }
    document.body.addEventListener('click',   handleOutsideClick)

    return () => {
      document.body.removeEventListener('click',   handleOutsideClick)
    }
  }, [setChangeArea, sortRef])

  return (
      <Box
          ref={sortRef}
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
                multiline
                maxRows={10}
                sx={{
                  flex: 1,
                  color: '#3a3939',
                  width: 'inherit',
                  borderRadius: '5px',
                  boxShadow: '-1px 1px 2px 2px #C2C3C3',
                  "& fieldset": {border: 'none'},
                  "& .MuiInputBase-root": {p: '0.7em',},
                  "& textarea::placeholder": {color: '#3a3939'},
                }}
                placeholder="Заметка..."
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                      <InputAdornment
                          sx={{width: 220, display: 'flex', justifyContent: 'space-between'}}
                          position="end">
                        <IconButton type="button" aria-label="Создать список">
                          <CheckBoxOutlinedIcon/>
                        </IconButton>
                        <IconButton type="button" aria-label="Создать заметку с рисунком">
                          <BrushOutlinedIcon/>
                        </IconButton>
                        <IconButton type="button" aria-label="Создать фотозаметку">
                          <PhotoOutlinedIcon/>
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
            />
            : <TextField
                value={value}
                multiline
                minRows={5}
                maxRows={15}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#3a3939',
                  width: 'inherit',

                  borderRadius: '5px',
                  boxShadow: '-1px 1px 2px 2px #C2C3C3',
                  "& fieldset": {border: 'none',},
                  "& textarea": {mt: 3},
                  "& textarea::placeholder": {color: '#5F6368'},
                  "& .MuiInputBase-root": {
                    p: '0.7em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
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
                              mt: 2
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
                        <IconButton type="button" aria-label="Сохранить напоминание">
                          <AddAlertOutlinedIcon fontSize={'small'}/>
                        </IconButton>
                        <IconButton type="button" aria-label="Соавторы">
                          <PersonAddAltOutlinedIcon fontSize={'small'}/>
                        </IconButton>
                        <IconButton type="button" aria-label="Параметры фона">
                          <PaletteOutlinedIcon fontSize={'small'}/>
                        </IconButton>
                        <IconButton type="button" aria-label="Добавить картинку">
                          <PhotoOutlinedIcon fontSize={'small'}/>
                        </IconButton>
                        <IconButton type="button" aria-label="Архивировать">
                          <ArchiveOutlinedIcon fontSize={'small'}/>
                        </IconButton>
                        <IconButton type="button" aria-label="Ещё">
                          <MoreVertOutlinedIcon fontSize={'small'}/>
                        </IconButton>
                        {!value ? <IconButton
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
                            : <IconButton
                                sx={{
                                  transform: 'rotate(90deg)'
                                }}
                                type="button"
                                aria-label="Отменить"
                                onClick={onClearInput}
                            >
                              <UTurnLeftOutlinedIcon fontSize={'small'}/>
                            </IconButton>

                        }
                        <IconButton sx={{
                          transform: 'rotate(270deg)'
                        }} type="button" aria-label="Повторить">
                          <UTurnRightOutlinedIcon fontSize={'small'}/>
                        </IconButton>
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
