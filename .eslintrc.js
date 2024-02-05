module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}", "./scripts/*.js"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: true,
	},
	plugins: ["@typescript-eslint", "react", "i18next", "react-hooks"],
	rules: {
		indent: [2, "tab"],
		quotes: [2, "double"],
		semi: [2, "always"],
		"react/jsx-indent": [2, "tab"],
		// "linebreak-style": ["error", "windows"],
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": 0,
		"@typescript-eslint/no-unused-vars": 1,
		"react/react-in-jsx-scope": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"@typescript-eslint/no-explicit-any": "warn",
		"linebreak-style": 0,
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "error", // Checks effect dependencies
	},
};
