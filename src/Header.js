import { Grid, Box } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = (color) => {setIsToggle(color==="black" ? !isToggle : isToggle)};

  return (
    <Grid container spacing={2} direction="row-reverse" mr={10} mb={1}>
      <Grid item>
        <Box onClick={() => handleClick("black")} sx={{width: 20,height: 20,backgroundColor: "black",cursor: "pointer", }}
        />
      </Grid>
      <Grid item>
        <Box onClick={() => handleClick("orange")} sx={{width: 20,height: 20,backgroundColor: "#DE6C33",cursor: "pointer",}}/>
      </Grid>
    </Grid>
  );
};

export default Header;
