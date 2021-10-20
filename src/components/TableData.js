import {
    Table,
    TableBody,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import { TableCell } from "@mui/material";
import React from "react";


const StyledTableCell = withStyles(() => ({
  head: {
    color: "white",
    textAlign: "center",
    background: "black",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableData = (props) => {
  return (
    <TableContainer>
        <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Video</StyledTableCell>
          <StyledTableCell>Fecha</StyledTableCell>
          <StyledTableCell>Visualizaciones</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {props.data.map(elemento=>(
              <TableRow>
                  <TableCell>{" "}{elemento.video}</TableCell>
                  <TableCell align="center">{elemento.fecha}</TableCell>
                  <TableCell align="center">{elemento.visualizaciones}</TableCell>
              </TableRow>)
           )}
      </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
