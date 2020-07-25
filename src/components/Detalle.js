import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Data from "../store/data";
import "../assets/components/Detalle.css";

const useStyles2 = makeStyles({
  table: {
    minWidth: 600,
  },
});

const data = Data;

export default function Detalle(props) {
  console.log(props.id);
  const key = props.id;
  const classes = useStyles2();
  return (
    <div className="containerTable">
      <h4>Tabla de detalle</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                NumeroSIAB
              </TableCell>
              <TableCell align="left">{data[key].NumeroSIAB}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Estatus
              </TableCell>
              <TableCell align="left">{data[key].Estatus}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Descripcion Estatus
              </TableCell>
              <TableCell align="left">{data[key].DescripcionEstatus}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Tipo Inmueble
              </TableCell>
              <TableCell align="left">{data[key].TipoInmueble}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Ubicacion
              </TableCell>
              <TableCell align="left">{data[key].Ubicacion}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Entidad Federativa
              </TableCell>
              <TableCell align="left">{data[key].EntidadFederativa}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Municipio
              </TableCell>
              <TableCell align="left">{data[key].Municipio}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Superficie Terreno En M2
              </TableCell>
              <TableCell align="left">
                {data[key].SuperficieTerrenoEnM2}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Copropiedad
              </TableCell>
              <TableCell align="left">{data[key].Copropiedad}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Entidad Transferente
              </TableCell>
              <TableCell align="left">
                {data[key].EntidadTransferente}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Descripcion Problematica Juridica
              </TableCell>
              <TableCell align="left">
                {data[key].DescripcionProblematicaJuridica}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 250 }} component="th" scope="row">
                Problematica Juridica
              </TableCell>
              <TableCell align="left">
                {data[key].ProblematicaJuridica}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
