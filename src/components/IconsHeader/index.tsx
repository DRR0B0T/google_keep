import * as React from "react";

import IconButton from "@mui/material/IconButton";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

import Tooltip from '@mui/material/Tooltip';
import RefreshIcon from "@mui/icons-material/Refresh";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const IconsHeader = <Box sx={{display: {xs: 'none', md: 'flex'}}}>
  <Tooltip title='Обновить' placement='bottom'>
    <IconButton size="large" aria-label="show 4 new mails" color="secondary">
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
      sx={{
        mr: {md:0,lg:5}
      }}
      size="large"
      aria-label="show 17 new notifications"
      color="secondary"
    >
      <SettingsOutlinedIcon/>
    </IconButton>
  </Tooltip>
  <Tooltip title='Приложения Google' placement='bottom'>
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="secondary"
    >
      <AppsRoundedIcon/>
    </IconButton>
  </Tooltip>
  <Tooltip title='Аккаунт Google' placement='bottom'>
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      color="secondary"
    >
      <AccountCircle/>
    </IconButton>
  </Tooltip>
</Box>