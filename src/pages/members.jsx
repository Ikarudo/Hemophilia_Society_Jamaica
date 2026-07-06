import Reveal from '../components/Reveal.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import { members } from '../data/members.js';

// Initials avatar for members without a photo yet
function Avatar({ name, photo }) {
  if (photo) {
    return <img src={photo} alt="" className="w-20 h-20 rounded-full object-cover" />;
  }
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      aria-hidden="true"
      className="w-20 h-20 rounded-full bg-blood text-paper flex items-center justify-center font-display font-extrabold text-2xl"
    >
      {initials}
    </div>
  );
}

export default function Members() {
  return (
    <>
      <section className="px-5 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <Eyebrow className="mb-3">Meet the members</Eyebrow>
          <h1 className="display-xl max-w-2xl mb-5">
            The people behind the society.
          </h1>
          <p className="text-[15px] text-ink-soft leading-relaxed max-w-2xl">
            Volunteers, parents, patients and professionals who keep HSJ
            running. These are sample profiles until the society provides real
            ones; they live in{' '}
            <code className="text-xs bg-blush border border-line rounded px-1.5 py-0.5">
              src/data/members.js
            </code>{' '}
            and take a minute to update.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 100} className="card p-7">
              <div className="flex items-center gap-4 mb-4">
                <Avatar name={m.name} photo={m.photo} />
                <div>
                  <h2 className="display-md !text-lg">{m.name}</h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-blood mt-1">
                    {m.role}
                  </p>
                </div>
              </div>
              <p className="text-[15px] text-ink-soft leading-relaxed">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
