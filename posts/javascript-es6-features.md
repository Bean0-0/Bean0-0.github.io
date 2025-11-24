# JavaScript ES6 Features You Should Know

**Date:** September 01, 2025  
**Category:** JavaScript

## Introduction

ECMAScript 2015, also known as ES6, was a major update to JavaScript that introduced many new features. These features make code more readable, concise, and powerful.

## Key Features

### 1. Let and Const

`let` and `const` provide block-scoped variables, solving many issues with the old `var`.

```javascript
const pi = 3.14;
let count = 0;

if (true) {
    let count = 10; // Different variable
    console.log(count); // 10
}
console.log(count); // 0
```

### 2. Arrow Functions

Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value.

```javascript
// Old
const add = function(a, b) {
    return a + b;
};

// New
const add = (a, b) => a + b;
```

### 3. Template Literals

Template literals allow for embedded expressions and multi-line strings.

```javascript
const name = "Ben";
const greeting = `Hello, ${name}!`;
```

### 4. Destructuring Assignment

Destructuring makes it easy to extract values from arrays or properties from objects.

```javascript
const user = { name: 'Ben', age: 25 };
const { name, age } = user;
```

### 5. Modules

ES6 introduced a standard module system using `import` and `export`.

```javascript
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
```

## Conclusion

Mastering these ES6 features is essential for modern JavaScript development. They are widely supported and used in almost every modern framework.
