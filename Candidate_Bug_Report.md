# Candidate Bug Report

**Candidate Name:** [K KAMESHRAJA]  
**Date:** 2026-07-14  
**Position:** [Full Stack Developer intern]

---

## Instructions

For every bug you discover and fix during this assessment, please duplicate the template below.

**Important:** Please describe the **Symptom** and your **Fix Summary** in simple, plain English. You may include technical details in the "Code/Technical Details" section for the engineering team to review later. 

**Note:** Please copy this template format into a new **Google Doc** and share the link as part of your final submission.

---

### Bug #1

- **Feature/Page Affected:** App startup / backend login flow
- **Symptom (Plain English):** The app would not start because the server crashed on a missing dependency before the site could load.
- **Fix Summary (Plain English):** I added the missing auth and dev dependencies so the backend could boot and the dev script could run both apps.
- **Code/Technical Details:** Updated [package.json](package.json) and installed `bcrypt` and `concurrently`.

---

### Bug #2

- **Feature/Page Affected:** Backend root URL
- **Symptom (Plain English):** Visiting `localhost:3000` showed `Cannot GET /` instead of a useful response.
- **Fix Summary (Plain English):** I added a root route that returns a simple landing message and fixed the CORS origin typo for local development.
- **Code/Technical Details:** Updated [src/app.js](src/app.js).

---

### Bug #3

- **Feature/Page Affected:** Login and register requests
- **Symptom (Plain English):** The forms were sending API calls to the frontend port instead of the backend, so registration and login could not reach the server.
- **Fix Summary (Plain English):** I set the Axios client to use the backend API base URL by default and preserved request headers correctly.
- **Code/Technical Details:** Updated [client/src/services/httpServices.js](client/src/services/httpServices.js).

---

### Bug #4

- **Feature/Page Affected:** Authentication token generation
- **Symptom (Plain English):** Registration failed with a server error because the JWT secret was not loaded into the runtime.
- **Fix Summary (Plain English):** I restored environment loading in the server entrypoint so `JWT_SECRET` is available when tokens are signed.
- **Code/Technical Details:** Updated [server.js](server.js).

---

### Bug #5

- **Feature/Page Affected:** Movie list and movie details
- **Symptom (Plain English):** Some movie details loaded the wrong record or stayed blank, and deleted movies still appeared in lists.
- **Fix Summary (Plain English):** I corrected the movie lookup logic, fixed pagination, and filtered out soft-deleted rows before returning movie lists.
- **Code/Technical Details:** Updated [src/models/Movie.js](src/models/Movie.js) and [src/controllers/movieController.js](src/controllers/movieController.js).

---

### Bug #6

- **Feature/Page Affected:** Movie create/edit/view screens
- **Symptom (Plain English):** Movie posters and detail pages could point at the wrong URL path, and newly added or edited movies were not always shown correctly in the UI.
- **Fix Summary (Plain English):** I normalized movie image URLs, added an id-based movie fetch helper, and updated the React screens to hydrate and update movie state consistently.
- **Code/Technical Details:** Updated [client/src/services/Index.js](client/src/services/Index.js), [client/src/pages/movie/ViewMovie.jsx](client/src/pages/movie/ViewMovie.jsx), [client/src/pages/movie/EditMovie.jsx](client/src/pages/movie/EditMovie.jsx), and [client/src/pages/movie/AddMovie.jsx](client/src/pages/movie/AddMovie.jsx).

---

### Bug #7

- **Feature/Page Affected:** Shared search/add button
- **Symptom (Plain English):** The add button on the Movies and Producers pages still said `Add Actor`, which was confusing.
- **Fix Summary (Plain English):** I made the shared search bar choose the label from the current page path.
- **Code/Technical Details:** Updated [client/src/components/SearchBar.jsx](client/src/components/SearchBar.jsx).

---

### Bug #8

- **Feature/Page Affected:** Producers page
- **Symptom (Plain English):** The Producers screen could keep refetching on every render, which made it unstable and noisy.
- **Fix Summary (Plain English):** I removed the unconditional fetch effect and only load the list when it is empty.
- **Code/Technical Details:** Updated [client/src/pages/producer/Producer.jsx](client/src/pages/producer/Producer.jsx).

---

### Bug #9

- **Feature/Page Affected:** Seed data and stored media URLs
- **Symptom (Plain English):** Some seeded images still pointed at a dead local port, so posters and profile images could not load.
- **Fix Summary (Plain English):** I normalized the live database rows and seed dataset to use the working local backend host and upload path.
- **Code/Technical Details:** Updated [imdb_clone_seeder.json](imdb_clone_seeder.json).

---

_(Copy and paste the template block above for additional bugs)_
