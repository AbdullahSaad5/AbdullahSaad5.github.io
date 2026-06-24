# abdullahsaad5.github.io

Personal site. Single static `index.html`, no build step.

## Deploy
This repo serves at https://abdullahsaad5.github.io via GitHub Pages.

```bash
git add index.html .nojekyll README.md
git commit -m "feat: portfolio landing page"
git push origin main   # or master
```
Pages settings: Source = deploy from branch, branch = main (root). Live in ~1 min.

## Edit
Everything is in `index.html` (inline CSS). No dependencies, no toolchain.
Swap the featured post, bio, and contact links as needed.

## Later
When the Next.js/MDX blog is ready, it can replace this file or live at a subpath.
