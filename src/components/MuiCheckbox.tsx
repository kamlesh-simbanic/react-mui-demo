import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Bookmark from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ acceptTnC });

  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const skillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newskill = event.target.value;
    if (!skillSelected(event.target.value)) {
      setSkills([...skills, newskill]);
    } else {
      setSkills(skills.filter((skill, index) => skill !== newskill));
    }
  };

  const skillSelected = (skill: string) => {
    const index = skills.indexOf(skill);
    return index < 0 ? false : true;
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and condition"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl error={skills.length == 0}>
          <FormLabel>Skils:</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value={"html"}
              control={
                <Checkbox
                  checked={skillSelected("html")}
                  onChange={skillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value={"css"}
              control={
                <Checkbox
                  checked={skillSelected("css")}
                  onChange={skillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value={"javascript"}
              control={
                <Checkbox
                  checked={skillSelected("javascript")}
                  onChange={skillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
        <FormHelperText>Invalid Selection</FormHelperText>
      </Box>
    </Box>
  );
};
