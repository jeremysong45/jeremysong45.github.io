/* ============================================================
   data.js — every restaurant on your site lives HERE, and
   nowhere else. restaurants.html builds its whole page from
   this list: country sections, counts, stars, highlights.

   To add a restaurant: copy any block, paste, edit. Done.

   Fields:
     name    — the restaurant
     slug    — short id used for the review URL + photo folder,
               e.g. "kochi" -> review.html?r=kochi and
               photos/kochi/. Lowercase, no spaces.
     city    — shown in the first column
     country — rows are grouped under this heading
     stars   — Michelin stars (0, 1, 2, or 3). 0 shows the
               blank placeholder like Valhalla does now.
     score   — your rating (the number shown before "Review")
     review  — true once you've written the review (adds the
               highlight + a link to review.html?r=<slug>).
               Leave false until then: the row still appears,
               just without the highlight or link.

   To publish a review: (1) drop photos in photos/<slug>/,
   (2) add an entry for <slug> in reviews.js, (3) flip
   review to true here. That's it — no HTML to edit.
   ============================================================ */

const LAST_UPDATED = "May 2025";   // shown under the intro

const RESTAURANTS = [
  {
    name: "Renhe Restaurant",
    slug: "renhe",
    city: "Shanghai",
    country: "China",
    stars: 1,
    score: 17,
    review: true,
  },
  {
    name: "Carino",
    slug: "carino",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: 90,
    review: true,
  },
  {
    name: "Elske",
    slug: "elske",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: 83,
    review: true,
  },
  {
    name: "Valhalla",
    slug: "valhalla",
    city: "Chicago",
    country: "United States",
    stars: 0,
    score: 95,
    review: true,
  },
  {
    name: "Jua",
    slug: "jua",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 93,
    review: true,
  },
  {
    name: "Kochi",
    slug: "kochi",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 81,
    review: true,
  },
  {
    name: "Oxomoco",
    slug: "oxomoco",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 85,
    review: true,
  },
];