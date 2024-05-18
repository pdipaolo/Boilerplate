// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
    js.configs.recommended,
    {
        plugins: {
            prettier
        },
        ignores: ["eslint.config.mjs", ".prettierrc.js", "babel.config.js","jest.config.js", "metro.config.js"],
        rules: {
            "curly": "error",
            "eqeqeq": "error",
            "no-alert": "error",
            "no-async-promise-executor": "error",
            "no-console": "error",
            "no-duplicate-imports": "error",
            "no-empty": "error",
            "no-empty-function": "error",
            "no-unused-vars": "error",
            "no-useless-escape": "error",
            "no-var": "error",
            "prefer-const": "error",

            // eslint-plugin-prettier rules (e.g. prettier/prettier)
            "prettier/prettier": [
                "error",
                {
                "singleQuote": true,
                "trailingComma": "all"
                }]
        }
    }
];