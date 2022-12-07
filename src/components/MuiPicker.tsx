import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";

export const MuiPicker = () => {
  const [selectedDate, setSelecteDate] = useState<Date | null>(null);

  console.log({ selectedDate });

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params: any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue: Date) => {
          setSelecteDate(newValue);
        }}
      />
    </Stack>
  );
};
