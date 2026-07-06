import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import Drop from './Drop.jsx';
import { site } from '../data/site.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/members', label: 'Meet the Members' },
  { to: '/contact', label: 'Get in Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { pathname } = useLocation();

  const linkRefs = useRef([]);
  const markerRef = useRef(null);
  const progressRef = useRef(null);

  const activeIndex = links.findIndex(
    (l) => (l.to === '/' ? pathname === '/' : pathname.startsWith(l.to))
  );

  // The link the droplet marker should currently sit under: whatever you're
  // pointing at, otherwise the page you're on.
  const focusIndex = hovered ?? activeIndex;

  const moveMarker = useCallback((index) => {
    const marker = markerRef.current;
    const el = linkRefs.current[index];
    if (!marker) return;
    if (index < 0 || !el) {
      marker.dataset.show = 'false';
      return;
    }
    marker.style.setProperty('--x', `${el.offsetLeft}px`);
    marker.style.setProperty('--w', `${el.offsetWidth}px`);
    marker.dataset.show = 'true';
  }, []);

  // Position the marker under the focused link, and re-measure on resize.
  useLayoutEffect(() => {
    moveMarker(focusIndex);
  }, [focusIndex, moveMarker]);

  useEffect(() => {
    const onResize = () => moveMarker(focusIndex);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [focusIndex, moveMarker]);

  // The display font loads after first paint and changes link widths, so
  // re-measure once it's ready to keep the marker aligned.
  useEffect(() => {
    if (!document.fonts) return;
    document.fonts.ready.then(() => moveMarker(focusIndex));
  }, [focusIndex, moveMarker]);

  // Condense on scroll + drive the progress fill. Updated on rAF so the
  // scroll handler stays cheap and never thrashes layout.
  const updateBars = useCallback(() => {
    const y = window.scrollY;
    setScrolled((prev) => (prev !== y > 8 ? y > 8 : prev));
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? Math.min(y / max, 1) : 0;
    if (progressRef.current) progressRef.current.style.setProperty('--p', p);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateBars();
          ticking = false;
        });
      }
    };
    // Defer the first read a frame so we don't setState during the effect body.
    const raf = requestAnimationFrame(updateBars);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', updateBars);
    // Content that loads or reveals late changes the page height, so keep the
    // fill honest by re-measuring whenever the document resizes.
    const ro = new ResizeObserver(updateBars);
    ro.observe(document.body);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', updateBars);
      ro.disconnect();
    };
  }, [updateBars]);

  // New page means a new height and a reset scroll position; refresh the fill.
  useEffect(() => {
    const raf = requestAnimationFrame(updateBars);
    return () => cancelAnimationFrame(raf);
  }, [pathname, updateBars]);

  const linkColor = (i) =>
    i === focusIndex ? 'text-blood' : 'text-ink-soft hover:text-blood';

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_6px_24px_-12px_rgba(24,11,14,0.35)]' : ''
      }`}
    >
      <nav
        aria-label="Main"
        className={`max-w-7xl mx-auto flex items-center justify-between gap-4 px-5 md:px-10 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        {/* Logo lockup */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 shrink-0"
        >
          <img
            src={logo}
            alt=""
            className={`w-auto object-contain transition-all duration-300 rounded-full group-hover:rotate-[-6deg] group-hover:scale-105 ${
              scrolled ? 'h-9' : 'h-11'
            }`}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-extrabold tracking-tight text-blood">
              {site.shortName}
            </span>
            <span
              className={`text-[10px] uppercase font-bold text-ink-soft tracking-widest overflow-hidden transition-all duration-300 hidden sm:block ${
                scrolled ? 'max-h-0 opacity-0' : 'max-h-4 opacity-100'
              }`}
            >
              Haemophilia Society of Jamaica
            </span>
          </span>
        </Link>

        {/* Desktop links with the sliding droplet marker */}
        <div
          className="relative hidden md:flex items-center gap-1"
          onMouseLeave={() => setHovered(null)}
        >
          <span ref={markerRef} className="nav-marker" aria-hidden="true">
            <span className="nav-marker-pill" />
            <Drop className="nav-marker-drop" />
          </span>

          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              ref={(el) => (linkRefs.current[i] = el)}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className={`relative z-10 px-3.5 py-2 rounded-full font-sans text-xs font-bold tracking-wide transition-colors ${linkColor(
                i
              )}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Donate + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/donate"
            className="btn btn-blood !px-5 !py-2.5 text-xs hover:-translate-y-0.5"
          >
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="p-2.5 rounded-lg border border-line text-blood hover:bg-blush transition-colors md:hidden"
          >
            <span className="ham" data-open={open} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Scroll progress line over a faint flag thread */}
      <div className="absolute left-0 right-0 bottom-0 h-[3px] overflow-hidden" aria-hidden="true">
        <div className="flag-edge opacity-30" />
        <div ref={progressRef} className="nav-progress-fill absolute inset-0 bg-blood" />
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-paper border-t border-line px-5 py-3"
        >
          {[...links, { to: '/donate', label: 'Donate' }].map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              style={{ '--d': `${i * 55}ms` }}
              className={({ isActive }) =>
                `nav-mobile-item flex items-center gap-3 py-3 text-sm font-bold border-b border-line last:border-0 ${
                  isActive ? 'text-blood' : 'text-ink-soft'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Drop
                    className={`w-3.5 h-3.5 shrink-0 transition-opacity ${
                      isActive ? 'text-blood opacity-100' : 'opacity-25'
                    }`}
                  />
                  {l.label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
