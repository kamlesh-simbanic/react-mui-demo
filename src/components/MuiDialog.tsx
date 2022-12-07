import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

export const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="text" color="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={"dialog-title"}
        aria-describedby={"dialog-desc"}
      >
        <DialogTitle id="dialog-title">Submit the Test ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-desc">
            Are you sure you want to submit the test? You will not be able to
            edit after submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="error">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
