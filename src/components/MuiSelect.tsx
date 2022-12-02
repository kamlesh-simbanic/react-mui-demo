import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCountries(event.target.value as string);
    const value = event.target.value;

    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        value={countries}
        onChange={handleChange}
        select
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
