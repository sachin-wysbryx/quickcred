# QuickCred Testing Suite

This folder contains all unit and UI tests for the QuickCred monorepo.

## 🚀 Getting Started

To run the tests, use the following command from the root directory:

```bash
pnpm test
```

### End-to-End (E2E) Tests
To run E2E tests (Playwright):
```bash
pnpm test:e2e
```

For UI mode (interactive):
```bash
npx playwright test --ui
```

For a one-time run (CI mode):
```bash
pnpm test --run
```

## 📂 Folder Structure

- `testing/utils/`: Unit tests for shared logic in `packages/utils`.
- `testing/ui/`: UI component tests for shared components in `packages/ui`.
- `testing/e2e/`: E2E tests using Playwright.
- `testing/setup.ts`: Global test setup (JSDOM, Testing Library matchers).

## 🛠️ Configuration

Tests are powered by **Vitest**. Configuration is located in the root `vitest.config.ts`.

### Writing New Tests

- **Utility Tests**: Create a file ending in `.test.ts` in `testing/utils/`.
- **UI Tests**: Create a file ending in `.test.tsx` in `testing/ui/`.
- Use `describe`, `it`, and `expect` from `vitest`.
- Use `@testing-library/react` for component testing.
