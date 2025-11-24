# Mastering CSS Grid

**Date:** October 15, 2025  
**Category:** CSS

## Introduction

CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns, and has many features that make building complex web layouts easier.

## Why Use CSS Grid?

*   **Two-dimensional:** Unlike Flexbox (which is one-dimensional), Grid handles both columns and rows.
*   **precise control:** You can place items exactly where you want them.
*   **Responsive:** Grid makes it easy to create layouts that adapt to different screen sizes.

## Basic Concepts

### The Grid Container

To start, you define a container element as a grid with `display: grid`.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
}
```

### Grid Lines

The lines that divide the grid are called grid lines. You can refer to them by number to place items.

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

## Common Patterns

### The 12-Column Grid

A popular pattern is the 12-column grid, which is flexible enough for most layouts.

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
```

### Holy Grail Layout

Grid makes the classic header, footer, sidebar, and content layout trivial.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}
```

## Conclusion

CSS Grid is a powerful tool that every web developer should have in their toolkit. Start experimenting with it today!
