import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// Custom per tutte le pagine
	{
		input: 'src/matt-utils.js',
		output: [
			{
				file:		'dist/matt-utils.js',
				format: 'umd',
				indent: false,
				strict: false,
				name:		'matt-utils',
			},
			{
				file:		'dist/matt-utils.min.js',
				format: 'umd',
				indent: false,
				strict: false,
				name:		'matt-utils',
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
];