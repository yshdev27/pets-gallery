# Prompts

1. I am building a React + TypeScript pet gallery with `api/`, `hooks/`, `context/`, `components/`, `pages/`, and `types/`. Critically review this architecture, identify scaling risks, and give me a prioritized refactor plan for the next 3 iterations.

2. I use Context for selected pets and local state for search/sort. At what exact point should I move to Zustand or Redux Toolkit, and what migration path would avoid breaking current behavior?

3. My search is debounced at 300ms and filtering/sorting happens client-side. Optimize this flow for large datasets and propose thresholds for when I should shift to server-side search and sort.

4. I currently fetch pets from `/pets.json`. Give me a step-by-step migration plan to a paginated API (cursor or page-based), including loading/error states, deduplication, and cache strategy.

5. My bulk download flow fetches each image URL and downloads files one by one. Redesign this into a robust production-grade system with progress, retries, cancellation, filename sanitization, and controlled concurrency.

6. Audit my monochrome shadcn-inspired UI system and propose strict design tokens for spacing, radius, borders, typography, and motion so every screen feels perfectly consistent.

7. Review my app for accessibility gaps and give me fixes for keyboard navigation, focus visibility, reduced-motion handling, contrast, semantic structure, and touch target sizing.

8. Create a high-confidence test strategy for this project with concrete test cases for selection persistence, debounced search, sorting correctness, bulk actions, and empty/error/loading states.

9. Create a release-readiness checklist for this frontend app covering functional QA, performance checks, accessibility checks, browser/device coverage, and rollback safety.
