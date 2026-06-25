# abdullahsaad5.github.io

Personal site. Single static `index.html`, no build step, no dependencies, no toolchain.
Serves at https://abdullahsaad5.github.io via GitHub Pages.

## Files
- `index.html` — the whole site (inline CSS + JS, data-URI favicon). Edit this.
- `.nojekyll` — tells Pages to serve files as-is (no Jekyll). **Do not delete.**
- `.gitignore` — ignores `preview.png` and `.DS_Store`.
- `README.md` — this file.

## Deploy
Pages: Source = deploy from branch, `main` (root). Live ~1 min after push.

```bash
git add index.html
git commit -m "feat: <what changed>"
git push origin main
```

**Push must use SSH.** The `gh` CLI here is authed as the work account (`abdullahsaaddtc`),
which has no write access to this personal repo, so an HTTPS push 403s. The remote is set to
SSH and the personal account's key (`AbdullahSaad5`) is what authorizes the push:

```
git@github.com:AbdullahSaad5/AbdullahSaad5.github.io.git
```

## Edit
Everything is in `index.html`. Swap the bio, experience, projects, and contact links inline.

**Adding a writing post:** in the `#writing` section, copy an existing `<a class="post rv">`
card and update the dev.to URL, the `cover_image` (the dev.to S3 url), the `mono` tag line,
the `<h3>` title, and the blurb. Newest post goes on top.

## Later
When the Next.js/MDX blog is ready, it can replace this file or live at a subpath.
