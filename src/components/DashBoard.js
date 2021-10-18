import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css'
import { YouTube } from "@mui/icons-material";
import { Public } from "@mui/icons-material";
import { Videocam } from "@mui/icons-material";
//import giphyLOTR from '../assets/giphyLOTR.gif'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const DashBoard = (props) => {
  const classes = useStyles;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={4}>

        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={4}>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={4}>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
