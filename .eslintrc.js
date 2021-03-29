module.exports = {
	root: true,
	plugins: ['react', '@typescript-eslint'],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		'react/boolean-prop-naming': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'react/jsx-props-no-spreading': 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			},
		],
	},
};
