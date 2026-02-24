# Required assets (images & media)

Place these files under **`public/assets/`** so images and media load correctly. Paths in the app are like `/assets/...`, which map to `public/assets/...`.

## Root of `public/assets/`

| File | Used in |
|------|--------|
| `background.mp4` | Hero / full-screen background video |
| `code2.png` | What I do section (code editor image) |
| `hand.PNG` | Get in touch section (hand graphic) |
| `icon.png` | Favicon / app icon (metadata) |
| `thumbnail.png` | Social / OG image (metadata) |

## Pexels / photos (landing, testimonials, work)

| File | Used in |
|------|--------|
| `pexels-leeloothefirst-7818239.jpg` | Hero/parallax, testimonials |
| `pexels-cottonbro-8721339.jpg` | Parallax, testimonials, work Before/After |
| `pexels-cottonbro-8721318.jpg` | Parallax, testimonials, work Before/After |
| `lennon-cheng-yAeUPmbyS-0-unsplash.jpg` | Full-screen transition |
| `valentin-beauvais-yVUQlyRlJSw-unsplash.jpg` | Full-screen transition |
| `joel-fulgencio-01fAtHwYqo0-unsplash.jpg` | Full-screen transition |
| `pexels-soheilkmp-27413969.jpg` | About page hero |

## Project thumbnails – `public/assets/projectThumbnail/` or `public/projectThumbnail/`

If your work/featured-project images are in **`public/projectThumbnail/`** (without `assets`), they will still load: a rewrite in `next.config.ts` serves them for requests to `/assets/projectThumbnail/*`. Prefer putting them in **`public/assets/projectThumbnail/`** to match the code paths.

| File | Used in |
|------|--------|
| `hall.jpg` | Projects / work |
| `moon.jpg` | Projects / work |
| `old_portfolio.jpg` | Projects / work |
| `todo.jpg` | Projects / work |
| `tools.jpg` | Projects / work |
| `fade.png` | Projects (EN) |
| `hairmaster.jpg` | Projects (EN) |
| `trendz.jpeg` | Projects (EN) |

## Quick fix

- **Testimonials:** If testimonial images are missing, the app now shows the author’s initial in a circle instead of a broken image.
- **All other images:** Add the files above into `public/assets/` (and `public/assets/projectThumbnail/`) so they load. Get the Pexels/Unsplash files from the original sources or replace paths in `contents/landingContents.ts`, `contents/workContents.ts`, and `contents/AboutContents.ts` with your own asset URLs.
