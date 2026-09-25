# Papawin Namchue — Portfolio

This is a static HTML/CSS/JavaScript portfolio. `index.html` is the main page, so GitHub Pages opens it without adding a filename to the URL. The previous `portfolio_website.html` path redirects to the main page. All paths are relative, so the site also works under a project URL such as `username.github.io/repository/`.

## Files

- `index.html` — page content and semantic structure; GitHub Pages entry point
- `portfolio_website.html` — redirect from the previous file path
- `assets/css/styles.css` — layout, responsive styles, and animations
- `assets/js/main.js` — interactions, scroll effects, and image lightbox
- `assets/images/` — images grouped by project/category

The original `Profile/`, `Project_Mock_up/`, and two root iPhone images are retained locally but ignored by Git. The page uses the categorized copies in `assets/images/` only. Do not upload those original folders manually if you want the published repository to stay tidy.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder, for example `python -m http.server 8765`, and visit `http://localhost:8765/`. Test links and full-size image previews before publishing.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder with Git (the `.gitignore` excludes the local originals).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your published branch (commonly `main`) and **`/(root)`**, then save.

See GitHub's [publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) if the repository uses a different branch or deployment workflow.

GitHub Pages serves static HTML, CSS, JavaScript, and images publicly. Visitors can inspect or download any files their browser needs to render the site; browser developer tools and View Page Source cannot be reliably disabled. Keep passwords, API keys, private drafts, and other sensitive data out of this repository and out of front-end code.
