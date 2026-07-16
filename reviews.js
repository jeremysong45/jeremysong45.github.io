/* ============================================================
   reviews.js — the write-up + photos for each review.

   review.html reads this. The restaurant's facts (name, city,
   stars, score) come from data.js, so DON'T repeat them here —
   only the review content lives below, keyed by the same slug
   you used in data.js.

   To add a review:
     1) Put resized photos in  photos/<slug>/  (see the naming
        guide in photos/README.txt).
     2) Add an entry below, keyed by <slug>.
     3) In data.js, set that restaurant's  review: true.

   Entry fields:
     date   — when you visited, shown under the title
     body   — array of paragraphs (each string = one paragraph)
     photos — array of { src, caption }. caption is optional.
              Photos appear in the order listed.
   ============================================================ */

const REVIEWS = {
  kochi: {
    date: "July 2021",
    body: [
      "Write your thoughts about Kochi here. Each string in this list becomes its own paragraph.",
      "Add as many paragraphs as you like — just add another line to the list.",
    ],
    photos: [
      // { src: "photos/kochi/kochi-01.jpg", caption: "The opening course" },
      // { src: "photos/kochi/kochi-02.jpg", caption: "Second course" },
    ],
  },

  jua: {
    date: "July 2024",
    body: [
      "Write your thoughts about Jua here.",
      "This is the meal where fine dining finally clicked for you — tell that story.",
    ],
    photos: [
      // { src: "photos/jua/jua-01.jpg", caption: "" },
    ],
  },
};
