import React from "react";
import "./data-form.css";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export const CmInput = () => {

  return (
    <Box>
      <TextField
        label="Height/Altura"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          endAdornment: <InputAdornment position="start">cm</InputAdornment>,
        }}
        type="number"
      />
    </Box>
  );
};
