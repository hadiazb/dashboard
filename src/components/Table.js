import React from 'react';
import {
	withStyles,
	makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Data from '../store/data';
import '../assets/components/Table.css';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontSize: 14,
	},
	body: {
		fontSize: 10,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const data = Data;

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default function CustomizedTables() {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table
				className={classes.table}
				aria-label='customized table'
			>
				<TableHead>
					<TableRow>
						<StyledTableCell>NumeroSIAB</StyledTableCell>
						<StyledTableCell>Entidad Federativa</StyledTableCell>
						<StyledTableCell>Municipio</StyledTableCell>
						<StyledTableCell>Tipo Inmueble</StyledTableCell>
						<StyledTableCell>Ubicacion</StyledTableCell>
						<StyledTableCell>Problem Juridica</StyledTableCell>
						<StyledTableCell>Ver</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, key) => (
						<StyledTableRow key={row.NumeroSIAB}>
							<StyledTableCell>{row.NumeroSIAB}</StyledTableCell>
							<StyledTableCell>
								{row.EntidadFederativa}
							</StyledTableCell>
							<StyledTableCell>{row.Municipio}</StyledTableCell>
							<StyledTableCell>{row.TipoInmueble}</StyledTableCell>
							<StyledTableCell>{row.Ubicacion}</StyledTableCell>
							<StyledTableCell>
								{row.DescripcionProblematicaJuridica}
							</StyledTableCell>
							<StyledTableCell>
								<Link to={`/propiedades/${key}`}>
									<div className='eye-solid2 icon'></div>
								</Link>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
