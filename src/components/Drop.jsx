// Small droplet SVG used as the brand motif across the site.
export default function Drop({ className = 'w-5 h-5', ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...rest}>
      <path d="M12 2.5c3.4 4.6 7 8.6 7 12.5a7 7 0 1 1-14 0c0-3.9 3.6-7.9 7-12.5Z" />
    </svg>
  );
}
