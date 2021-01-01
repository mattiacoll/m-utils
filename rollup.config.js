import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import path from 'path';
import fs from 'fs';

const tests = [];


//joining path of directory 
const directoryPath = path.join( __dirname, 'src/tests' );

//passsing directoryPath and callback function
fs.readdirSync( directoryPath ).forEach( ( file ) => {

	//listing all files using forEach
	tests.push({
		input: `src/tests/${file}`,
		output: {
			dir: '__tests__',
		},
		plugins: [
			/* eslint({
				exclude: 'node_modules/**',
			}), */
			commonjs({
				include:	 /node_modules/,
				sourceMap: false,
			}),
		],
	});

});


export default [
	// Custom per tutte le pagine
	{
		input: 'src/matt-utils.js',
		output: [
			{
				file:		'dist/matt-utils.js',
				format: 'es',
				indent: false,
			},
			{
				file:		'dist/matt-utils.min.js',
				format: 'es',
				indent: false,
				plugins: [
					terser(),
				]
			},
		],
		context: 'window',
		plugins: [
			eslint({
				exclude: 'node_modules/**',
			}),
			resolve({
				browser:				true,
				modules:				true,
				preferBuiltins: false,
			}),
			commonjs({
				include:	 /node_modules/,
				sourceMap: false,
			}),
			babel({
				babelHelpers: 'bundled',
				exclude:			'node_modules/**'
			}),
		],
	},
	...tests,
];