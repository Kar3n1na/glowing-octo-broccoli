import { Button, makeStyles } from "@material-ui/core";
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
import { useHistory } from "react-router";
import Graphics from "./Graphics";
import TableData from "./TableData"
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
    alignItems: "center",
  },
  graphContainer: {
    marginTop: "40px",
  },
  containerTable: {
    marginTop: "40px",
  },
}));

const data = [
  {
    id:1,
    video:
      "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
    fecha: "6 de sep. 2020",
    visualizaciones: 32,
    
  },
  {
    id:2,
      video:
        "Cómo Solucionar Error al Crear Applicación de React JS",
      fecha: "5 de sep. 2020",
      visualizaciones: 31,
    },
    {
    id:3,
      video:
        "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
      fecha: "4 de sep. 2020",
      visualizaciones: 21,
    },
];

const DashBoard = (props) => {
  let history = useHistory();

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

        <Grid
          container
          spacing={1}
          className={classes.container}
          xs={12}
          sm={12}
          lg={6}
          xl={6}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} xl={6}>
            <Cards title="Suscriptions" text="Numero Random" />
          </Grid>
        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={classes.graphContainer}
        >
          <Graphics />
        </Grid>

        <Grid item xs={12} className={classes.containerTable}></Grid>
        <TableData  data={data}/>
      </Grid>

      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Salir
      </Button>
    </div>
  );
};

export default DashBoard;
