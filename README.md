from pathlib import Path

readme = r"""# Splitmate

**Share expenses. Stay balanced.**

Splitmate is a global-first expense-sharing application designed to help friends, families, travel groups, households, and teams record shared spending, split costs, track balances, and settle up.

> **Project status:** Splitmate is under active development. This README describes the product direction and known project foundation. Planned features are identified as such and should not be assumed to be production-ready.

---

## Table of Contents

- [Overview](#overview)
- [Product Goals](#product-goals)
- [Core Features](#core-features)
- [Expense Splitting](#expense-splitting)
- [Global-First Experience](#global-first-experience)
- [AI and Automation](#ai-and-automation)
- [Technology Stack](#technology-stack)
- [Architecture Direction](#architecture-direction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Authentication](#authentication)
- [Application Routes](#application-routes)
- [Development Commands](#development-commands)
- [Security and Privacy](#security-and-privacy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Splitmate aims to make shared expenses easy to manage without relying on scattered messages, spreadsheets, or manual calculations.

The application is intended to answer:

- Who paid?
- Who participated in the expense?
- How much does each participant owe?
- Who needs to receive money?
- Which balances are still outstanding?
- How much has a group or trip spent?

Splitmate is being designed for international use, with planned support for multiple currencies, country and region preferences, and multilingual experiences.

## Product Goals

1. Make adding and splitting an expense quick and straightforward.
2. Let users choose exactly who participates in each expense.
3. Keep group balances and settlement history transparent.
4. Support trips, households, social activities, and professional expenses.
5. Provide useful spending summaries and visual insights.
6. Build international currency and localization support into the product foundation.
7. Introduce AI assistance where it saves users time without taking control away from them.

## Core Features

The following describes the intended product areas.

| Product area | Purpose |
|---|---|
| Overview | Summarize expenses, balances, groups, and recent activity. |
| Groups & Trips | Create and manage shared-expense groups and trips. |
| Friends | Manage people who share expenses with the user. |
| Expenses | Add, view, edit, and organize shared expenses. |
| Balances | Show amounts owed and amounts to receive. |
| Activity | Review expense, group, and settlement activity. |
| Insights | Explore spending patterns, summaries, and trends. |
| My Profile | Manage account details and personal preferences. |

### Groups and Trips

Users should be able to create groups for:

- Holidays and travel.
- Shared apartments and household bills.
- Weekend activities.
- Events and celebrations.
- Professional and business expenses.

A group is intended to have its own participants, expenses, balances, and activity history. Trip groups may also include a trip name and travel dates.

### Friends and Participants

Users should be able to add friends and include them in groups and expenses.

A key requirement is that not every group member must participate in every expense. The user recording an expense should be able to select only the people who share that cost.

### Expenses

An expense is expected to include:

- Description.
- Total amount and currency.
- Person who paid.
- Group or trip.
- Date.
- Participants included in the split.
- Split method.
- Optional notes or receipt.

### Balances and Settlements

The balances area is intended to show:

- What the current user owes.
- What other people owe the current user.
- Outstanding balances within each group.
- Settlement history.

The product direction is to make settling group balances easier while preserving transparent underlying expense records.

### Activity

A chronological activity feed is planned for:

- New expenses.
- Expense updates.
- Participant changes.
- Settlements.
- Group changes.

### Insights and Analytics

Planned visualizations include:

- Donut charts for expense distribution.
- Bar charts for comparisons.
- Spending trends over time.
- Group and trip summaries.
- Individual contribution summaries.
- Budget and spending predictions, when supported by sufficient data.

Predictions should be presented as estimates, not guarantees.

---

## Expense Splitting

Flexible participant selection is a core product requirement.

**Example:** A group has Alex, Sam, Priya, and Rahul. Alex pays ₹4,000 for dinner, but Rahul did not attend. The expense should be split only among Alex, Sam, and Priya.

### Planned split methods

- **Equal split:** Divide the total equally among selected participants.
- **Unequal split:** Enter a custom amount for each participant.
- **Percentage split:** Allocate the expense using percentages.
- **Shares split:** Allocate the expense using relative shares.

The application should validate that custom amounts, percentages, or shares reconcile with the expense total according to the selected method.

---

## Global-First Experience

International support is a foundational product requirement.

Planned capabilities include:

- International currency support.
- Country and region selection.
- Language selection.
- Locale suggestions based on device or browser settings.
- Manual locale override.
- Group-level currency preferences.
- Explicit exchange-rate handling for cross-border expenses.
- Clear display of original and converted amounts when conversion is used.

Exchange rates should be associated with a rate and timestamp or another traceable source. The application should not silently mix currencies or present estimates as exact values.

---

## AI and Automation

AI-assisted capabilities are part of the product direction.

### Receipt scanning

A planned receipt workflow may extract:

- Merchant.
- Transaction date.
- Total amount.
- Currency.
- Line items, where extraction quality permits.

Extracted values should be shown to the user for confirmation before an expense is saved.

### Email-assisted receipt discovery

An optional future workflow may help users find receipts in connected email accounts. It must be permission-based, transparent, and limited to the data needed for the requested task.

### AI expense assistance

Future AI capabilities may help users:

- Extract details from receipts.
- Categorize expenses.
- Summarize group or trip spending.
- Identify possible duplicate entries for review.

AI-generated information should remain reviewable. It should not silently create or settle financial transactions.

---

## Technology Stack

The current frontend foundation is:

| Layer | Technology | Role |
|---|---|---|
| Frontend framework | Next.js 16.4.3 | Application routing and rendering. |
| UI library | React 19 | Component-based user interface. |
| Language | TypeScript | Typed application development. |
| Styling | Tailwind CSS v4 | Utility-based styling. |
| Icons | lucide-react | Interface icons. |
| Authentication | Clerk (`@clerk/nextjs`) | Sign-up, sign-in, and session management. |

FastAPI and SQLAlchemy have been discussed as the backend foundation for the project. Confirm the current backend repository, database engine, and deployment configuration before treating them as finalized implementation details.

## Architecture Direction

The intended high-level architecture separates the user interface, authentication, application API, and persistent data:

```text
                 User
                  |
                  v
        Next.js / React Frontend
                  |
          +-------+-------+
          |               |
          v               v
      Clerk Auth     Splitmate API
                          |
                          v
                    Business Logic
                          |
                          v
                    Data Access Layer
                          |
                          v
                  Relational Database
```

The frontend should not access database credentials directly. Data operations should be performed through the backend API or another trusted server-side layer.

---

## Project Structure

The frontend follows a Next.js App Router structure. The exact directory contents may evolve.

```text
splitmate/
├── frontend/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── app/
│   │   │   ├── home/
│   │   │   │   └── page.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── [[...sign-up]]/
│   │   │   │       └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   ├── context/
│   │   └── proxy.ts
│   ├── .env.local
│   └── package.json
│
└── backend/
    └── ...
```

This is a documentation-level overview, not a guarantee that every directory shown is already present. Update it as the repository evolves.

---

## Getting Started

### Prerequisites

- Node.js compatible with the project's Next.js version.
- npm.
- Git.
- A Clerk account and development application.

For backend development, install the Python version and database required by the backend's actual dependency and configuration files.

### 1. Clone the repository

```bash
git clone <repository-url>
cd splitmate
```

Replace `<repository-url>` with the actual repository URL.

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Configure environment variables

Create `frontend/.env.local` and add the required Clerk development keys. See [Environment Configuration](#environment-configuration).

### 4. Start the frontend

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Configuration

The frontend uses Clerk environment variables for authentication.

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Use values from the correct Clerk instance and environment.

**Security requirements:**

- Never commit `.env.local`.
- Never expose `CLERK_SECRET_KEY` in frontend code.
- Do not paste secret keys into issues, chat messages, or public logs.
- Use separate development and production credentials.
- Configure production domains and redirect URLs before deployment.

---

## Authentication

Splitmate uses Clerk for authentication.

### Intended sign-in options

- Google sign-in.
- Email-based authentication, including email verification or OTP when enabled in Clerk.
- Email/password only if enabled in the Clerk configuration.

The product does not intend to require a mobile number during registration. Phone collection and phone OTP should remain disabled or optional in Clerk unless this requirement changes.

### Authentication pages

| Route | Purpose |
|---|---|
| `/login` | Sign in to Splitmate. |
| `/signup` | Create a Splitmate account. |
| `/signup/*` | Clerk's nested sign-up and OAuth callback paths. |

The sign-up page uses a Next.js optional catch-all route:

```text
src/app/signup/[[...sign-up]]/page.tsx
```

This allows Clerk to handle nested sign-up paths such as its SSO callback route.

The root layout includes `ClerkProvider`, and the Next.js proxy configuration is used for request handling. Protected data and server-side operations must still enforce authorization at the resource or API level.

### Authentication verification checklist

- [ ] Google sign-up completes successfully.
- [ ] Google sign-in completes successfully.
- [ ] Email verification works.
- [ ] A mobile number is not required during registration.
- [ ] Successful authentication redirects to the intended application page.
- [ ] Signed-out users cannot access protected user data.
- [ ] Users can sign out.
- [ ] Production Clerk configuration is tested separately from development.

---

## Application Routes

| Route | Description |
|---|---|
| `/home` | Public marketing and product landing page. |
| `/login` | Authentication entry for existing users. |
| `/signup` | Registration for new users. |
| `/` | Main application dashboard; intended to require authentication. |

Additional pages may be introduced for groups, trips, expenses, balances, activity, insights, and profile management as the application evolves.

---

## Development Commands

Run these commands from the `frontend/` directory.

| Command | Description |
|---|---|
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production build locally. |
| `npx tsc --noEmit` | Check TypeScript types. |
| `rm -rf .next` | Remove generated Next.js build/cache files. |

After changing route files, if generated Next.js type files refer to an old route, stop the development server, clear `.next`, and rerun the type check.

---

## Security and Privacy

Splitmate handles personal and potentially sensitive financial information. Security and privacy must be considered throughout development.

- Authenticate users before serving private account data.
- Authorize access to every group, expense, and balance using server-side checks.
- Do not trust user IDs supplied by the browser without verifying the authenticated session.
- Keep secrets and database credentials on the server.
- Validate expense amounts, currencies, participants, and split calculations on the backend.
- Keep an audit trail for important expense and settlement changes.
- Request explicit permission before accessing contacts or email accounts.
- Collect only the information required for each feature.
- Do not expose one user's private financial information to another user without authorization.

Authentication alone does not replace authorization. Every API endpoint that reads or changes private data must enforce access rules.

---

## Roadmap

This roadmap describes product direction. It does not mean every feature is already implemented.

### Phase 1 — Application Foundation

- [x] Establish Next.js frontend.
- [x] Set up TypeScript and Tailwind CSS.
- [x] Add Clerk SDK and provider.
- [x] Create login and sign-up pages.
- [x] Add a catch-all sign-up route for Clerk callbacks.
- [ ] Complete end-to-end authentication testing.
- [ ] Confirm mobile number is not required.
- [ ] Finalize protected route and API authorization behavior.

### Phase 2 — Core Expense Sharing

- [ ] User profile management.
- [ ] Create and manage friends.
- [ ] Create groups and trips.
- [ ] Add, edit, and delete expenses.
- [ ] Select or exclude participants per expense.
- [ ] Equal, unequal, percentage, and shares-based splits.
- [ ] Calculate balances.
- [ ] Record settlements.

### Phase 3 — Activity and Insights

- [ ] Group activity feed.
- [ ] Expense history and filters.
- [ ] Dashboard summaries.
- [ ] Donut and bar chart visualizations.
- [ ] Spending trends.
- [ ] Group and trip reports.

### Phase 4 — Global Support

- [ ] Multiple currencies.
- [ ] Group-level currency settings.
- [ ] Exchange-rate storage and conversion rules.
- [ ] Country and region preferences.
- [ ] Multilingual interface.
- [ ] Locale detection and manual override.

### Phase 5 — AI and Automation

- [ ] Receipt image upload.
- [ ] OCR-based receipt extraction.
- [ ] User review before saving extracted expenses.
- [ ] Optional email receipt discovery with explicit consent.
- [ ] Expense categorization assistance.
- [ ] Spending summaries and anomaly suggestions.

### Phase 6 — Production Readiness

- [ ] Production authentication configuration.
- [ ] Backend authorization and security review.
- [ ] Database migrations and backup strategy.
- [ ] Automated tests.
- [ ] Logging and monitoring.
- [ ] Performance testing.
- [ ] Deployment pipeline.
- [ ] Privacy policy and terms of service.

---

## Contributing

A suggested contribution workflow:

1. Create a feature branch.
2. Keep changes focused on one feature or fix.
3. Follow existing TypeScript and project conventions.
4. Run the TypeScript check and relevant tests.
5. Document new environment variables or setup steps.
6. Open a pull request with a clear description and testing notes.

Do not commit credentials, local environment files, generated build output, or personal data.

## License

No license has been specified yet. Until a license is added to the repository, usage and redistribution rights should not be assumed.

---

**Splitmate — Share expenses. Stay balanced.**
"""

path = Path("/mnt/data/README.md")
path.write_text(readme, encoding="utf-8")
print(f"Created {path} ({path.stat().st_size:,} bytes)")
