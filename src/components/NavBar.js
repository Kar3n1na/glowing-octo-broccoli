import { makeStyles } from "@material-ui/core";
import { IconButton, Toolbar, Typography, AppBar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "16px",
  },
  tittle: {
    flexGrow: 1,
  },
  imagen: {
    borderRadius: "50%",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.tittle}>El Dashboard</Typography>
          <IconButton color="inherit">
              <img src={require("../assets/img/icoSwap.ico")} width="40px" height="40%" className={classes.imagen} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
