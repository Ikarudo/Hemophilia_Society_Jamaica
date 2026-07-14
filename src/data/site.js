// Central contact and donation details for the whole site.
// Everything marked PLACEHOLDER must be swapped for HSJ's real details
// before launch. Nothing else needs to change when you do.

export const site = {
  name: 'Haemophilia Society of Jamaica',
  shortName: 'HSJ',

  // PLACEHOLDER contact channels
  email: 'hello@hsjamaica.org.jm',
  phone: '+1 (876) 000-0000',
  // Digits only, country code first. Used to build the wa.me click-to-chat link.
  whatsappNumber: '18760000000',
  whatsappGreeting: 'Hello HSJ, I would like to learn more about the society.',

  address: '{{ VERIFY: HSJ office address, Kingston }}',

  // PLACEHOLDER social profiles
  socials: [
    { label: 'Facebook', url: 'https://facebook.com/hsjamaica' },
    { label: 'Instagram', url: 'https://instagram.com/hsjamaica' },
    { label: 'YouTube', url: 'https://youtube.com/@hsjamaica' },
  ],

  donate: {
    // PLACEHOLDER bank details. Confirm every field with the treasurer.
    bank: {
      bankName: 'National Commercial Bank',
      accountName: 'Haemaphili',
      accountNumber: '404383876',
      accountType: 'SAVINGS',
      branch: 'UNIVERSITY BRANCH',
    },
    // PLACEHOLDER money app handles
    apps: [
      {
        name: 'PayPal',
        handle: 'COMING SOON',
        note: 'Works from anywhere in the world with a card or PayPal balance.',
      },
      {
        name: 'GiftMe',
        handle: 'COMING SOON',
        note: 'For supporters giving from within Jamaica.',
      },
      {
        name: 'Zelle',
        handle: 'COMING SOON',
        note: 'For supporters with a US bank account.',
      },
    ],
  },
};

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappGreeting)}`;
