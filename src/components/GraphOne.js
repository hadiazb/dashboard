import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
} from 'recharts';
import Data from '../store/data';

const arrRepetidos = [];
Data.forEach((item) =>
	arrRepetidos.push({
		name: item.EntidadFederativa,
	})
);

function crearArray(arr) {
	let cont = [0];
	for (let i = 0; i < arr.length; i++) {
		cont[i] = 0;
	}
	let Mp = {};
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j].name === arr[i].name) {
				cont[i]++;
			}
		}
		if (!(arr[i].name in Mp)) {
			Mp[arr[i].name] = true;
			res.push({ name: arr[i].name, cantidad: cont[i] });
		}
	}
	return res;
}

const arr = crearArray(arrRepetidos);

export const GraphOne = () => {
	return (
		<BarChart width={1200} height={300} data={arr}>
			<XAxis dataKey='name' stroke='#8884d8' />
			<YAxis />
			<Tooltip cursor={{ strokeWidth: 2 }} />
			<Legend verticalAlign='top' height={36} />
			<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
			<Bar dataKey='cantidad' fill='#8884d8' barSize={10} />
		</BarChart>
	);
};
