# Building Kwack: How Agentic AI Development Helped Us Ship a Full-Stack Medical Education Platform

Medical students in Australia face a common problem: preparing for OSCEs (Objective Structured Clinical Examinations) is disorganised, expensive, and isolating. Study materials are scattered across Google Docs, PDFs, and group chats. Practice sessions are hard to coordinate. Feedback is inconsistent. We built **Kwack** to fix this — a free, community-driven OSCE preparation platform for Australian medical students that brings structure, collaboration, and AI assistance to clinical exam prep.

But this post isn't just about what Kwack does. It's about _how_ we built it — using agentic AI development with Claude across the entire software development lifecycle, from planning to deployment and maintenance.

## What Kwack Does

At its core, Kwack lets medical students find, create, and practice OSCE stations. But the feature set goes well beyond a simple case library.

**OSCE Cases & MCQs.** Students can browse verified cases curated by staff or explore community-created stations across 28+ medical specialties. Each case includes a patient stem, doctor task, standardized patient information, marking guidelines, and follow-up questions. We also built a full MCQ module with question sets, practice sessions, and detailed answer explanations.

**Real-Time Partner Practice.** Study sessions let two students practice together with assigned doctor and patient roles. Sessions use unique shareable codes, configurable reading and case times, and support multiple case rotations — replicating the structure of a real OSCE circuit.

**AI-Powered Voice Practice.** For solo practice, students can run through cases with an AI-powered patient using voice interaction. The system generates realistic patient responses and provides structured feedback on performance, powered by OpenAI's API.

**Progress Tracking & Analytics.** Every attempt is tracked. Students get a personal analytics dashboard showing their performance across specialties, and staff can view aggregate statistics to identify areas where students struggle.

**Community Features.** A voting system (like/dislike), bookmarking, user profiles, and collections give the platform social dynamics that help surface the best content organically.

## The Tech Stack

Kwack is a full-stack application with a clear separation between backend and frontend, connected through a typed API layer.

**Backend.** Django 5.1 with Django Ninja provides an async-capable REST API with auto-generated OpenAPI documentation. We use PostgreSQL 15 for the database, Pydantic for request/response validation, and django-allauth for authentication including Google OAuth. The API is session-based with CSRF protection, rate-limited to 100 requests per day per IP, and uses reCAPTCHA v3 for bot protection on auth endpoints.

**Frontend.** Next.js 16 with TypeScript powers the frontend, using the App Router for server-side rendering capabilities. Mantine UI provides the component library, giving us a consistent design system with built-in dark mode support. TanStack React Query handles server state management, Zustand manages client state, and nuqs syncs filter and pagination state with URL parameters. For rich content, we integrated Tiptap as the text editor for case creation, and Framer Motion for animations.

**Infrastructure.** The application runs on a DigitalOcean droplet using Docker Compose. Nginx handles reverse proxying — routing `kwack.io` to the Next.js frontend and `api.kwack.io` to the Django backend — with Let's Encrypt SSL certificates. Docker images are built and pushed to GitHub Container Registry via GitHub Actions, then pulled and deployed on the server automatically on every push to main. Migrations run automatically as part of the deployment pipeline.

## Integrations That Matter

**Sentry** is integrated on both frontend and backend for error tracking in production. Both SDKs run at 100% trace sample rate, giving us full visibility into errors and performance issues without polluting local development. When something breaks in production, we know about it immediately with full stack traces and context.

**Microsoft Clarity** gives us session replay and heatmap analytics, helping us understand how students actually use the platform — where they click, where they get stuck, and which features get the most engagement. This qualitative data complements the quantitative metrics from our analytics dashboard.

**Google OAuth** provides frictionless authentication. Students sign in with their university Google accounts, and django-allauth handles the OAuth flow, auto-signup, and account linking. Combined with reCAPTCHA v3, we keep the auth experience smooth while blocking automated abuse.

**OpenAI's API** powers two key features: AI-assisted case creation for authors, and the voice OSCE practice mode where students can have realistic patient conversations and receive structured feedback.

## Agentic Development Across the SDLC

The most interesting aspect of building Kwack has been using Claude as an agentic development partner across every stage of the software development lifecycle. This isn't about asking an AI to autocomplete code — it's about building structured workflows that let an AI agent plan, implement, test, and validate full features autonomously.

**Planning.** We use Claude's plan mode to explore the codebase, understand existing patterns, and design implementation approaches before writing any code. For non-trivial features, the agent reads through relevant models, schemas, views, and components to propose an architecture that fits the existing conventions. This catches design issues before any code is written.

**Building.** We created a suite of Claude commands (slash commands) that encode our development conventions into repeatable workflows. `/new-feature` scaffolds an entire feature from database model to React page — creating the Django model, admin registration, migration, Pydantic schemas, API views, TypeScript types, API client, React Query hooks, and page component in one structured pass. `/add-endpoint` does the same for individual API endpoints. `/new-page` scaffolds frontend routes. Each command follows the patterns established in the codebase, maintaining consistency as the project grows.

**Type Safety.** `/sync-types` audits the boundary between backend and frontend, checking for missing TypeScript interfaces, field mismatches, type drift (like Python's `Optional` vs TypeScript's `null`), and stale API client functions. This keeps the full-stack type contract honest without manual cross-referencing.

**Testing.** `/write-tests` generates comprehensive pytest suites covering happy paths, authentication (401/403), authorization, validation errors (422), not-found cases (404), filtering, and pagination. Tests use Factory Boy for data generation and follow the existing fixture patterns in our conftest.

**Deployment.** `/deploy-check` runs a full pre-deployment validation: TypeScript compilation, ESLint, Django system checks, migration consistency, the pytest suite, secret/credential leak detection, and optionally Docker builds. `/review-migration` specifically audits Django migrations for production safety — flagging critical operations like field removal, type changes, and irreversible data migrations that could cause downtime on our auto-deploy pipeline.

**Maintenance.** Because these commands encode conventions, they also serve as living documentation. A new developer (or a future AI agent) can read the command definitions to understand exactly how features, endpoints, and tests should be structured in this codebase.

## What We Learned

Agentic development works best when you give the agent clear constraints. Our Claude commands succeed because they're opinionated — they prescribe specific patterns for models, schemas, views, and components rather than leaving architectural decisions open-ended. The agent is most productive when it's executing a well-defined playbook, not making subjective design choices.

The payoff is speed and consistency. Features that would take a full day of manual scaffolding, wiring, and testing can be stood up in a fraction of that time, with consistent patterns across the codebase. The developer's role shifts from writing boilerplate to reviewing, refining, and making the judgement calls that require domain knowledge.

Kwack is live at [kwack.io](https://kwack.io), free for medical students in South Australia and New South Wales. If you're interested in the intersection of AI-assisted development and education technology, we'd love to hear from you.
