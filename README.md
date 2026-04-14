# Pet Gallery

A simple web app to browse and select pet images. Built with modern web technologies for a smooth user experience.

## Key Decisions

For selection, I decided users should be able to pick multiple pets at once, with a clear way to select all or clear selections. This makes it easy to batch actions like downloading without having to click each one individually.
- PetCard component has a select button that calls toggleSelect from SelectionContext.
- Toolbar has selectAll and clear buttons.
- Selected pets get an outline border.

Sorting was important to help users find pets quickly. I added options to sort by name alphabetically or by how recently they were added, so people can browse in the order that makes sense for them.
- Controls component has a select dropdown for A-Z, Z-A, newest, oldest.
- Sorting updates the pet list immediately.
- Combines with search for filtering.

Downloading selected images was a key feature because users might want to save their favorite pet photos. I made it so you can download all selected images with one click, each saved with the pet's name as the filename.
- Toolbar's downloadImages function fetches each selected pet's imageUrl.
- Creates a temporary anchor element for download.
- Names files using pet.title.

For state management, I kept global state for the selected pets so it stays consistent across the app, and even remembers your selections if you refresh the page. Local state handles things like the search filter and sort options, keeping them quick and responsive without affecting the rest of the app.
- SelectionContext manages global selected array, persisted in localStorage.
- Home component uses useState for search and sort.
- Context provides toggleSelect, clear, selectAll methods.

## Getting Started

To run the app locally:

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open http://localhost:5173 in your browser

The app fetches pet data from a local JSON file, but it's set up to easily switch to a real API if needed.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
