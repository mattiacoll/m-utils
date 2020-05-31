import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// Custom per tutte le pagine
	{
		input: 'src/index.js',
		output: [
			{
				file:		'dist/matt-utils.js',
				format: 'es',
				indent: false,
				strict: false,
			},
			{
				file:		'dist/matt-utils.min.js',
				format: 'es',
				indent: false,
				strict: false,
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