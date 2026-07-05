import { useRef, useState } from 'react';
import { conditions } from '../data/conditions.js';
import Drop from './Drop.jsx';

// The three conditions as specimen vials. Selecting one fills its glass and
// opens a detail panel. Built on the WAI-ARIA tabs pattern: arrow keys move
// between vials, the panel is the tabpanel.
const bubbles = [
  { left: '30%', delay: '0s' },
  { left: '52%', delay: '1.1s' },
  { left: '68%', delay: '2.2s' },
];

const subLabel = 'text-[0.7rem] font-bold uppercase tracking-[0.15em] text-blood';

export default function ConditionTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const onKeyDown = (e) => {
    const last = conditions.length - 1;
    let next = null;
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = conditions[active];

  return (
    <div>
      {/* Vial selectors */}
      <div
        role="tablist"
        aria-label="The three conditions"
        className="grid grid-cols-3 gap-3 sm:gap-6"
        onKeyDown={onKeyDown}
      >
        {conditions.map((c, i) => (
          <button
            key={c.id}
            ref={(el) => (tabRefs.current[i] = el)}
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${c.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="vial-tab group flex flex-col items-center gap-3 rounded-2xl p-1 focus-visible:outline-none"
          >
            {/* Stopper */}
            <span className="vial-cap w-8 sm:w-10 h-2 rounded-t-md" aria-hidden="true" />
            <span className="vial">
              <span className="vial-liquid" aria-hidden="true">
                {bubbles.map((b) => (
                  <span
                    key={b.left}
                    className="vial-bubble"
                    style={{ left: b.left, animationDelay: b.delay }}
                  />
                ))}
              </span>
              <span className="vial-numeral" aria-hidden="true">
                {c.symbol}
              </span>
            </span>
            <span className="flex flex-col items-center text-center">
              <span
                className={`font-bold text-xs sm:text-sm leading-tight transition-colors ${
                  i === active ? 'text-blood' : 'text-ink group-hover:text-blood'
                }`}
              >
                {c.name}
              </span>
              <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-wider text-ink-soft mt-1">
                {c.factor}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Specimen report */}
      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="card mt-8 overflow-hidden"
      >
        <div key={current.id} className="panel-in">
          {/* Header strip */}
          <div className="flex items-center gap-4 p-6 md:px-9 md:py-7 border-b border-line bg-blush/60">
            <span
              className="shrink-0 grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blood text-paper font-display font-extrabold text-lg md:text-xl"
              aria-hidden="true"
            >
              {current.symbol}
            </span>
            <div className="min-w-0">
              <h3 className="display-md leading-tight">{current.name}</h3>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-blood mt-1">
                {current.factor} · the protein in short supply
              </p>
              <p className="text-sm text-ink-soft mt-1">{current.aka}</p>
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-8 md:grid-cols-2 p-6 md:p-9">
            <div className="space-y-4">
              <div>
                <h4 className={`${subLabel} mb-2`}>What it is</h4>
                <p className="text-[15px] leading-relaxed text-ink-soft">{current.what}</p>
              </div>
              <div>
                <h4 className={`${subLabel} mb-2`}>Who it affects</h4>
                <p className="text-[15px] leading-relaxed text-ink-soft">{current.who}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className={`${subLabel} mb-3`}>Common signs</h4>
                <ul className="space-y-2.5">
                  {current.signs.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[15px] leading-snug text-ink-soft">
                      <Drop className="w-3.5 h-3.5 mt-1 shrink-0 text-blood-bright" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`${subLabel} mb-2`}>How it's managed</h4>
                <p className="text-[15px] leading-relaxed text-ink-soft">{current.treatment}</p>
              </div>
              <div className="bg-blush border border-line rounded-2xl p-4">
                <h4 className={`${subLabel} mb-1.5`}>Worth knowing</h4>
                <p className="text-sm leading-relaxed text-ink">{current.fact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-ink-soft mt-4">
        Health information adapted from the U.S. Centers for Disease Control and
        Prevention (CDC). If you notice these signs, speak with a doctor.
      </p>
    </div>
  );
}
