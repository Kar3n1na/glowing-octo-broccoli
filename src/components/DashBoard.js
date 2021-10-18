import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import "fontsource-roboto";
import "../assets/css/Dashboard.css";
import { YouTube } from "@mui/icons-material";
import { Public } from "@mui/icons-material";
import { Videocam } from "@mui/icons-material";
import CardsHeader from "./CardsHeader";
import Cards from "./Cards";
import { grid } from "@mui/system";
//import giphyLOTR from '../assets/giphyLOTR.gif'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  icons: {
    color: "white",
  },
  container: {
    paddingTop: 40,
    alignItems: "center"
  }
}));

const DashBoard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <NavBar />
        </Grid>

        <Grid item xs={12} sm={4} lg={4} xl={4}>
          <CardsHeader
            icons={<YouTube className={classes.icons} />}
            title="Canal"
            text="Ay por dias!"
            color="rgba(248,80,50,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={4}>
          <CardsHeader
            icons={<Public className={classes.icons} />}
            title="Pais"
            text="Este donde aparece?"
            color="rgba(248,80,50,1)"
            font="white"
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4} xl={4}>
          <CardsHeader
            icons={<Videocam className={classes.icons} />}
            title="Videos"
            text="Este donde aparece?"
            color="rgba(248,80,50,1)"
            font="white"
          />
        </Grid>

        <Grid container spacing={1} className={classes.container} xs={12} sm={12} lg={6} xl={6} >
          
          <Grid item xs={12} sm={6} md={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
