module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: ["styles.ts"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase"]
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"]
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["UPPER_CASE", "camelCase", "PascalCase"]
      },
      {
        selector: "typeLike",
        format: ["PascalCase"]
      },
      {
        selector: "property",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"]
      },
      {
        selector: "method",
        format: ["camelCase"]
      },
      {
        selector: "parameter",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"]
      }
    ],
    "default-case": "error",
    eqeqeq: ["warn", "always"],
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    "no-console": "off",
    "no-extra-semi": "warn",
    "no-undefined": "warn",
    "no-unneeded-ternary": "warn",
    "no-unused-expressions": "warn",
    "block-spacing": ["warn", "always"],
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["warn", { before: false, after: true }],
    "jsx-quotes": ["warn", "prefer-double"],
    "eol-last": ["warn", "always"],
    "no-multi-spaces": "warn",
    "no-trailing-spaces": "warn",
    "object-curly-spacing": [
      "warn",
      "always",
      { arraysInObjects: false, objectsInObjects: false }
    ],
    "space-infix-ops": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "space-before-blocks": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/restrict-plus-operands": "off"
  }
};
