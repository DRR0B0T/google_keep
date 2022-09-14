import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';


export const MainListItems = () => {
  return (<React.Fragment>
    <ListItemButton   selected tabIndex={0}>
      <ListItemIcon  >
        <EmojiObjectsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Заметки" />
    </ListItemButton>
    <ListItemButton tabIndex={1}>
      <ListItemIcon>
        <NotificationsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Напоминания" />
    </ListItemButton>
    <ListItemButton tabIndex={2}>
      <ListItemIcon>
        <CreateOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Изменение ярлыков" />
    </ListItemButton>
    <ListItemButton tabIndex={3}>
      <ListItemIcon>
        <ArchiveOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Архив" />
    </ListItemButton>
    <ListItemButton tabIndex={4}>
      <ListItemIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill={'#707070'}  d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
          <path fill={'#707070'} d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
        </svg>
      </ListItemIcon>
      <ListItemText primary="Корзина" />
    </ListItemButton>
  </React.Fragment>)
}

