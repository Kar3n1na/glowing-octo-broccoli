import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    background: "rgba(73,155,234,1)",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "White",
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Card class>
      <CardContent className={classes.root}>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography className={classes.text}>{props.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
