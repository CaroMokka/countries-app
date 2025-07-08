# 🌎 Countries App

Welcome to **Countries App**!  
A **React + TypeScript + GraphQL** project built with care to explore countries, filter them by name, continent, or currency, and view details in a clean, professional UI.

> ⚡ Designed from scratch to practice solid architecture, design patterns, and real E2E testing.

---

## 🚀 What does this app do?

- **Lists all countries** fetched from a GraphQL API.
- Lets you **filter** by name, continent, or currency.
- Navigate between pages (CountriesPage & CountryPage) using React Router.
- Shows key details like capital, languages, emoji flag, and region.
- Fully **tested**: unit tests, integration, and **End-to-End** with Playwright.

---

## 🛠️ How did we build it?

**1️⃣ Project setup**

- Bootstrapped with **Vite**, React and TypeScript.
- Configured **Apollo Client** to connect with the countries GraphQL API.

**2️⃣ Structure & Components**

- Created **Pages**: `CountriesPage` (List Page) and `CountryPage` (Detail Page).
- Built reusable components: `CountryCard`, `SearchBar`, `Filters`.

**3️⃣ Global State with Context**

- Added `CountryContext` to fetch all countries and share data across the app.

**4️⃣ GraphQL Fragments**

- Used **fragments** to keep queries clean and maintainable.

**5️⃣ Mocks & Types**

- Created mocks for countries to develop UI and logic before connecting to the live API.
- Typed everything with TypeScript: props, context, API responses.

**6️⃣ Custom Hooks**

- Wrote custom hooks like `useDebounce` to optimize UX when filtering.

**7️⃣ Routing**

- Integrated **React Router** for seamless navigation between list and detail pages.

**8️⃣ Filtering**

- Search bar for country names.
- Filter by continent.
- Filter by currency.

**9️⃣ Testing**

- ✅ **Unit tests** with Jest + React Testing Library.
- ✅ **Integration tests** to ensure context, filters, and components work together.
- ✅ **E2E tests** with **Playwright**, simulating a real user filtering and navigating.

---

# 🚀 How to Run

### 1. Install dependencies:

```
npm install
```

### 2. Run development server:

```
npm run dev
```

## 🧪 How to run the tests

### 3. Run unit and integration tests:

```
npm test
```

### 4. Run E2E tests (Playwright) / Run E2E tests (Playwright + Debug):

```
npx playwright test
```

```
npx playwright test --debug
```

## Testing

- Unit tests: Validate individual components and utilities.
- Integration tests: Ensure components and context work together correctly.
- E2E tests: Test critical user flows like filtering countries and navigating to detail pages in a real browser.

## Technologies Used

- React
- TypeScript
- Vite
- Apollo Client
- GraphQL
- React Router
- Jest + React Testing Library
- Playwright

## 📌 What we learned

- ✅ Modularize queries with GraphQL fragments.
- ✅ Use context for global state sharing.
- ✅ Define TypeScript types from the start.
- ✅ Write reusable custom hooks.
- ✅ Test UI, logic, and real user flows E2E.
- ✅ Keep a clean, maintainable architecture.

## 💡 Next steps

- Add pagination for long lists.

- Improve responsive design.

- Add advanced filters.

- Store user preferences in localStorage.

- Deploy to production.

### Countries App — 2025

```
Built with ❤️ by Caro Araya
```
