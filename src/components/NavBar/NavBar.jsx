import React from "react";
import styles from "./NavBar.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const NavBar = ({ handleLength, handleSpeed }) => {
  return (
    <>
      <div className={styles.navSlider}>
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label="Lenght of Array"
            defaultValue={30}
            getAriaValueText={handleLength}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={20}
          />
          <label>Array Length</label>
        </Box>
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label="Speed"
            defaultValue={1}
            getAriaValueText={handleSpeed}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
          <label>Sorting speed</label>
        </Box>
      </div>
    </>
  );
};

export default NavBar;
