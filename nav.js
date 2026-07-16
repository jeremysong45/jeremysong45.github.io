/* ============================================================
   nav.js — ONE navbar for every page on the site.
 
   On any page, replace the whole <nav>...</nav> block AND the
   active-link <script> at the bottom with just this one line
   (put it right after <body>):
 
       <script src="nav.js"></script>
 
   To add or rename a page in the menu, edit NAV_LINKS below —
   once — and every page updates automatically.
   ============================================================ */
 
/* Set the saved / system-preferred color scheme ASAP, before the
   page paints, so there's no flash of the wrong theme. */
(function initTheme() {
  try {
    const saved = localStorage.getItem("theme");
    const dark = saved
      ? saved === "dark"
      : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
  } catch (e) {}
})();

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

/* ============================================================
   Moon / sun dark-mode toggle — added to every page.
   Moon shows in light mode (click to go dark); sun shows in
   dark mode (click to go light). Choice is remembered.
   ============================================================ */
(function buildThemeToggle() {
  const MOON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>';

  const btn = document.createElement("button");
  btn.className = "theme-toggle";
  btn.type = "button";

  const isDark = () =>
    document.documentElement.getAttribute("data-theme") === "dark";

  function apply(dark) {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    btn.innerHTML = dark ? SUN : MOON;
    const label = dark ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  apply(isDark());
  btn.addEventListener("click", () => apply(!isDark()));
  document.body.appendChild(btn);
})();