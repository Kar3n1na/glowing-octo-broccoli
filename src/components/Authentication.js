import React, { useState } from "react";

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
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Authentication = () => {
    const [password, setPassword] = useState({
      value: "",
      show: false,
    });
  
    const ShowPasswordToggler = () => {
      setPassword({ ...password, show: !password.show });
    };
  
    return (
      <Container
        sx={{
          backgroundColor: "#0061f2",
          minHeight: "100vh",
          minWidth: "100%",
          display: "flex",
        }}
      >
        <Card
          variant="outlined"
          sx={{ width: "70%", margin: "auto", borderRadius: "8px" }}
        >
          <CardHeader
            sx={{
              textAlign: "center",
              backgroundColor: "#F8F9F9",
              borderBottom: "1px solid #DDDEDF",
            }}
            title="Login"
          />
          <CardContent>
            <FormControl fullWidth>
              <TextField
                id="outline-email"
                label="Email"
                type="email"
                sx={{ marginBottom: "16px" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={password.value}
                label="Password"
                type={password.show ? "text" : "password"}
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={ShowPasswordToggler}
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      {password.show ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button>Ingresar</Button>
          </CardActions>
        </Card>
        <Typography
          variant="body2"
          sx={{ color: "#DDDEDF", position: "absolute", bottom: "16px" }}
        >
          Swap {new Date().getFullYear()}
        </Typography>
      </Container>
    );
  };
  export default Authentication;
  