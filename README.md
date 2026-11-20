# Pure Picks website

A static website for **Pure Picks TCM Herbal Blends**. It is a redesign of the original Google Sites page, with the same pages and copy. There is no build step: plain HTML, one stylesheet and one small script.

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/our-story/` | Our Story |
| `/tea-collections/` | Tea Collections overview |
| `/tea-collections/manuka-tea/` | Manuka Tea |
| `/tea-collections/lavender-tea/` | Lavender Tea |
| `/tea-collections/rosemary-tea/` | Rosemary Tea |
| `/stockists/` | Stockists by region |
| `/consultation/` | Consultation and contact details |

## Files

- `assets/css/styles.css`: all styles. Colour and type tokens are at the top of the file.
- `assets/js/main.js`: mobile menu toggle and the footer year.
- `assets/img/`: botanical SVG art, logo mark and favicon. Product photos can be added here later.

## Preview locally

Open `index.html` in a browser, or run this from the site folder and visit http://localhost:8000:

```bash
python3 -m http.server 8000
```

## Publish with GitHub Pages

1. In the repository, go to Settings → Pages.
2. Under "Build and deployment", choose "Deploy from a branch", then `main` and `/ (root)`.
3. Save. The site is served at `https://wudiphysioacu.github.io/manablends-website/`.

GitHub Pages needs a public repository on a free account.

When a custom domain is ready, add the domain under Settings → Pages and commit a `CNAME` file in the root that contains only the domain.
