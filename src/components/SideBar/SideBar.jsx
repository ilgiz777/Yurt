import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

import React from "react";
import { useProducts } from "../../contexts/ProductContext";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <FormLabel>TYPE</FormLabel>

          <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
            <FormControlLabel
              value="Apartment"
              control={<Radio />}
              label="Apartment"
            />
            <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
            <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
            <FormControlLabel value="all" control={<Radio />} label="all" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
