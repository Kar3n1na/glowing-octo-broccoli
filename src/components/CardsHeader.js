
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const CardsHeader = () => {

    const useStyles = makeStyles(() => ({
        root: {
          textAlign: 'center',
          background: props.color
        },
        text: {
            fontSize: 18,
            color: props.font
        },
        title: {
            fontWeight: 'bold',
            fontSize: 22,
            color: props.font
        }
      }));

    return (
 <Card className={classes.root}>
     <CardContent>
         {props.icon}
         <Typography className={classes.title}>
            {props.title}
         </Typography>
     </CardContent>
 </Card>
    );
}

export default CardsHeader;
