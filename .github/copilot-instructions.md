# Copilot Instructions for this repository

Follow these conventions when generating code:

- Do NOT use inline styles or the `sx` prop in React or MUI components.
- Use className plus SCSS files (Sass) for all styling.
- Prefer semantic class names and keep styles in `src/**/*.scss`.
- If you need dynamic styles, prefer conditional classNames instead of inline styles.

Examples

Bad
```tsx
<button style={{ padding: 12 }}>Click</button>
<TextField sx={{ mt: 2 }} />
```

Good
```tsx
<button className="btn">Click</button>
// in .scss
.btn { padding: 12px; }
```
