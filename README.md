# Physics Learning Hub — 5th Year

A free, responsive, static website for GitHub Pages. No build step, database, accounts or paid services required.

## View locally

Open `index.html` in a browser. All pages and filters run locally. Internet access is only required for the external video search link.

## Publish to GitHub Pages

1. Create a new GitHub repository (e.g. `physics-learning-hub`).
2. Upload **the contents of this folder** to the repository root, including `.github/workflows/deploy.yml`.
3. In repository **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
4. Commit to the `main` branch. The included workflow publishes the site. Check the Actions tab for progress.
5. Open the Pages URL shown in Settings → Pages (usually `https://USERNAME.github.io/REPOSITORY/`).

## Teacher-friendly lesson editor

1. Open `teacher-editor.html` in your browser.
2. Enter the date, topic, title, learning intentions, summary, homework, due date, and catch-up instructions.
3. Attach existing library resources, add new http(s) video/website links, or choose files and images. New resources are added to the Resource Library automatically.
4. Click **Generate lesson entry**, check the preview, and **Download updated data.js**.
5. If you attached files or images, rename each original file to the exact filename shown in the editor and upload it into an `uploads/` directory in GitHub.
6. On GitHub, edit `data.js` and replace its entire contents with the downloaded file's contents. Commit to publish.

The editor prepares the file locally and does not publish automatically. Always reload the editor from the latest published site before editing so you don't overwrite other updates.

**Security:** The editor page itself is public when hosted on GitHub Pages, but visitors cannot change your site without GitHub repository write access. Do not enter student personal data.

## Update the class log in about 3 minutes

1. In GitHub, open `data.js` and click **Edit** (pencil icon).
2. Copy an existing lesson object from the `lessons: [` array, paste it **above** the others, and edit its fields. Preserve commas and quotation marks.
3. Give each lesson a unique `id` (for example `lesson-2026-11-03-a`), use `YYYY-MM-DD` dates, and set `example:false` for real lessons.
4. Update `title`, `topic`, `summary`, `intentions`, `activities`, `homework`, `due`, `catchup`, and `resources`.
5. Click **Commit changes**. The site republishes automatically after GitHub Actions finishes.

**Tip:** The date controls the order automatically. Use exactly one of the topic names listed in `topics` to ensure the lesson appears in the correct topic library. You can add a lesson with `resources:[]` when you have no links ready yet.

## Add a resource

1. Upload a PDF or HTML file into `resources/` (or choose a trusted external link).
2. Add a new item to `resources` in `data.js`, with a unique `id`, `title`, `topic`, `type`, `description`, and `url`.
3. Add its `id` to a lesson's `resources` array if you want the link on that lesson.

## What is included

- Homepage with most recent lesson and homework
- Searchable chronological class log with topic filter
- Catch-up instructions for every lesson
- Topic-based revision archive
- Resource library with search and type filter
- Skills Centre (maths, experiments, scientific understanding, research)
- Sample original notes, graphing guide, mini-test and printable investigation template
- Mobile navigation and accessible semantic markup

## Important before sharing

- **All sample lessons are fictional examples** and are visibly labelled. Replace them with your own teaching record.
- Replace the placeholder YouTube search with a specific reviewed video.
- Never publish student names, grades, photos, identifying work, or private materials without appropriate permissions.
- Only upload materials you have rights to distribute; check copyright and exam-paper permissions.
- GitHub Pages is public by default. It is not a private learning management system.
- This is a starter resource, not an official curriculum or examination specification. Align topics and investigations with your school's current course requirements.

## Suggested next improvement

Add a password-protected **teacher editing interface** backed by a suitable authentication and publishing service, or a GitHub Issue form plus a controlled publishing workflow. Do not put a GitHub personal access token in public browser code.

**Attachments:** The editor does not upload files directly to GitHub. New website/video links work once `data.js` is published. Files and images also require uploading their originals into `uploads/` using the exact names listed in the preview. The editor does not store file contents inside `data.js`.

## Notebook-inspired visual redesign
The student pages and teacher editor now use squared-paper backgrounds, blue-ink borders, red margin details, and handwritten-style headings inspired by the 2628Physics site. No lesson data or attachment functionality was intentionally changed. Fonts use Google Fonts when online, with local fallbacks.
