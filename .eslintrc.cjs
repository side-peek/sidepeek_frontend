// .eslintrc.cjs

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@tanstack/eslint-plugin-query/recommended",
		"plugin:prettier/recommended",
		"eslint-config-prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: [
		"react-refresh",
		"@tanstack/query",
		"@typescript-eslint",
		"prettier",
	],

	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/react-in-jsx-scope": "off",
		"react/function-component-definition": [
			2,
			{ namedComponents: "arrow-function" },
		],
		"@tanstack/query/exhaustive-deps": "error",
		"@tanstack/query/no-rest-destructuring": "warn",
		"@tanstack/query/stable-query-client": "error",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", ["parent", "sibling"], "index"],
				pathGroups: [
					{
						pattern: "angular",
						group: "external",
						position: "before",
					},
				],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				"newlines-between": "always",
			},
		],
	},
};
