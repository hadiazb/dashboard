import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	PieChart,
	Pie,
} from 'recharts';
import Data from '../store/data';

const arrRepetidos = [];
Data.forEach((item) =>
	arrRepetidos.push({
		name: item.EntidadFederativa,
		cantidadM2: parseInt(item.SuperficieTerrenoEnM2),
	})
);
console.log(arrRepetidos);
function crearArray(arr) {
	let cont = [];
	let contMetros = [];
	for (let i = 0; i < arr.length; i++) {
		cont[i] = 0;
		contMetros[i] = 0;
	}
	let Mp = {};
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j].name === arr[i].name) {
				cont[i]++;
				contMetros[i] = contMetros[i] + arr[j].cantidadM2;
			}
		}
		if (!(arr[i].name in Mp)) {
			Mp[arr[i].name] = true;
			res.push({
				name: arr[i].name,
				cantidad: cont[i],
				m2: contMetros[i],
			});
		}
	}
	return res;
}
const arr = crearArray(arrRepetidos);
console.log(arr);

export const GraphOne = () => {
	return (
		<BarChart width={1200} height={250} data={arr}>
			<XAxis dataKey='name' stroke='#8884d8' />
			<YAxis />
			<Tooltip cursor={{ strokeWidth: 2 }} />
			<Legend verticalAlign='top' height={36} />
			<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
			<Bar dataKey='cantidad' fill='#8884d8' barSize={10} />
		</BarChart>
	);
};

export const GraphTwo = () => {
	return (
		<BarChart width={1200} height={250} data={arr}>
			<XAxis dataKey='name' stroke='#8884d8' />
			<YAxis />
			<Tooltip cursor={{ strokeWidth: 2 }} />
			<Legend verticalAlign='top' height={36} />
			<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
			<Bar dataKey='m2' fill='#8884d8' barSize={10} />
		</BarChart>
	);
};



