import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { glob } from 'glob';

const tests = [];


//joining path of directory 
const files = glob.sync( 'src/**/test.js' );

files.forEach( ( file ) => {

	const split = file.split( '/' ),
		fileName	= split[split.length - 2];

	tests.push({
		input: file,
		output: {
			file: `__tests__/${fileName}.js`,
		},
		plugins: [
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