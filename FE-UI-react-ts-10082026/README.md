# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

If your goal is to learn JavaScript/TypeScript DSA logic using these Array methods, I’d recommend learning them by problem-solving patterns, not just memorizing the methods.

1. Most important methods for DSA
   Method DSA importance Common use
   map() ⭐⭐⭐⭐⭐ Transform data
   filter() ⭐⭐⭐⭐⭐ Select elements
   reduce() ⭐⭐⭐⭐⭐ Sum, count, grouping
   find() ⭐⭐⭐⭐ Find first matching item
   findIndex() ⭐⭐⭐⭐ Find position
   some() ⭐⭐⭐⭐ Check if at least one matches
   every() ⭐⭐⭐⭐ Check if all match
   includes() ⭐⭐⭐⭐ Existence check
   indexOf() ⭐⭐⭐ Find position
   sort() ⭐⭐⭐⭐⭐ Sorting algorithms
   slice() ⭐⭐⭐⭐ Non-mutating extraction
   splice() ⭐⭐⭐ Insert/delete
   push() ⭐⭐⭐ Stack-like operations
   pop() ⭐⭐⭐ Stack-like operations
   shift() ⭐⭐⭐ Queue-like operations
   unshift() ⭐⭐⭐ Queue-like operations
   reverse() ⭐⭐⭐ Reverse array
   flat() ⭐⭐⭐ Nested arrays
   flatMap() ⭐⭐⭐ Transform + flatten
   concat() ⭐⭐⭐ Merge arrays
   at() ⭐⭐⭐ Access by index
   toReversed() ⭐⭐⭐ Immutable reverse
   toSorted() ⭐⭐⭐ Immutable sort
   toSpliced() ⭐⭐⭐ Immutable splice
   with() ⭐⭐⭐ Immutable update

React + TypeScript DSA Learning Path
For React/TypeScript development, I'd structure your practice like this:
LEVEL 1
Array Basics
├── push
├── pop
├── shift
├── unshift
├── at
├── length
├── includes
└── indexOf

LEVEL 2
Array Searching
├── find
├── findIndex
├── findLast
├── findLastIndex
├── some
└── every

LEVEL 3
Array Transformation
├── map
├── filter
├── reduce
├── flat
└── flatMap

LEVEL 4
Array Manipulation
├── slice
├── splice
├── concat
├── reverse
└── sort

LEVEL 5
DSA Patterns
├── Two Pointer
├── Sliding Window
├── Frequency Counter
├── Hash Map
├── Stack
├── Queue
├── Recursion
├── Binary Search
└── Sorting

LEVEL 6
React + DSA
├── Search
├── Filter
├── Sort
├── Pagination
├── Grouping
├── Deduplication
├── Table operations
└── API data transformation
