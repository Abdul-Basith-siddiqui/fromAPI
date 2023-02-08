import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
// import  from "@material-ui/core/styles/MuiThemeProvider";

import { useNavigate } from "react-router-dom";
// import {  } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
  },
});

const FirstPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify({ name, phoneNumber, email }));
    if (name === "" || phoneNumber === "" || email === "") {
      setError(true);
    } else {
      navigate("/second");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} noValidate sx={{ m: 0.5 }}>
          <Typography variant="h4">Enter Your Details</Typography>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            // required
            margin="normal"
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            size="small"
          />
          <br />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            // required
            margin="normal"
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            size="small"
          />
          <br />
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // required
            margin="normal"
            size="small"
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <br />
          {error && (
            <div style={{ color: "red", fontSize: "12px" }}>
              <p>Please enter all the details </p>
              <p>before accessing the page.</p>
            </div>
          )}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default FirstPage;
