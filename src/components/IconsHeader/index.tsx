import * as React from "react";

import IconButton from "@mui/material/IconButton";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

import Tooltip from '@mui/material/Tooltip';

export const IconsHeader = <Box sx={{display: {xs: 'none', md: 'flex'}}}>

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