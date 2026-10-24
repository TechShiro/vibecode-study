# Web Dev Track — Full-stack JavaScript, from zero

Learner: knows Java well + basic JS syntax, zero web dev. Goal: internship/placement
interviews AND the ability to build real projects (Qhess later). Code is
JavaScript/TypeScript (this track is the exception to the Java-only rule — the web
runs on JS). No HTML/CSS authoring is taught; tiny scaffolds are given where needed.

Stack covered: **JavaScript (every concept) → React → Next.js → Node/Express →
NestJS → PostgreSQL → Drizzle ORM**, ending in a full-stack capstone.

Reading order (say "next" to advance; each lesson has quizzes):

## Module A — JavaScript, the whole language

1. [Values, Types & Variables](lessons/0001-javascript-values-types-variables.html) — how JS runs, primitives vs objects, let/const/var, hoisting & TDZ, coercion, == vs ===, truthy/falsy
2. [Functions, Scope & Closures](lessons/0002-functions-scope-closures.html) — declarations vs expressions vs arrows, default/rest params, higher-order functions, IIFE, lexical scope, closures
3. [Objects, this, Prototypes & Classes](lessons/0003-objects-this-prototypes-classes.html) — object literals, the 4 rules of `this`, call/apply/bind, prototype chain, ES6 classes, private fields
4. [Arrays, Destructuring & Iteration](lessons/0004-arrays-destructuring-iteration.html) — every array method, mutating vs non-mutating, spread/rest, destructuring, iterators & generators, Map/Set
5. [Strings, Numbers & Built-ins](lessons/0005-strings-numbers-builtins.html) — string/number methods, floating point, Date, JSON, RegExp, Symbol, BigInt, `?.` and `??`, copies
6. [The Event Loop, Callbacks & Promises](lessons/0006-event-loop-callbacks-promises.html) — call stack, task vs microtask queues, callback hell, Promise anatomy, all/allSettled/race/any
7. [async/await, fetch & Friends](lessons/0007-async-await-fetch.html) — async/await semantics, parallel vs sequential, fetch API, AbortController, timers, error patterns
8. [Modules, npm & Tooling](lessons/0008-modules-npm-tooling.html) — ESM vs CommonJS, package.json & semver, npm scripts, Vite/bundling/transpiling, lint/format
9. [DOM, Events & Browser APIs](lessons/0009-dom-events-browser-apis.html) — DOM tree from JS, events/bubbling/delegation, forms, localStorage, custom errors, strict mode
10. [JS Interview Patterns & Output Questions](lessons/0010-js-interview-patterns.html) — debounce/throttle/curry/memoize, polyfills, deep clone, memory leaks, output-question drills

## Module B — React

11. [Components, JSX, Props & State](lessons/0011-react-components-props-state.html) — why React, JSX rules, props vs state, events, lists & keys, conditional rendering
12. [Hooks Deep Dive](lessons/0012-react-hooks-deep-dive.html) — render mental model, useState/useEffect/useRef/useMemo/useCallback/useContext/useReducer, custom hooks, rules of hooks
13. [State Patterns, Forms & Routing](lessons/0013-react-state-forms-routing.html) — lifting state, controlled forms, Context, Redux Toolkit & Zustand, React Router
14. [Performance & Internals](lessons/0014-react-performance-internals.html) — VDOM & reconciliation, re-render triggers, memo, lazy/Suspense, error boundaries, concurrent features

## Module C — Next.js

15. [App Router & Rendering Models](lessons/0015-nextjs-app-router-rendering.html) — file-based routing, layouts, dynamic routes, server vs client components, metadata
16. [Data, Server Actions & APIs](lessons/0016-nextjs-data-server-actions.html) — SSR/SSG/ISR/CSR, fetch caching, route handlers, server actions, middleware, deployment

## Module D — Backend

17. [Node.js Fundamentals](lessons/0017-node-fundamentals.html) — V8+libuv, non-blocking IO, core modules (fs/path/http/events/streams), raw HTTP server, event loop phases
18. [Express: REST APIs & Middleware](lessons/0018-express-rest-middleware.html) — routing, REST design & status codes, middleware pipeline, MVC structure, error handling, full CRUD build
19. [Express: Auth, Validation & Security](lessons/0019-express-auth-security.html) — sessions vs JWT, bcrypt, role-based access, CORS, helmet, rate limiting, uploads, testing glance
20. [NestJS: Modules, DI & the Request Pipeline](lessons/0020-nestjs-architecture.html) — TS primer, modules/controllers/providers, dependency injection, pipes/guards/interceptors/filters, vs Express

## Module E — Database & ORM

21. [PostgreSQL: SQL Fundamentals](lessons/0021-postgres-sql-fundamentals.html) — database landscape (SQL vs NoSQL, top industry DBs), tables, types, constraints, CRUD SQL, joins, GROUP BY, subqueries, normalization
22. [PostgreSQL: Indexes, Transactions & JSONB](lessons/0022-postgres-indexes-transactions.html) — B-tree indexes, EXPLAIN, ACID & isolation levels, views, JSONB, node-postgres, SQL injection
23. [Drizzle ORM: Schema, Migrations & Queries](lessons/0023-drizzle-orm.html) — what an ORM is & why, drizzle-kit workflow, typed schema, relational queries, transactions, full Prisma section (schema/client/migrate) + comparison

## Capstone

24. [Full-Stack Wiring & Interview Drill](lessons/0024-fullstack-capstone-interview.html) — end-to-end architecture, a complete Next.js + Drizzle + Postgres mini-app, deployment, whole-track rapid-fire
25. [Bonus: MySQL, MongoDB & Mongoose](lessons/0025-mysql-mongodb-mongoose.html) — the other two top-3 databases, MySQL vs Postgres dialect, document modeling (embed vs reference), Mongoose ODM, and the "why this and not that" interview drill

After lesson 25 → [System Design track](../system-design/INDEX.md) for scaling what you built.

## Module 0 — HTML5 & Modern CSS Foundations

26. [HTML5 Semantics & Web Accessibility](lessons/0026-html5-semantics-and-accessibility.html) — landmark tags, a11y, ARIA, forms, button vs anchor, SEO
27. [The CSS Box Model & Flexbox Deep Dive](lessons/0027-css-box-model-and-flexbox.html) — border-box reset, main vs cross axis, justify/align, grow/shrink/basis
28. [CSS Grid & Responsive Web Design](lessons/0028-css-grid-and-responsive-design.html) — 2D layouts, auto-fit/minmax, mobile-first breakpoints, clamp()
29. [Modern CSS & Tailwind CSS Architecture](lessons/0029-modern-css-and-tailwind.html) — CSS custom properties, dark mode tokens, utility-first JIT compilation

## Module F — Advanced Frontend & Real-Time

30. [Modern State Management: Zustand & TanStack Query](lessons/0030-react-state-management-zustand-tanstack.html) — Client state vs Server state, caching & invalidation
31. [WebSockets & Real-Time Web with Socket.io](lessons/0031-websockets-and-realtime-web.html) — persistent full-duplex TCP, rooms, namespaces, reconnection
32. [Web Performance & Core Web Vitals](lessons/0032-web-performance-and-core-web-vitals.html) — LCP, INP, CLS, code-splitting, lazy loading, asset optimization

## Module G — Modern APIs, Security & DevOps

33. [GraphQL APIs & Apollo Server](lessons/0033-graphql-apis-and-apollo.html) — SDL schema, queries, mutations, resolvers, over/under-fetching solutions
34. [Web Security, XSS, CSRF & Auth.js](lessons/0034-web-security-and-oauth-authjs.html) — HttpOnly cookies, SameSite, OAuth 2.0 social logins, XSS/CSRF defenses
35. [Docker, CI/CD & Web Deployment](lessons/0035-docker-cicd-and-web-deployment.html) — multi-stage container builds, GitHub Actions, Nginx, production deployment