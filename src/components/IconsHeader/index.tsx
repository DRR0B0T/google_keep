import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import * as React from "react";

export const IconsHeader = <Box sx={{display: {xs: 'none', md: 'flex'}}}>
  <IconButton size="large" aria-label="show 4 new mails" color="secondary">
    <RefreshIcon/>
  </IconButton>
  <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="secondary"
  >
    <GridViewIcon/>
  </IconButton>
  <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="secondary"
  >
    <SettingsOutlinedIcon/>
  </IconButton>
  <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="secondary"
  >
    <AppsRoundedIcon/>
  </IconButton>
  <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      color="secondary"
  >
    <AccountCircle/>
  </IconButton>
</Box>