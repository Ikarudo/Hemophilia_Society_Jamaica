import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, BookOpen, Users, HandHeart, Stethoscope } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Drop from '../components/Drop.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import ConditionTabs from '../components/ConditionTabs.jsx';
import DropCount from '../components/DropCount.jsx';
import { supportTips, treatments, quickFacts } from '../data/awareness.js';

// Hero collage photos, kept from the original design
const collage = [
  {
    alt: 'Doctor smiling with a patient',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJUj4q4-5qsn38d3aT915nsxd85fMOfEidetX1vq0Ph_hwbWUhj56qfaKAPetHj3rPC-xW30nZWP8L1zeRueud9rz8bP7oguk5kBWf5ZecoUojXQldEjKh_7pleOZAzm2P5X6OPIrHfiR-a-rJeVu_eGX5BxUBotlWvLENZvRDG_lGp5aH1nUMQOwtSF0a_WZMjAXENDWCwA2LGV2R06VuBtkDiZYAPojwprvhfZAPFsrL7nyAd1O8DBCroe7WHgbARytc6JlWgjf6',
    pos: 'left-[3%] top-[18%] w-[27%] aspect-[195/275]',
  },
  {
    alt: 'Jamaican community laughing together',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEqlehIL4y1u6RUBr3LaVHz-yuMuA42GK7QPYuBL_AfR55IIBOeKuabh9UFIGZ1n7jLIlxKrYoLyeN4FqxgtIq5KVkdt8zMmNQPdCVP574XJ-iks00VW8crfhfIcEaWQxXbVMt3glCG0lwmepbP8H2sdUfbkj3vuopbh6pLSEcVTew8Pq-QV2bsqMO_5IOm8qz2MJSRqQVqNQon3J4r7B4RqyMwjvMX8IelEF39ixSiHxfbg5otxHeX06797ti_8hm2qrS8y9sJKo2',
    pos: 'left-[33%] top-[4%] w-[34%] aspect-[240/300]',
  },
  {
    alt: 'Care supplies beside a Jamaican flag',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFuVz4n8BZnoYX6uygMtAdsy-7YUWuh6MjY3P2ouWcJE5N3GGXeWzF_vFRq3YeSQND3nEyByit82btRZMlTuoKYuhefeZwFZmu1EQio4XGoC75N27DJBikTWVXOyS4Nn0w_rodhY1YeGzwYroxcaQ0Y4OK3MyaBYiUyRMrq1iY052U46FI05tvfpl6HS24iN-WfWQhhUWCfnyoKLuaPxiLjvt-kkUmgKl1JrflYt7MjX8RKFym9TitfqJnVhrE52QqextckY-sVLyn',
    pos: 'left-[33%] top-[72%] w-[34%] aspect-[240/180]',
  },
  {
    alt: 'Modern healthcare facility corridor',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6rwpF_V_ZSVXnDqchbvOxiBBr-EvjLRKeFt8oMfJSPgC8C7TNnBVybOAfwR_c4JUAVCFMtixGxfqYr4LaoizLePsNX8FgiOZGSUVlzCQ-rwSCIRNcCN7vr8dJAwjm_Wn84kwNinyF-DOtAV2jD66iSdPKcj3dT7kSdp70KV_F6whIlJEIlkgvDvKKGVbKmgnzF-7V8C8v9wegh5DSRg2qVjjzniGnNo3QPi8Vwi9hbebJWIVCNM1LSHyqQL56QygRr8cdvYwEfMmm',
    pos: 'left-[70%] top-[4%] w-[26%] aspect-[175/235]',
  },
];

// Card top rules cycle through the logo's own colors
const pillars = [
  {
    icon: Megaphone,
    accent: 'border-t-jam-green',
    title: 'Advocacy',
    body: 'We speak up for reliable access to treatment and care for every Jamaican family living with a bleeding disorder.',
  },
  {
    icon: BookOpen,
    accent: 'border-t-jam-gold',
    title: 'Education',
    body: 'We help families, schools and communities understand these conditions, so no one faces a diagnosis in the dark.',
  },
  {
    icon: Users,
    accent: 'border-t-blood',
    title: 'Community',
    body: 'We connect people who share the same journey, because the first person you want to talk to is someone who gets it.',
  },
];

const dotColors = ['bg-jam-green', 'bg-jam-gold', 'bg-blood'];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center px-5 md:px-10 pt-12 pb-20 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Eyebrow>Haemophilia Society of Jamaica</Eyebrow>

            <h1 className="display-xl">
              Strength in
              <br />
              every{' '}
              <span className="text-blood whitespace-nowrap">
                drop
                <span className="relative inline-block align-baseline ml-1.5" aria-hidden="true">
                  <Drop className="hero-drop w-[0.55em] h-[0.55em] text-blood-bright inline-block" />
                  <span className="hero-ripple absolute inset-0 rounded-full border-2 border-blood-bright" />
                </span>
              </span>
            </h1>

            <p className="text-[15px] text-ink-soft max-w-md leading-relaxed">
              We are the national society for Jamaicans living with haemophilia
              and other inherited bleeding disorders, working so every family
              has knowledge, community and access to care.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <Link to="/donate" className="btn btn-blood">
                Donate now
              </Link>
              <a
                href="#conditions"
                className="inline-flex items-center gap-1.5 text-blood font-bold text-s tracking-wider hover:text-blood-deep transition-colors group"
              >
                Learn the basics
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Photo collage, absolute-positioned on larger screens */}
          <div className="lg:col-span-7 relative select-none">
            <div className="relative w-full h-[380px] sm:h-[480px] hidden sm:block">
              {collage.map((img, i) => (
                <div
                  key={img.alt}
                  className={`absolute ${img.pos} bg-paper rounded-2xl overflow-hidden shadow-xl border border-line hover:scale-[1.03] hover:z-20 transition-transform duration-300`}
                >
                  <img
                    alt={img.alt}
                    src={img.src}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Simple two-column collage on phones */}
            <div className="grid grid-cols-2 gap-3 sm:hidden mt-6">
              {collage.slice(0, 2).map((img) => (
                <div key={img.alt} className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <img alt={img.alt} src={img.src} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-blush border-y border-line px-5 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow className="mb-2">What we do</Eyebrow>
            <h2 className="display-lg max-w-xl">
              Three ways we show up for our community.
            </h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 mt-10">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 120}
                className={`card p-7 border-t-[3px] ${p.accent}`}
              >
                <p.icon className="w-6 h-6 text-blood mb-4" aria-hidden="true" />
                <h3 className="display-md mb-2">{p.title}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The three conditions */}
      <section id="conditions" className="px-5 md:px-10 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-10">
            <Eyebrow className="mb-2">Know the signs</Eyebrow>
            <h2 className="display-lg mb-4">Three conditions, one community.</h2>
            <p className="text-[15px] text-ink-soft leading-relaxed">
              Bleeding disorders are conditions where blood does not clot the
              way it should. The three we see most are haemophilia A,
              haemophilia B and von Willebrand disease. They differ in which
              clotting protein is affected and in who they touch, but early
              recognition helps in all three.
            </p>
          </Reveal>

          <Reveal>
            <ConditionTabs />
          </Reveal>

          {/* Supporting someone + quick facts */}
          <div className="grid gap-8 lg:grid-cols-5 mt-16 md:mt-20 items-start">
            <Reveal className="lg:col-span-3">
              <Eyebrow className="mb-2 flex items-center gap-2">
                <HandHeart className="w-4 h-4" aria-hidden="true" /> Everyday support
              </Eyebrow>
              <h3 className="display-lg mb-3">
                If someone you know has one.
              </h3>
              <p className="text-[15px] text-ink-soft leading-relaxed mb-7 max-w-xl">
                Most of what a classmate, coworker or neighbour needs from you
                is ordinary. A few things are worth knowing.
              </p>
              <ul className="space-y-5">
                {supportTips.map((tip, i) => (
                  <li key={tip.title} className="flex gap-4">
                    <span
                      className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${dotColors[i % 3]}`}
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-bold text-[15px] mb-0.5">{tip.title}</h4>
                      <p className="text-[15px] text-ink-soft leading-relaxed">{tip.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={150}
              className="lg:col-span-2 bg-jam-green-soft border border-jam-green/20 rounded-2xl p-7 md:p-8"
            >
              <h3 className="display-md mb-5">Good to know</h3>
              <ul className="space-y-4">
                {quickFacts.map((fact) => (
                  <li key={fact} className="flex gap-3 text-[15px] text-ink-soft leading-relaxed">
                    <Drop className="w-4 h-4 mt-0.5 shrink-0 text-blood" />
                    {fact}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Avenues of treatment */}
          <div className="mt-16 md:mt-20">
            <Reveal className="max-w-2xl mb-8">
              <Eyebrow className="mb-2 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" aria-hidden="true" /> Treatment today
              </Eyebrow>
              <h3 className="display-lg mb-3">
                Care has come a long way.
              </h3>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                A generation ago, options were few. Today several avenues of
                treatment exist, and the society's job is making sure Jamaicans
                can reach them.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t, i) => (
                <Reveal
                  key={t.name}
                  delay={(i % 3) * 100}
                  className={`card p-6 border-t-[3px] ${dotColors[i % 3].replace('bg-', 'border-t-')}`}
                >
                  <h4 className="font-bold text-[15px] mb-1.5">{t.name}</h4>
                  <p className="text-sm text-ink-soft leading-relaxed">{t.body}</p>
                </Reveal>
              ))}
            </div>

            <p className="text-xs text-ink-soft mt-5 max-w-2xl">
              Treatment information adapted from the CDC and the World
              Federation of Hemophilia. What suits any one person is a decision
              for them and their doctor.
            </p>
          </div>
        </div>
      </section>

      {/* Signature stat moment */}
      <section className="bg-ink text-paper px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <Reveal>
            <Eyebrow light className="mb-2 justify-center">
              Why it matters here
            </Eyebrow>
            <h2 className="display-lg max-w-2xl mx-auto">
              Around 300 Jamaicans live with haemophilia.
            </h2>
          </Reveal>

          <Reveal>
            <DropCount />
          </Reveal>

          <Reveal className="space-y-4">
            <p className="text-[15px] text-paper/70 max-w-xl mx-auto leading-relaxed">
              Each drop is a person: a schoolchild, a parent, a neighbour. Every
              April 17, World Haemophilia Day, the world lights up red for them.
              The rest of the year, that is our job.
            </p>
            <p className="text-xs text-paper/40">
              Estimate reported by the Jamaica Information Service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-blood text-paper px-5 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl min-h-[45vh] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <h2 className="display-lg max-w-xl">
              Your support keeps care within reach.
            </h2>
            <p className="text-[15px] text-on-blood-soft mt-3 max-w-md leading-relaxed">
              Donations fund education sessions, family support and the push
              for better access to treatment across the island.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4 shrink-0">
            <Link to="/donate" className="btn btn-white">
              Ways to give
            </Link>
            <Link
              to="/contact"
              className="btn border-[1.5px] border-paper/50 text-paper hover:border-paper hover:bg-paper/10"
            >
              Get in contact
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
