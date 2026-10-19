# Physics Learning Hub — 5th Year

A colourful, mobile-friendly static website for GitHub Pages. No accounts, server, database, npm or build step required.

## Publish on GitHub Pages

1. Create a **public** GitHub repository, e.g. `physics-learning-hub`.
2. Upload `index.html`, `styles.css`, `app.js` and the **data** folder (including `content.js`) to the repository root. Keep the same folder structure.
3. Open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Wait for GitHub Pages to publish. The URL is usually `https://YOUR-USERNAME.github.io/physics-learning-hub/`.
5. Open the site on a phone as well as a laptop to test it.

## Update after a lesson (2–5 minutes)

1. In GitHub, open `data/content.js`, click the pencil/edit icon.
2. Copy one existing lesson object inside `lessons: [ ... ]` and paste it at the top of the list, separated by a comma.
3. Update the `id` (unique), `date` (`YYYY-MM-DD`), `title`, `topic`, `summary`, `learning`, `homework`, `due`, `catchup` and `resources` fields.
4. Change `sample: true` to `sample: false` for real lessons. Do not include student names or sensitive information.
5. Commit the change. GitHub Pages normally updates within a few minutes.

The latest dated lesson appears automatically on the homepage. All lessons appear in date order in the class log and in their matching topic page. Use exactly the same topic spelling as in the `topics` list.

## Add a resource

Add an object to the `resources` list in `data/content.js`, e.g.:

```js
{id:'forces-video', title:'Forces introduction', topic:'Mechanics', type:'Video', url:'https://example.com/video', description:'Short introduction to forces.'},
```

Then include `'forces-video'` in the `resources` array of a lesson to link it. A blank `url` shows a 'coming soon' label, not a broken link. You can store PDFs in a `files/` folder and link to them as `files/my-notes.pdf`.

## Suggested teacher workflow

- After each class: add one lesson with a short summary, exact homework, due date and 2–4 catch-up steps.
- Weekly: add any new notes, investigations or video links.
- After each topic: add a revision guide and a previous test if permission allows.
- Once per term: review outdated links and archive superseded materials.

## Important notes

- **All sample lessons are fictional demonstrations**, not a record of classes taught. Replace them before publishing to students.
- GitHub Pages is public. Never publish personal student data, confidential tests, copyrighted material without permission, or photos without appropriate consent.
- The site uses `data/content.js` rather than fetching JSON, so it works when opened locally as a file as well as on GitHub Pages.
- Skills checkboxes save only in the student's own browser. They are not submitted or synced.
- This is an independent classroom resource; check topic coverage and sequencing against your school's chosen Leaving Certificate Physics specification and teaching plan.

## Files

- `index.html` — page structure
- `styles.css` — colours and responsive layout
- `app.js` — page rendering, search, filters and skill checkboxes
- `data/content.js` — **the file you edit most often**
