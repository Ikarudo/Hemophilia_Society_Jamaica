import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { site, whatsappLink } from '../data/site.js';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/members', label: 'Meet the Members' },
  { to: '/contact', label: 'Get in Contact' },
  { to: '/donate', label: 'Donate' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="flag-edge" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 object-contain bg-paper rounded-full p-0.5" />
            <span className="font-display font-extrabold tracking-tight">{site.shortName}</span>
          </div>
          <p className="text-sm text-paper/70 leading-relaxed max-w-xs">
            Supporting Jamaicans living with haemophilia and other inherited
            bleeding disorders through advocacy, education and community.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow !text-blood-bright mb-3">Pages</h2>
          <ul className="space-y-2">
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-paper/80 hover:text-paper transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow !text-blood-bright mb-3">Reach us</h2>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-paper transition-colors"
              >
                WhatsApp us
              </a>
            </li>
            <li>{site.phone}</li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow !text-blood-bright mb-3">Global family</h2>
          <p className="text-sm text-paper/70 leading-relaxed">
            HSJ works alongside the{' '}
            <a
              href="https://wfh.org"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-paper"
            >
              World Federation of Hemophilia
            </a>{' '}
            and its vision of Treatment for All.
          </p>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <p className="max-w-7xl mx-auto px-5 md:px-10 py-5 text-xs text-paper/50">
          © 2026 Haemophilia Society of Jamaica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
