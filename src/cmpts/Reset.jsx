import React,{useState} from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Reset = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    confirmpassword: "",
    showconfirmPassword: false
  });
  const [error, setError] = useState();

  const submit = () => {
    if (values.password.length < 5 || values.confirmpassword.length < 5) {
        setError("password length too short")
    } else if (values.password != values.confirmpassword) {
        setError("password dont match")
    } else {
        const url="https://peace-hotel-app.herokuapp.com/"
        setError()
    }
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const chandleClickShowPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const chandleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" gutterBottom component="div">
          Create new password
        </Typography>
        {
            error&&(
                <Typography variant="subtitle2" color={'red'} gutterBottom component="div">
          {error}
        </Typography>
            )
        }
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showconfirmPassword ? "text" : "password"}
            value={values.confirmpassword}
            onChange={handleChange("confirmpassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={chandleClickShowPassword}
                  onMouseDown={chandleMouseDownPassword}
                  edge="end"
                >
                  {values.showconfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="confirmPassword"
          />
        </FormControl>
        <Button variant="contained">Reset password</Button>
      </Box>
    </Card>
  );
};

export default Reset;
