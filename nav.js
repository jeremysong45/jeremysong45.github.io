/* ============================================================
   nav.js — ONE navbar for every page on the site.
 
   On any page, replace the whole <nav>...</nav> block AND the
   active-link <script> at the bottom with just this one line
   (put it right after <body>):
 
       <script src="nav.js"></script>
 
   To add or rename a page in the menu, edit NAV_LINKS below —
   once — and every page updates automatically.
   ============================================================ */
 
const NAV_LINKS = [
  { href: "restaurants.html", label: "Restaurant List" },
  {
    label: "About",
    href: "index.html",
    dropdown: [
      { href: "index.html",  label: "About Me" },
      { href: "rating.html", label: "Rating System" },
    ],
  },
];
 
(function buildNav() {
  // Which page are we on? ("" means the site root -> index.html)
  const current = location.pathname.split("/").pop() || "index.html";
  const isActive = (href) => href === current;
 
  const nav = document.createElement("nav");
  nav.className = "navbar";
 
  const center = document.createElement("div");
  center.className = "nav-center";
 
  NAV_LINKS.forEach((item) => {
    if (item.dropdown) {
      // parent link with dropdown menu
      const wrap = document.createElement("div");
      wrap.className = "dropdown";
 
      const parent = document.createElement("a");
      parent.className = "nav-link";
      parent.href = item.href;
      parent.textContent = item.label;
      if (item.dropdown.some((c) => isActive(c.href))) {
        parent.classList.add("active");
      }
      wrap.appendChild(parent);
 
      const menu = document.createElement("div");
      menu.className = "dropdown-content";
      item.dropdown.forEach((child) => {
        const a = document.createElement("a");
        a.className = "nav-link";
        a.href = child.href;
        a.textContent = child.label;
        if (isActive(child.href)) a.classList.add("active");
        menu.appendChild(a);
      });
      wrap.appendChild(menu);
      center.appendChild(wrap);
    } else {
      // simple top-level link
      const a = document.createElement("a");
      a.className = "nav-link";
      a.href = item.href;
      a.textContent = item.label;
      if (isActive(item.href)) a.classList.add("active");
      center.appendChild(a);
    }
  });
 
  nav.appendChild(center);
 
  // Insert the navbar at the very top of the page
  document.body.prepend(nav);
})();