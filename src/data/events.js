// Events shown on the About page. All of these are SAMPLE entries; replace
// them with real HSJ events as they are confirmed. To add one, copy an object
// and fill in the fields. Dates are YYYY-MM-DD.

export const events = [
  {
    id: 'whd-2027',
    title: 'World Haemophilia Day observance',
    date: '2027-04-17',
    location: '{{ VERIFY: venue, Kingston }}',
    description:
      'Every April 17, landmarks around the world light up red for the bleeding disorders community. Join us as Jamaica takes part.',
    placeholder: true,
  },
  {
    id: 'family-day-2026',
    title: 'HSJ community family day',
    date: '2026-08-22',
    location: '{{ VERIFY: venue }}',
    description:
      'A day for members and their families to connect, share experiences, and enjoy safe activities together.',
    placeholder: true,
  },
  {
    id: 'education-2026',
    title: 'Living well with a bleeding disorder: education session',
    date: '2026-10-10',
    location: '{{ VERIFY: venue or online }}',
    description:
      'A practical session for newly diagnosed families covering everyday care, school life, and staying active safely.',
    placeholder: true,
  },
];
