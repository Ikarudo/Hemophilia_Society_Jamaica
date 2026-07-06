// Section eyebrow with the flag thread beside it. Pass light for dark bands.
export default function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p
      className={`eyebrow flex items-center gap-2.5 ${
        light ? '!text-blood-bright' : ''
      } ${className}`}
    >
      <span className="flag-rule shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}
