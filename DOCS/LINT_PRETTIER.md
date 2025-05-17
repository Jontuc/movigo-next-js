📋 Documentación de ESLint y Prettier
Este documento resume las principales reglas de ESLint y la configuración de Prettier usadas en tu proyecto Next.js/TypeScript.

ESLint
1. Ignorados (ignores)
// No se analizan estos directorios
ignores: [
'node_modules/',
'.next/',
'out/',
'public/',
'coverage/',
],

2. Plugins activos
react / react-hooks: validación de buenas prácticas en componentes React y hooks.

import: orden de imports y detección de dependencias ausentes/extraviadas.

jest: refuerza estándares en pruebas (no tests deshabilitados, expect válidos…).

prettier: detecta y corrige conflictos entre ESLint y Prettier.

3. Reglas destacadas
React
// No es necesario importar React en Next.js
'react/react-in-jsx-scope': 'off'
'react/jsx-uses-react': 'off'

// Hooks
'react-hooks/rules-of-hooks': 'error' // uso correcto de hooks
'react-hooks/exhaustive-deps': 'warn' // dependencias faltantes

Import
'import/order': [
'warn',
{
groups: ['builtin','external','internal','parent','sibling','index'],
'newlines-between': 'always' // líneas en blanco entre grupos
}
]
'import/no-unresolved': 'error' // importaciones no existentes
'import/no-extraneous-dependencies': [
'error',
{ devDependencies: ['/.test.','scripts/'] }
]

Jest
'jest/no-disabled-tests': 'warn' // evita tests comentados/deshabilitados
'jest/no-focused-tests': 'error' // prohíbe .only()
'jest/valid-expect': 'error' // verifica expect() correcto

TypeScript
'@typescript-eslint/no-unused-vars': [
'warn',
{ argsIgnorePattern: '^_' } // permite variables _unused
]

Reglas generales
'no-console': [
'warn',
{ allow: ['warn','error'] } // sólo console.warn/error
]
'no-debugger': 'error' // prohíbe debugger
'eqeqeq': ['error','smart']// uso inteligente de === vs ==
'curly': ['error','all'] // siempre llaves en bloques

🎨 Prettier
Archivo: .prettierrc

{
"printWidth": 100, // ancho máximo de línea
"tabWidth": 2, // espacios por tab
"useTabs": false, // indentación con espacios
"semi": true, // punto y coma al final
"singleQuote": true, // comillas simples
"trailingComma": "all", // comas finales donde sea posible
"bracketSpacing": true, // espacios en objetos { foo: bar }
"jsxBracketSameLine": false, // cerrar etiquetas JSX en nueva línea
"arrowParens": "always", // paréntesis en args de flecha
"endOfLine": "lf" // saltos de línea tipo Unix
}