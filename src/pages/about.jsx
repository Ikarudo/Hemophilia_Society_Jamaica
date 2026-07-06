import { Link } from 'react-router-dom';
import { Globe, CalendarDays, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Drop from '../components/Drop.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import { events } from '../data/events.js';

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function DateBadge({ iso }) {
  const [y, m, d] = iso.split('-').map(Number);
  return (
    <div className="bg-blood text-paper rounded-xl w-16 h-16 flex flex-col items-center justify-center shrink-0">
      <span className="font-display font-extrabold text-xl leading-none">{d}</span>
      <span className="text-[10px] uppercase tracking-widest font-bold">
        {monthNames[m - 1]} {String(y).slice(2)}
      </span>
    </div>
  );
}

// Identity strip facts: rooted here, reaching everywhere
const roots = [
  { color: 'bg-jam-green', title: 'Rooted in Jamaica', body: 'Run by Jamaicans, for Jamaican families, from Negril to Morant Point.' },
  { color: 'bg-jam-gold', title: 'Community first', body: 'Patients, parents and carers lead the society. Lived experience sets the agenda.' },
  { color: 'bg-ink', title: 'Globally connected', body: 'Linked to the World Federation of Hemophilia and its network across 147+ countries.' },
];

export default function About() {
  return (
    <>
      {/* Page header, washed with a soft gold light */}
      <section className="relative px-5 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-[560px] h-[560px]"
          style={{ background: 'radial-gradient(circle, var(--color-jam-gold-soft) 0%, transparent 65%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-32 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, var(--color-jam-green-soft) 0%, transparent 65%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <Eyebrow className="mb-3">About us</Eyebrow>
          <h1 className="display-xl max-w-3xl mb-5">
            Jamaican made, community built.
          </h1>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-2xl">
            The Haemophilia Society of Jamaica exists so that no Jamaican
            family faces a bleeding disorder alone. We bring together patients,
            parents, carers and clinicians to share knowledge, support one
            another, and push for better access to care.
          </p>
        </div>
      </section>

      {/* Identity strip */}
      <section className="px-5 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto grid gap-5 md:grid-cols-3">
          {roots.map((r, i) => (
            <Reveal key={r.title} delay={i * 120} className="card p-6 flex gap-4">
              <span className={`w-1.5 self-stretch rounded-full shrink-0 ${r.color}`} aria-hidden="true" />
              <div>
                <h2 className="font-bold text-[15px] mb-1">{r.title}</h2>
                <p className="text-sm text-ink-soft leading-relaxed">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story and mission */}
      <section className="px-5 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <h2 className="display-lg">Our story</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              {'{{ VERIFY: HSJ founding year and founding story }}'} What we can
              say with certainty: the society grew out of families and doctors
              in Jamaica who saw that living well with a bleeding disorder
              takes more than medicine. It takes information, advocacy and a
              community that understands.
            </p>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              Today we focus on the people behind the diagnosis, from the
              parent hearing the word haemophilia for the first time to the
              adult managing it every day.
            </p>
          </Reveal>

          <Reveal delay={120} className="card p-7 md:p-9 space-y-5 border-t-[3px] border-t-jam-green">
            <h2 className="display-md">Our mission</h2>
            <ul className="space-y-4">
              {[
                'Advocate for reliable access to diagnosis and treatment across Jamaica.',
                'Educate families, schools and communities about bleeding disorders.',
                'Connect people living with these conditions so nobody walks alone.',
              ].map((m) => (
                <li key={m} className="flex gap-3 text-[15px] text-ink-soft leading-relaxed">
                  <Drop className="w-4 h-4 mt-0.5 shrink-0 text-blood" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WFH relationship */}
      <section className="bg-blood text-paper px-5 md:px-15 py-36 md:py-30">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <Reveal className="space-y-4">
            <p className="eyebrow !text-on-blood-soft flex items-center gap-2">
              <Globe className="w-4 h-4" aria-hidden="true" /> Part of a global movement
            </p>
            <h2 className="display-lg">
              Connected to the World Federation of Hemophilia.
            </h2>
            <p className="text-[15px] text-on-blood-soft leading-relaxed">
              The World Federation of Hemophilia (WFH), headquartered in
              Montreal and founded by Frank Schnabel, links national societies
              like ours across more than 147 countries. Through that network,
              Jamaican families benefit from global expertise, training and
              humanitarian support.
            </p>
          </Reveal>

          <Reveal delay={120} className="bg-paper/10 border border-paper/20 rounded-2xl p-7 md:p-9">
            <blockquote className="space-y-4">
              <p className="font-display text-xl md:text-2xl font-semibold leading-snug">
                "A world where all people with inherited bleeding disorders
                have access to care, regardless of their type of bleeding
                disorder, gender, or where they live."
              </p>
              <footer className="text-sm text-on-blood-soft">
                The WFH vision, known as Treatment for All.{' '}
                <a
                  href="https://wfh.org"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-paper"
                >
                  Visit wfh.org
                </a>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Events */}
      <section className="px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-10">
            <Eyebrow className="mb-2 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" aria-hidden="true" /> Events
            </Eyebrow>
            <h2 className="display-lg">What's coming up.</h2>
            <p className="text-sm text-ink-soft mt-3">
              Sample listings for now. Real events are added in{' '}
              <code className="text-xs bg-blush border border-line rounded px-1.5 py-0.5">
                src/data/events.js
              </code>
              .
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {events.map((ev, i) => (
              <Reveal key={ev.id} delay={i * 120} className="card p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <DateBadge iso={ev.date} />
                  <h3 className="display-md !text-lg leading-snug pt-1">{ev.title}</h3>
                </div>
                <p className="text-[15px] text-ink-soft leading-relaxed flex-1">
                  {ev.description}
                </p>
                <p className="text-xs text-ink-soft flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {ev.location}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link to="/contact" className="btn btn-blood">
              Ask about an event
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
