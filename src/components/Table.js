// import React from 'react';
// import '../assets/components/Table.css';

// export default function Tabla() {
// 	const [state, setState] = React.useState({
// 		columns: [
// 			{ title: 'N° ID', field: 'ID', type: 'numeric' },
// 			{ title: 'Entidad Federativa', field: 'state' },
// 			{ title: 'Municipio', field: 'municipio' },
// 			{ title: 'Tipo de inmueble', field: 'inmueble' },
// 			{ title: 'Ubicación', field: 'ubicacion' },
// 			{
// 				title: 'Problemática jurídica',
// 				field: 'problematica',
// 			},
// 		],
// 		data: [{}],
// 	});

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

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontSize: 15,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(
	id,
	state,
	town,
	inmueble,
	location,
	problem
) {
	return { id, state, town, inmueble, location, problem };
}

const rows = [
	createData(
		1,
		'Quintana Roo',
		'Cancun',
		'Comercial',
		'Calle 10',
		'no hay'
	),
	createData(
		2,
		'Quintana Roo',
		'Cancun',
		'Comercial',
		'Calle 10',
		'no hay'
	),
	createData(
		3,
		'Quintana Roo',
		'Cancun',
		'Comercial',
		'Calle 10',
		'no hay'
	),
	createData(
		4,
		'Quintana Roo',
		'Cancun',
		'Comercial',
		'Calle 10',
		'no hay'
	),
];

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
						<StyledTableCell>ID</StyledTableCell>
						<StyledTableCell>Estado</StyledTableCell>
						<StyledTableCell>Municipio</StyledTableCell>
						<StyledTableCell>Inmueble</StyledTableCell>
						<StyledTableCell>location</StyledTableCell>
						<StyledTableCell>Problema</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.id}>
							<StyledTableCell>{row.id}</StyledTableCell>
							<StyledTableCell>{row.state}</StyledTableCell>
							<StyledTableCell>{row.town}</StyledTableCell>
							<StyledTableCell>{row.inmueble}</StyledTableCell>
							<StyledTableCell>{row.location}</StyledTableCell>
							<StyledTableCell>{row.problem}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
