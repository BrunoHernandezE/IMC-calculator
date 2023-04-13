import React, {useState} from "react";
import "./data-form.css";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export const KgInput = () => {

  const [weight, setWeight] = useState("")

  const handleWeight = (e) => {
    setWeight(e.target.value)
    console.log(weight)
  }

  return (
    <Box>
      <TextField
        label="Weight/Peso"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          endAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
        type="number"
      />
    </Box>
  );
};
