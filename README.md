# Pet Gallery

A modern React + TypeScript gallery for browsing pets, selecting favorites in bulk, and downloading selected images.  
The UI is intentionally minimal and monochrome (black, white, and greys) with shadcn-inspired visual patterns.

## Why this project exists

The project focuses on a practical product flow:

- Quickly scan a photo-heavy catalog.
- Filter and sort to find relevant pets.
- Select multiple items and perform bulk actions.
- Keep selections persistent across refreshes.

It is also structured as a small but clean frontend architecture reference for:

- Typed domain modeling.
- Separation of API, hooks, context, and UI layers.
- Design-system-like consistency using `styled-components`.

## Tech stack

- `React 19` for UI composition
- `TypeScript` for type safety
- `React Router` for page-level routing
- `styled-components` for component-scoped styles
- `Vite` for fast local dev and production builds

## Product capabilities

- Home gallery with responsive cards
- Search with debounce
- Sorting by:
  - Title A-Z
  - Title Z-A
  - Newest first
  - Oldest first
- Multi-select workflow:
  - Single-item toggle
  - Select all visible items
  - Clear selection
- Bulk download of selected images
- Selection persistence via `localStorage`
- Detail page for each pet
- Lightweight About page

## Architecture overview

```text
src/
  api/                 # data fetching boundary
  components/          # presentational UI blocks
  context/             # global selection state
  hooks/               # reusable behavior hooks
  pages/               # route-level screens
  types/               # domain contracts
```

### Data flow

1. `fetchPets()` requests `/pets.json`.
2. `usePets()` owns async lifecycle (`loading`, `data`, `error`).
3. `Home` applies debounced search + deterministic sorting.
4. Filtered pets are rendered in `Gallery`.
5. Selection state comes from `SelectionContext`.
6. `Toolbar` derives selected count/size and executes bulk actions.

## Key technical decisions (and why)

### 1) Context for selection, local state for view controls

**Decision:** Keep selected pets in `SelectionContext`, but keep `search` and `sort` in `Home`.

**Why:** Selection is shared behavior (cards + toolbar + persistence), while search/sort are page-local and should not trigger app-wide coupling.

**Result:**

- Shared behavior stays consistent and easy to access.
- UI controls remain simple and colocated with the page that owns them.

### 2) Persist selection in `localStorage`

**Decision:** Hydrate selected pets from storage and sync on every selection update.

**Why:** Users expect temporary intent (their chosen pets) to survive accidental refreshes.

**Trade-off:** Local persistence is client-only and not cross-device.  
This is acceptable for a lightweight gallery with no authentication/backend state.

### 3) Use a dedicated API module + hook for data loading

**Decision:** Keep `fetchPets()` in `src/api` and async state handling in `usePets()`.

**Why:** This cleanly separates transport concerns from view components and keeps pages focused on rendering logic.

**Result:** Easy swap from local JSON to remote API without touching core page structure.

### 4) Debounced search at the hook layer

**Decision:** `useDebounce` wraps raw input before filtering.

**Why:** Avoid unnecessary list recalculations while typing and keep the UI smooth on larger datasets.

**Trade-off:** Adds a small intentional delay (default `300ms`) before filter updates.

### 5) Batch actions in toolbar (select all / clear / download)

**Decision:** Centralize batch actions in a dedicated toolbar instead of card-level duplication.

**Why:** Keeps card UI lightweight and gives users one predictable control surface for collection-level operations.

### 6) Client-side file download strategy

**Decision:** Fetch each selected image, convert to Blob URL, trigger download with a temporary anchor.

**Why:** Works without backend download endpoints and preserves user-friendly filenames.

**Trade-off:** Many large files can be browser-memory heavy; acceptable for modest gallery scale.

### 7) Monochrome shadcn-inspired visual language

**Decision:** Use neutral surfaces, clear borders, soft elevation, and restrained motion tokens.

**Why:** Prioritizes readability and hierarchy while keeping the aesthetic clean and timeless.

**Implementation notes:**

- Only black/white/grey palette in components.
- Consistent radius/spacing across controls, cards, panels.
- Shared motion tokens in global CSS for coherent interactions.
- Includes `prefers-reduced-motion` handling.

### 8) Route-level decomposition

**Decision:** Keep route screens (`Home`, `PetDetail`, `About`) separated from reusable components.

**Why:** Improves maintainability and prevents one large component from owning unrelated concerns.

## UX decisions

- **Sticky top navigation:** keeps orientation and quick route switching.
- **Skeleton loading state:** reduces perceived latency while data is fetched.
- **Explicit empty/error states:** avoids blank screens and communicates status.
- **Selection feedback on cards:** selected items are visually distinguishable.
- **Responsive grid:** 1/2/4 columns for mobile/tablet/desktop balance.

## Scripts

- `npm run dev` - start development server
- `npm run build` - type-check + production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm run dev
   ```

3. Open:

   [http://localhost:5173](http://localhost:5173)

## Design constraints

- Visual palette restricted to black/white/grey tones.
- Interactions use shared motion timing/easing tokens.
- Accessibility includes reduced-motion fallback.

## Known limitations

- No backend persistence or auth.
- Download flow is client-side only and sequential.
- Error handling is simple (message-based) rather than categorized.
- `useInfiniteScroll` exists but is not yet integrated into `Home`.

## Future improvements

- Add pagination or integrate infinite scroll hook.
- Add test coverage for hooks/context/components.
- Improve download UX with progress + cancellation.
- Introduce virtualized rendering for very large datasets.
- Persist user sort/search preferences.

## Build status

The project builds successfully with:

```bash
npm run build
```
