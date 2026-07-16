HOW TO ADD PHOTOS TO A REVIEW
=============================

1. Make a folder here named after the restaurant's slug (the
   "slug" is the short id in data.js, e.g. "kochi", "jua").

     photos/kochi/
     photos/jua/

2. Put your photos inside, named simply and in order:

     photos/kochi/kochi-01.jpg
     photos/kochi/kochi-02.jpg
     ...

3. List them in reviews.js under that slug, e.g.:

     photos: [
       { src: "photos/kochi/kochi-01.jpg", caption: "Opening course" },
       { src: "photos/kochi/kochi-02.jpg", caption: "" },
     ]

   (caption is optional — leave it "" for no caption.)


RESIZE FIRST — IMPORTANT
------------------------
A photo straight off your phone is ~5 MB and will make the page
load slowly. Resize to about 1600-1800px on the long edge and
save as JPEG (~80% quality). It'll look identical on screen but
be ~15x smaller (~300 KB). Your site stays fast and light.

(On Windows: open in Photos > ... > Resize. Or use any free
online resizer / Squoosh.app.)
