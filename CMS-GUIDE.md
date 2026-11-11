# Updating averylawrence.com with the CMS

A reference for adding and editing projects, comments, and news posts without touching code.

- **Admin page:** https://averylawrence.com/admin
- **This guide online:** https://github.com/averymlawrence/averylawrence-website/blob/main/CMS-GUIDE.md

---

## 1. Sign in

1. Go to **https://averylawrence.com/admin**.
2. Click **Sign In Using Access Token** (not "Sign In with GitHub" — that button isn't set up).
3. Paste your GitHub token and continue. The browser remembers it, so you normally only do this once per browser.

### If the token has expired, or you're on a new computer

Tokens expire (yours was created with an expiration date). To make a new one:

1. Log in to GitHub as **averymlawrence** (not `aaavery-aaavery` — that account doesn't own the site).
2. Go to https://github.com/settings/personal-access-tokens/new
3. **Token name:** anything, e.g. `averylawrence-cms`. **Expiration:** your choice.
4. **Resource owner:** `averymlawrence`.
5. **Repository access:** *Only select repositories* → `averylawrence-website`.
6. **Permissions → Repository permissions → Contents:** *Read and write*.
7. **Generate token**, copy it, and keep it in your password manager. GitHub shows it only once.

---

## 2. How saving works

- Every **Save** in the CMS is published immediately. There is no draft step.
- The live site rebuilds itself after each save and updates in about **2–3 minutes**.
- To work on something without showing it, set a project's **Status** to `coming-soon` (see below). The project is hidden from the site completely — no bar, no page — until you switch it to `ready`.
- If the site hasn't changed after 5 minutes, see [Troubleshooting](#9-troubleshooting).

---

## 3. Add a new project

1. In the left sidebar click **Projects**, then **New** (top right).
2. Fill in the fields:

| Field | What to enter |
|---|---|
| **Title** | The project name. This is the text on the home page bar and the page heading. It also becomes the web address (`/projects/your-title`). |
| **Order** | A number that sorts the home page list, smallest first. Decimals work: `0.5` puts a project above the current first one, `4.5` puts it between 4 and 5. Colors are assigned by position automatically, so the rainbow always runs blue to purple across whatever is showing. The first four visible projects sit above the INFO bar. |
| **Tags** | One or more of performance / animation / video / installation / photo. These drive the "filter by tag" menu. |
| **Status** | `coming-soon` keeps the project hidden while you load content; `ready` puts its bar on the home page. |
| **Hue override** | Leave blank. (Only for hand-picking a bar color: a number 0–360.) |
| **Year** | e.g. `2024` or `2019–2023`. Year, Medium, Size or duration, and Shown at make up the facts line at the top of the project page. All four are optional; blank ones don't appear. |
| **Medium** | e.g. `Wood, rope, metal, electric motor`. |
| **Size or duration** | e.g. `4 × 5 ft` or `6 min 45 sec`. |
| **Shown at** | Click **Add** once per exhibition or screening, e.g. `Novella Gallery, Philadelphia, PA (2023)`. |
| **Overview** | The project description. Shown beside the images on desktop, above them on phones. Blank lines make new paragraphs. |
| **Who helped** | Click **Add** once per person. Free text, e.g. `Ross McDermott — direction, camera, editing`. |
| **Video path / Video caption** | Leave blank. Video can't be uploaded through the CMS yet — ask Claude. |
| **Images** | See below. |
| **Comments** | See [section 5](#5-the-fake-comments-section). |

3. Click **Save**.

### Adding images

For each image, under **Images** click **Add**, then:

- **Image** — choose the file from your computer.
- **Alt text** — the short version (about 20 words). Required.
- **Image description** — the long version (about 200 words). Optional; it appears under the "image description" toggle on the page.

Drag the items to reorder them. The order here is the order on the page.

**Preparing image files**

- JPG, PNG, or GIF.
- About **2400 px on the long side** is plenty. The site makes smaller versions for phones on its own.
- Keep each file under roughly **3 MB**. Very large files slow down every future update.
- Use simple file names without spaces, e.g. `Lawrence_Avery_Bucket-Time_WEB.1.jpg`.

---

## 4. Edit an existing project

1. **Projects** → click the project.
2. Change any field, add/remove/reorder images, then **Save**.

Good to know:

- Nine projects are loaded but hidden as `coming-soon` (Can't Shake It, Moving a Tree, Arranging Suitcases, ourhole.com, Dancing, Soft Belly, Head Shot, Live in Santa Clarita, Live in Jacksonville). To publish one: add images and overview, set **Status** to `ready`, Save.
- The first image in the list is also the picture that shows when you share the project's link (text message, email, Slack).
- Changing the **Title** changes the bar text and heading. The web address stays the same.
- **Deleting** a project removes its page and its images from the site.

---

## 5. The fake comments section

Each project can have a comment thread at the bottom of its page. It only appears when the project has at least one comment. You write every comment yourself.

Under **Comments** click **Add** for each comment:

| Field | What to enter |
|---|---|
| **Commenter name** | The fake username, e.g. `George_Dad`. The colored avatar circle uses its first letter. |
| **Comment** | The text. Line breaks are kept. |
| **Thumbs up / Thumbs down** | Optional numbers. Leave both blank to show no vote counts. |
| **When** | Optional free text, e.g. `3 years ago`. |
| **Is a reply** | Turn on to indent the comment under the one above it. |

Drag to reorder. The heading ("7 Comments") counts them automatically.

---

## 6. Add a news post

1. **News** → **New**.
2. **Title** and **Date** (posts are listed newest first on `/news`).
3. **Images** — optional, same three fields as project images.
4. **Body** — the writing. The toolbar gives you bold, italics, links, headings, and lists.
5. **Save**.

---

## 7. Add student work (teaching)

The teaching page lists **courses**. Each course page shows **sets of student work**, grouped by assignment, newest term first. A course only appears on the site once it has at least one set with work in it.

**Add a course (once per course):** **Courses** → **New** → title, school, years, order, description → **Save**.

**Add a set of student work (once per assignment per term):**

1. **Student work** → **New**.
2. **Course** — pick it from the list.
3. **Assignment** — e.g. `Walk cycle`. Use exactly the same name each term so the terms group under one heading.
4. **Term** — e.g. `Fall 2025`. **Sort number** — the year, plus `.5` for fall (`2025.5`).
5. Under **Works**, click **Add** per student:
   - **Student** — first name and last initial, e.g. `Isha B.`
   - **Vimeo or YouTube link** — for animation and video. Paste the ordinary page link; unlisted videos work.
   - **Image** — for still work, instead of a link.
   - **Title** and **Alt text** — optional.
6. **Save**.

Video *files* (like the looping Penn posters) can't be uploaded here — ask Claude.

---

## 8. What the CMS doesn't cover

Ask Claude Code (open the `AveryLawrence-Website` folder) for:

- The INFO page (bio, statement, headshot)
- The resumes/statements, project management, bloopers, and shop pages
- Video files
- Anything about design: colors, bar sizes, fonts, layout
- Adding a new tag to the filter list

---

## 9. Troubleshooting

**The site didn't update.**
Open https://github.com/averymlawrence/averylawrence-website/actions. Each save appears as a run named "Deploy site".
- Yellow dot: still building. Wait.
- Green check: it's live. Hard-refresh the page (Cmd-Shift-R).
- Red X: the build failed and the site is still showing the previous version — nothing is broken for visitors. The usual cause is an image entry with no file or no alt text. Fix it in the CMS and save again, or ask Claude to look at the failed run.

**"Sign in" stopped working.**
The token expired. Make a new one (section 1).

**I saved something by mistake.**
Edit it back and save again. Every save is also recorded at https://github.com/averymlawrence/averylawrence-website/commits/main, so anything can be recovered — ask Claude to restore an earlier version.

**I want to try something without risk.**
Make a News post titled "test", save, look at it on the site, then delete it.
