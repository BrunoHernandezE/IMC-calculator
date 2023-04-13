import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";

export const SliderExample = () => {
  return (
    <div className="slider">
      <Box width={300}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          sx={{
            color: "#5e5ce5"
          }}
          valueLabelDisplay="auto"
        />  
      </Box>
    </div>
  );
};
