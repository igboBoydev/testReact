import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "../api/axios";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { decodeJwt } from "../utils/helpers";
import { LOGIN_URL } from "../api/constant";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function FormPropsTextFields() {
  const [password, setPassword] = useState(0);
  const [showPassword, setShowPassword] = React.useState(false);
  const [userId, setUserId] = useState("");
  const [error1, setError1] = useState(false);
  const [message, setMessage] = useState("");
  const [error2, setError2] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname | "/";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //   let v = decodeJwt();

  //   console.log(11111);

  //   if (!v) {
  //     console.log("2222222");
  //     navigate("/items", { state: { from: from }, replace: true });
  //   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setError1(true);
    }
    if (!password) {
      setError2(true);
    }

    if (userId && password) {
      const userData = {
        seller_id: userId,
        seller_zip_code_prefix: parseInt(password),
      };

      try {
        const response = await axios.post(LOGIN_URL, userData);
        console.log({ res: response.data });

        if (response.data.success.token) {
          sessionStorage.setItem("token", response.data.success.token);
          navigate("/items", { state: { from: from }, replace: true });
        }
      } catch (error) {
        console.log({
          error: error.response.data.message.replace(/['"]+/g, ""),
        });
        setMessage(error.response.data.message.replace(/['"]+/g, ""));
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "55ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error={error2}
          id="outlined-password-input"
          label="Seller_ID"
          type="text"
          onChange={(e) => {
            setUserId(e.target.value);
            setError2(false);
          }}
          autoComplete="current-password"
          helperText="Kindly Enter A Valid User Id"
        />
      </div>
      <div>
        <TextField
          error={error1}
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setError1(false);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          autoComplete="current-password"
          helperText="Kindly Enter Your Password"
        />
      </div>
      <div className="swift_button">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </Stack>
      </div>

      <div className="mt-2">
        {message && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="error"
              onClose={() => {
                setMessage("");
              }}
            >
              {message}
            </Alert>
          </Stack>
        )}
      </div>
    </Box>
  );
}
