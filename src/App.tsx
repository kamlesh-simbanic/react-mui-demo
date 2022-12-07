import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MuiPicker } from "./components/MuiPicker";
import { MuiTabs } from "./components/MuiTabs";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import { MuiCard } from "./components/MuiCard";
// import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiLayout } from "./components/MuiLayout";
import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import { MuiSelect } from "./components/MuiSelect";
// import { MuiButton } from "./components/MuiButton";
// import { MuiTypography } from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <MuiTypography />
      <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}

      <MuiNavbar />
      <MuiLayout />
      {/* <MuiPicker /> */}
      {/* <MuiTabs /> */}
      {/* <MuiResponsiveness /> */}

      {/* <MuiCard /> */}
    </div>
    // </LocalizationProvider>
  );
}

export default App;
