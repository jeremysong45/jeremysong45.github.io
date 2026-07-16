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
     dateVisited — when you went, as "YYYY-MM" or "YYYY-MM-DD"
               (e.g. "2024-07"). Shown in the Date column and
               used to order restaurants within a city. Omit for
               upcoming places.
     review  — true once you've written the review (adds the
               highlight + a link to review.html?r=<slug>).
               Leave false until then: the row still appears,
               just without the highlight or link.
     upcoming — true for places you plan to visit but haven't
               yet. Shows the row muted with an "Upcoming" tag
               instead of a score/link. Omit for places you've
               actually been.

   To publish a review: (1) drop photos in photos/<slug>/,
   (2) add an entry for <slug> in reviews.js, (3) flip
   review to true here. That's it — no HTML to edit.
   ============================================================ */

const LAST_UPDATED = "July 2026";   // shown under the intro

const RESTAURANTS = [
  {
    name: "Renhe Restaurant",
    slug: "renhe",
    city: "Shanghai",
    country: "China",
    stars: 1,
    score: 17,
    dateVisited: "2024-08-23",
    review: true,
  },
  {
    name: "Carino",
    slug: "carino",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: 90,
    dateVisited: "2025-04-19",
    review: true,
  },
  {
    name: "Elske",
    slug: "elske",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: 83,
    dateVisited: "2025-02-06",
    review: true,
  },
  {
    name: "Valhalla",
    slug: "valhalla",
    city: "Chicago",
    country: "United States",
    stars: 0,
    score: 95,
    dateVisited: "2025-03-01",
    review: true,
  },
  {
    name: "Jua",
    slug: "jua",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: 93,
    dateVisited: "2024-07-31",
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
    dateVisited: "2024-11-27",
    review: true,
  },
  {
    name: "Central",
    slug: "central",
    city: "Lima",
    country: "Peru",
    stars: 0,
    score: null,
    dateVisited: "2025-11-24",
    review: true,
  },
  {
    name: "Mérito",
    slug: "merito",
    city: "Lima",
    country: "Peru",
    stars: 0,
    score: null,
    dateVisited: "2025-11-25",
    review: true,
  },
  {
    name: "Bōm",
    slug: "bom",
    city: "New York City",
    country: "United States",
    stars: 1,
    score: null,
    dateVisited: "2025-08-30",
    review: true,
  },
  {
    name: "Kyōten Next Door",
    slug: "kyoten-next-door",
    city: "Chicago",
    country: "United States",
    stars: 0,
    score: null,
    dateVisited: "2026-04-14",
    review: true,
  },
  {
    name: "Boka",
    slug: "boka",
    city: "Chicago",
    country: "United States",
    stars: 1,
    score: null,
    dateVisited: "2026-02-06",
    review: true,
  },
  {
    name: "Kyubey",
    slug: "kyubey",
    city: "Tokyo",
    country: "Japan",
    stars: 0,
    score: null,
    review: false,
    upcoming: true,
  },
  {
    name: "Yakiniku Jumbo Hanare",
    slug: "yakiniku-jumbo-hanare",
    city: "Tokyo",
    country: "Japan",
    stars: 0,
    score: null,
    review: false,
    upcoming: true,
  },
  {
    name: "Zen",
    slug: "zen",
    city: "Singapore",
    country: "Singapore",
    stars: 3,
    score: null,
    review: false,
    upcoming: true,
  },
  {
    name: "Albi",
    slug: "albi",
    city: "Washington, D.C.",
    country: "United States",
    stars: 1,
    score: null,
    review: false,
    upcoming: true,
  },
];