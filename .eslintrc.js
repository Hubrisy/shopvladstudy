module.exports = {
  // Base configuration for JavaScript files
  extends: [
    "airbnb-base", // Airbnb's base JS style guide
    "plugin:prettier/recommended", // Integrates Prettier with ESLint
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // Use single quotes instead of double quotes
        endOfLine: "auto", // Maintain consistent end of line behavior across environments
        semi: false, // Omit semicolons at the end of statements
      },
    ], // Prevent conflicts between Prettier and Airbnb ESLint rules
  },
  overrides: [
    {
      // Configuration specifically for TypeScript files
      files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // Applies these rules only to TypeScript files
      plugins: [
        "@typescript-eslint", // TypeScript specific linting rules
        "unused-imports", // Plugin to automatically remove unused imports
        "simple-import-sort", // Plugin to enforce consistent import order
      ],
      extends: [
        "airbnb", // Airbnb's full style guide (JS + React)
        "airbnb-typescript", // Airbnb's TypeScript style guide
        "plugin:prettier/recommended", // Integrates Prettier with ESLint
      ],
      parser: "@typescript-eslint/parser", // Uses TypeScript parser for ESLint
      parserOptions: {
        project: "./tsconfig.json", // Ensures TypeScript is linted according to the project's tsconfig.json
        tsconfigRootDir: __dirname,
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQuote: false, // Use double quotes for TypeScript files
            endOfLine: "auto", // Maintain consistent end of line behavior across environments
            semi: false, // Omit semicolons at the end of statements
            trailingComma: "es5", // Include trailing commas where valid in ES5
          },
        ], // Prevent conflicts between Prettier and Airbnb ESLint rules
        "import/no-extraneous-dependencies": "warn", // Warn about extraneous dependencies in TypeScript files
        "no-param-reassign": "off", // Allow parameter reassignment
        "consistent-return": "off", // Disable consistent return requirement
        "no-empty-pattern": "off", // Allow empty destructuring patterns
        "no-use-before-define": "off", // Disable "use before define" for all variables and functions
        "no-shadow": "off", // Disable shadowed variable rule
        "@typescript-eslint/no-shadow": "off", // Disable shadowed variable rule for TypeScript
        "@typescript-eslint/no-use-before-define": "off", // Disable "use before define" for TypeScript
        "react/jsx-no-constructed-context-values": "off", // Allow constructed context values in React
        "import/extensions": "off", // Disable import extensions requirement (TypeScript handles this)
        "react/function-component-definition": "off", // Allow different ways to define function components
        "react/destructuring-assignment": "off", // Disable mandatory destructuring in React components
        "react/require-default-props": "off", // Allow non-defined props to be undefined
        "react/jsx-props-no-spreading": "off", // Allow prop spreading in JSX (e.g., in _app.tsx or react-hook-form)
        "react/no-unstable-nested-components": "off", // Allow unstable nested components (needed by i18n library)
        "@typescript-eslint/comma-dangle": "off", // Disable ESLint comma-dangle rule to avoid conflict with Prettier
        "@typescript-eslint/consistent-type-imports": "error", // Enforce consistent usage of `import type`
        "no-restricted-syntax": [
          "error",
          "ForInStatement", // Disallow `for-in` loops
          "LabeledStatement", // Disallow labeled statements
          "WithStatement", // Disallow `with` statements
        ], // Override Airbnb configuration to restrict specific syntax
        "import/prefer-default-export": "off", // Allow named exports without preferring default exports
        "simple-import-sort/imports": "error", // Enforce sorted imports
        "simple-import-sort/exports": "error", // Enforce sorted exports
        "import/order": "off", // Disable import order rule to avoid conflict with simple-import-sort
        "@typescript-eslint/no-unused-vars": "error", // Disable unused variables rule for TypeScript
        "unused-imports/no-unused-imports": "error", // Automatically remove unused imports
        "no-unused-vars": "off", // Disable unused variables rule (covered by unused-imports plugin)
        "@typescript-eslint/naming-convention": "off", // Disable naming convention rule (can be enabled if desired)
        "react/jsx-no-useless-fragment": "off",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all", // Warn for all unused variables
            varsIgnorePattern: "^_", // Ignore variables starting with an underscore
            args: "after-used", // Only warn about unused arguments if they appear after used ones
            argsIgnorePattern: "^_", // Ignore arguments starting with an underscore
          },
        ],
        "jsx-a11y/click-events-have-key-events": "off", // Allow click events without key events
        "jsx-a11y/no-static-element-interactions": "off", // Allow static element interactions
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "return" },
          { blankLine: "always", prev: "*", next: "block" },
          { blankLine: "always", prev: "block", next: "*" },
          { blankLine: "always", prev: "*", next: "block-like" },
          { blankLine: "always", prev: "block-like", next: "*" },
        ],
      },
    },
  ],
}
