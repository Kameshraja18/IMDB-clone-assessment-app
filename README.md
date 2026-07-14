# TECH ASSESSMENT

This repository contains both the frontend (React/Vite) and the backend (Node.js/Express) for the IMDB Clone application.

## Bug Report
Google Doc: https://docs.google.com/document/d/1kG2egX-82jE9OjZPKgVsTIdDCdaEEE0H/edit?usp=sharing&ouid=101708604472523374755&rtpof=true&sd=true

## Directory Structure

- `client/` - Frontend application
- `src/` - Backend source code
- `config/` - Configuration files
- `database/` - Database seeds, migrations, and SQLite file
- `logs/` - Application logs
- `uploads/` - User-uploaded files

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation & Running Locally

1. Clone the repository and navigate to the project root.
2. Copy `.env.example` to `.env` (if applicable) and fill in your variables.
3. Install root and client dependencies:
   ```bash
   npm install
   cd client && npm install && cd ..
   ```
4. Create the local SQLite database file used by Knex:
   - **Mac/Linux:**
     ```bash
       touch database/dev.sqlite3
     ```
   - **Windows (PowerShell):**
     ```powershell
       New-Item database/dev.sqlite3 -ItemType File
     ```
    *(Or simply create a new empty file named `database/dev.sqlite3` in the `database/` folder using your code editor).*
5. Set up the database schema and mock data:
   ```bash
   npx knex migrate:latest
   npm run seed
   ```
6. Run both the backend and frontend concurrently:
   ```bash
   npm run dev
   ```
   The frontend will start at `http://localhost:5173` and the backend at `http://localhost:3000`.

## Environment Configuration

The backend reads environment values from `.env`.

Required values:

- `PORT=3000`
- `JWT_SECRET=<your-secret>`

Notes:

- The app uses SQLite through Knex, so the active database file is `database/dev.sqlite3`.
- If you need a local example file, use `.env.example` as the starting point.

## Assumptions

- The app is being evaluated in a local development environment.
- SQLite is used for persistence; no external database service is required.
- The backend API runs on port `3000` and the frontend runs on the Vite dev server.
- Seed data is already available in the repository and can be loaded with the provided seed script.

## Database Scripts and Migrations

Database-related files included in the repository:

- Migrations: `database/migrations/`
- Seed scripts: `database/seeds/`
- Local database file: `database/dev.sqlite3`

Useful commands:

```bash
npx knex migrate:latest
npm run seed
```

## Supporting Documentation

Use these files when running or evaluating the project:

- [Candidate Bug Report](Candidate_Bug_Report.md) - summary of the bugs reproduced and fixed during the assessment.
- [.env.example](.env.example) - sample environment values for local setup.
- [knexfile.js](knexfile.js) - Knex configuration for the SQLite database.
- [database/db.js](database/db.js) - backend database bootstrap.

## Technical Assessment Instructions

This repository contains several intentional bugs for the purpose of a technical debugging interview.

### Your Task:

1. Run the application locally and interact with the UI.
2. Identify the bugs across the frontend, API, and backend/database layers.
3. Debug and fix the issues you encounter.

### Submission Instructions
To evaluate your debugging skills, please follow these submission guidelines carefully:

1. Create a new repository on your GitHub account and push this codebase to it.
2. Debug the application and commit your code fixes directly to your new repository.
3. For every bug you find and fix, document it in a Google Doc using the format provided in the `Candidate_Bug_Report.md` template. Please explain the symptom and your fix in plain English.
4. Add the link to your Google Doc at the top of your repository's `README.md` (make sure the Google Doc permissions are set to "Anyone with the link can view").
5. Share the link to your new repository with your recruiter or interviewer to complete the assessment.
