/* ============================================================
   data.js — every restaurant on your site lives HERE, and
   nowhere else. restaurants.html builds its whole page from
   this list: country sections, counts, stars, highlights.

   To add a restaurant: copy any block, paste, edit. Done.

   Fields:
     name    — the restaurant
     city    — shown in the first column
     country — rows are grouped under this heading
     stars   — Michelin stars (0, 1, 2, or 3). 0 shows the
               blank placeholder like Valhalla does now.
     score   — your rating (the number shown before "Review")
     review  — path to your review page, e.g.
               "reviews/kochi.html". Use null if you haven't
               written it yet: the row still appears, but
               without the green highlight or a link.
   ============================================================ */

const LAST_UPDATED = "May 2025";   // shown under the intro

const RESTAURANTS = [
  {
    name: "Renhe Restaurant",
    city: "Shanghai",
    country: "China",
    stars: 1,
    score: 17,
    review: "reviews/renhe/renhe.html",
  },
  {
    name: "Carino",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: 90,
    review: "reviews/steirereck.html",
  },
  {
    name: "Elske",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: 83,
    review: "reviews/steirereck.html",
  },
  {
    name: "Valhalla",
    city: "Chicago",
    country: "United States",
    stars: 0,
    score: 95,
    review: "reviews/steirereck.html",
  },
  {
    name: "Jua",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 93,
    review: "reviews/amador.html",
  },
  {
    name: "Kochi",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 81,
    review: "reviews/steirereck.html",
  },
  {
    name: "Oxomoco",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 85,
    review: "reviews/steirereck.html",
  },
];