# Haemophilia Society of Jamaica (HSJ) website

Static marketing and education site for the Haemophilia Society of Jamaica. It is the
society's hub for awareness, outreach and donations. Built with React, Vite and
Tailwind CSS v4. No server, no database; the whole site ships as static files.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Pages

- **Home** - mission hero, what HSJ does, plain-language explainers for the three
  conditions (haemophilia A, haemophilia B, von Willebrand disease), and the
  "300 drops" stat section.
- **About Us** - the society's story and mission, its link to the World Federation
  of Hemophilia, and upcoming events.
- **Meet the Members** - member grid.
- **Get in Contact** - email, WhatsApp click-to-chat, socials and a contact form.
- **Donate** - bank transfer details and money app options.

## Where to edit content

Anything that changes regularly lives in `src/data/`, one file per collection:

| File | Controls |
| --- | --- |
| `src/data/site.js` | Contact email, phone, WhatsApp number, socials, donation details |
| `src/data/members.js` | Member cards (name, role, photo, bio) |
| `src/data/events.js` | Event cards on the About page |
| `src/data/conditions.js` | The three condition explainers on the Home page |
| `src/data/awareness.js` | Support tips, treatment overview and quick facts on the Home page |

Theme tokens (colors, fonts, radius) are centralized in the `@theme` block of
`src/index.css`. Change brand colors there and nowhere else.

## Placeholder vs real

Real, sourced content:

- Condition explainers, treatment overview and awareness facts, adapted from
  CDC pages (cdc.gov/hemophilia and cdc.gov/von-willebrand), the WFH, and NBDF
  first aid guidance (bleeding.org).
- World Federation of Hemophilia facts and the Treatment for All vision (wfh.org).
- The "around 300 Jamaicans" estimate, reported by the Jamaica Information Service.
- World Haemophilia Day falling on April 17.

Placeholder content, clearly marked in the data files and awaiting HSJ's real details:

- All contact channels: email, phone, WhatsApp number, social links (`src/data/site.js`).
- All donation details: bank account and money app handles (`src/data/site.js`).
- Every member profile (`src/data/members.js`).
- Every event listing (`src/data/events.js`).
- The founding story on About Us, marked with a `{{ VERIFY: ... }}` note.

The contact form is presentational only. The submit handler in
`src/pages/contact.jsx` is stubbed; swap its body for a real submission (form
service or backend) without touching the markup.

## Conventions

- Animations are plain CSS transitions plus a small IntersectionObserver wrapper
  (`src/components/Reveal.jsx`). No animation library. `prefers-reduced-motion`
  disables all movement.
- Keep new colors and spacing on the tokens in `src/index.css`.
- Cite a recognized source (WFH, CDC, MedlinePlus, NBDF) for any new health claim.
