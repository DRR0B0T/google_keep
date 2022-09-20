import * as React from "react";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MainListItems } from "./MainListItems";
import { Logo } from "../Logo";
import { SearchBox } from "../SearchBox";
import { IconsHeader } from "../IconsHeader";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import { Workspace } from "../Workspace";
import { InputText } from "../InputText";

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,

  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function Dashboard() {
  const themeMd = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {Logo}

            <SearchBox />
            <Box sx={{}}>{IconsHeader}</Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              ...(!open && { border: "none" }),
            },
          }}
          variant="permanent"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {themeMd.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List
            sx={{
              // selected box style for all container
              pl: "3px",

              "&& .MuiListItemButton-gutters ": {
                p: "8px 15px",
              },

              // selected and (selected + hover) states
              "&& .Mui-selected, && .Mui-selected:hover": {
                mr: 0,
                bgcolor: "#FEEFC3",
                borderRadius: "0 25px 25px 0",
                // selected style when open === false
                ...(!open && { borderRadius: "50%", width: 50 }),
                ...(open && {
                  "&& .MuiListItemButton-gutters ": {
                    width: drawerWidth,
                  },
                }),
                "&, & .MuiListItemIcon-root": {
                  color: "#202124",
                },
              },
              // hover states
              "& .MuiListItemButton-root:hover": {
                bgcolor: "#F1F3F4",
                borderRadius: "0 25px 25px 0",
                "&, & .MuiListItemIcon-root": {
                  color: "#5F6368",
                },
              },
            }}
            onMouseLeave={() => setOpen(false)}
            onMouseEnter={() => setOpen(true)}
          >
            <MainListItems />
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: "100vh" }}>
          <DrawerHeader />
          <Workspace />
          <InputText />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
