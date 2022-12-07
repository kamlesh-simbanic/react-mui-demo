import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple-table" stickyHeader>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell align="center">Email</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Graig",
    last_name: "Godlonton",
    email: "ggodlonton0@pinterest.com",
    gender: "Male",
    ip_address: "134.16.4.130",
  },
  {
    id: 2,
    first_name: "Dante",
    last_name: "Rainer",
    email: "drainer1@mysql.com",
    gender: "Male",
    ip_address: "135.0.125.82",
  },
  {
    id: 3,
    first_name: "Pernell",
    last_name: "Clapshaw",
    email: "pclapshaw2@twitter.com",
    gender: "Male",
    ip_address: "117.35.230.191",
  },
  {
    id: 4,
    first_name: "Fawne",
    last_name: "Wearne",
    email: "fwearne3@wired.com",
    gender: "Female",
    ip_address: "27.110.182.137",
  },
  {
    id: 5,
    first_name: "Keefer",
    last_name: "Loyndon",
    email: "kloyndon4@amazon.co.jp",
    gender: "Male",
    ip_address: "13.46.41.227",
  },
  {
    id: 6,
    first_name: "Cyndie",
    last_name: "Avramov",
    email: "cavramov5@mlb.com",
    gender: "Female",
    ip_address: "155.103.213.43",
  },
  {
    id: 7,
    first_name: "Craggy",
    last_name: "Jones",
    email: "cjones6@soundcloud.com",
    gender: "Male",
    ip_address: "172.95.12.230",
  },
  {
    id: 8,
    first_name: "Filmore",
    last_name: "Ruske",
    email: "fruske7@t-online.de",
    gender: "Male",
    ip_address: "65.20.199.125",
  },
  {
    id: 9,
    first_name: "Tarrah",
    last_name: "Kilgallon",
    email: "tkilgallon8@1und1.de",
    gender: "Female",
    ip_address: "73.175.36.58",
  },
  {
    id: 10,
    first_name: "Eleen",
    last_name: "Lewry",
    email: "elewry9@wired.com",
    gender: "Female",
    ip_address: "92.140.207.26",
  },
];
