import React from "react";

import {
    Button,
    Card,
    CardActions,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";


const Authentication = () => {
  return (
    <Container>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <FormControl>
            <TextField></TextField>
          </FormControl>
          <FormControl>
              <InputLabel>Password</InputLabel>
              <OutlinedInput>
                  <InputAdornment>
                  <IconButton>

                  </IconButton>
                  </InputAdornment>
              </OutlinedInput>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button>Ingresar</Button>
        </CardActions>
      </Card>
      <Typography>Swap {new Date().getFullYear()} </Typography>
    </Container>
  );
};

export default Authentication;
