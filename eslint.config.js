import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

/**
 * Périmètre : TypeScript/JS du projet (les .astro sont couverts par
 * `astro check`, plus pointus sur leur syntaxe propre).
 */
export default tseslint.config(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "public/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}", "scripts/**/*.mjs", "*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // Solid : les refs `let x: T | undefined` sont assignées par l'attribut
    // ref={x} du template compilé — ESLint ne voit pas cette affectation.
    files: ["src/**/*.tsx"],
    rules: {
      "no-unassigned-vars": "off",
    },
  },
);
