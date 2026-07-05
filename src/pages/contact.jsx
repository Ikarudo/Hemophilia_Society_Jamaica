import { useState } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import { site, whatsappLink } from '../data/site.js';

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/60 focus:border-blood transition-colors';

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Presentational only. When a backend or form service is ready, replace the
  // body of this handler with the real submission and keep the field names.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="px-5 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <Eyebrow className="mb-3">Get in contact</Eyebrow>
          <h1 className="display-xl max-w-2xl mb-5">Talk to us.</h1>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-2xl">
            Questions about a diagnosis, joining the society, volunteering or
            supporting our work: pick whichever channel suits you.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-5">
          {/* Channels */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal className="card p-6 flex items-start gap-4">
              <Mail className="w-5 h-5 text-blood mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h2 className="font-bold text-sm mb-1">Email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[15px] text-blood hover:text-blood-deep underline underline-offset-2"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="card p-6 flex items-start gap-4">
              <MessageCircle className="w-5 h-5 text-blood mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h2 className="font-bold text-sm mb-1">WhatsApp</h2>
                <p className="text-sm text-ink-soft mb-2">
                  Chat with us directly, no number saving needed.
                </p>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-blood !px-5 !py-2.5 text-xs">
                  Open WhatsApp chat
                </a>
              </div>
            </Reveal>

            <Reveal delay={200} className="card p-6 flex items-start gap-4">
              <Phone className="w-5 h-5 text-blood mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h2 className="font-bold text-sm mb-1">Phone</h2>
                <p className="text-[15px] text-ink-soft">{site.phone}</p>
              </div>
            </Reveal>

            <Reveal delay={300} className="card p-6">
              <h2 className="font-bold text-sm mb-3">Find us online</h2>
              <ul className="flex flex-wrap gap-3">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline !px-4 !py-2 text-xs"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-7 md:p-9 space-y-5" noValidate={false}>
              <h2 className="display-md">Send a message</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-1.5">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-1.5">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-1.5">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} required className={inputClass} />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-blood">
                  Send message
                </button>
                {sent && (
                  <p role="status" className="text-sm text-ink-soft">
                    This form isn't connected yet. Please email us at{' '}
                    <a href={`mailto:${site.email}`} className="text-blood underline underline-offset-2">
                      {site.email}
                    </a>{' '}
                    and we'll get back to you.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
