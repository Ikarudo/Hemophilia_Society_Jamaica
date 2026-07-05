import { Landmark, Smartphone, HeartHandshake } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Drop from '../components/Drop.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import { site } from '../data/site.js';

const { bank, apps } = site.donate;

const bankRows = [
  ['Bank', bank.bankName],
  ['Account name', bank.accountName],
  ['Account number', bank.accountNumber],
  ['Account type', bank.accountType],
  ['Branch', bank.branch],
];

const impact = [
  'Education sessions for newly diagnosed families and their schools.',
  'Community events that connect people living with the same condition.',
  'Advocacy for dependable access to treatment across the island.',
];

export default function Donate() {
  return (
    <>
      <section className="px-5 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <Eyebrow className="mb-3">Donate</Eyebrow>
          <h1 className="display-xl max-w-2xl mb-5">
            Give in the way that works for you.
          </h1>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-2xl">
            Every contribution, from Jamaica or abroad, goes toward education,
            community support and advocacy for families living with bleeding
            disorders.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-2">
          {/* Bank transfer */}
          <Reveal className="card p-7 md:p-9">
            <Landmark className="w-6 h-6 text-blood mb-4" aria-hidden="true" />
            <h2 className="display-md mb-2">Bank transfer</h2>
            <p className="text-sm text-ink-soft mb-6">
              Best for larger or recurring gifts within Jamaica.
            </p>
            <dl className="divide-y divide-line border-y border-line">
              {bankRows.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-3">
                  <dt className="text-sm font-bold shrink-0">{label}</dt>
                  <dd className="text-sm text-ink-soft text-right break-all">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Money apps */}
          <Reveal delay={120} className="card p-7 md:p-9">
            <Smartphone className="w-6 h-6 text-blood mb-4" aria-hidden="true" />
            <h2 className="display-md mb-2">Money apps</h2>
            <p className="text-sm text-ink-soft mb-6">
              Quick one-off gifts from your phone, at home or overseas.
            </p>
            <ul className="space-y-4">
              {apps.map((app) => (
                <li key={app.name} className="bg-blush border border-line rounded-2xl p-5">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="font-bold">{app.name}</h3>
                    <code className="text-xs bg-paper border border-line rounded px-2 py-1">
                      {app.handle}
                    </code>
                  </div>
                  <p className="text-sm text-ink-soft">{app.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto mt-5">
          <Reveal className="bg-blush border border-line rounded-2xl p-5 text-sm text-ink-soft leading-relaxed">
            The account details and handles above are placeholders awaiting
            confirmation from HSJ. Before sending anything, confirm the details
            with us directly at{' '}
            <a href={`mailto:${site.email}`} className="text-blood underline underline-offset-2">
              {site.email}
            </a>
            . We're happy to provide a receipt for any gift.
          </Reveal>
        </div>
      </section>

      {/* Where the money goes */}
      <section className="bg-ink text-paper px-5 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow !text-blood-bright mb-2 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" aria-hidden="true" /> Where your gift goes
            </p>
            <h2 className="display-lg max-w-lg">
              Small gifts carry a long way here.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4">
              {impact.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-paper/80 leading-relaxed">
                  <Drop className="w-4 h-4 mt-0.5 shrink-0 text-blood-bright" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
