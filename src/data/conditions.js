// Plain-language summaries of the three conditions HSJ focuses on.
// Facts come from the CDC (cdc.gov/hemophilia, cdc.gov/von-willebrand).
// Keep edits factual and cite a recognized source for any new claim.

export const conditions = [
  {
    id: 'haemophilia-a',
    name: 'Haemophilia A',
    symbol: 'VIII',
    factor: 'Factor VIII',
    aka: 'Also called classic haemophilia',
    what:
      'The blood does not have enough of a clotting protein called factor VIII (8), so bleeding takes longer to stop. It can happen after an injury or surgery, and in severe cases without an obvious cause.',
    who:
      'Passed down through a gene on the X chromosome, so it almost always affects boys and men. Women can carry the gene and pass it to their children.',
    signs: [
      'Bleeding into joints, most often knees, elbows and ankles',
      'Large or unexplained bruises',
      'Bleeding that is hard to stop after cuts, dental work or surgery',
      'Frequent or long nosebleeds',
    ],
    fact:
      'About 1 in every 5,000 boys is born with haemophilia. Type A is three to four times as common as type B.',
    treatment:
      'Managed by replacing the missing factor VIII through infusions, or with newer skin-injection medicines that stand in for it. Milder cases may use desmopressin, which releases the factor VIII the body already stores. A one-time gene therapy is now approved.',
  },
  {
    id: 'haemophilia-b',
    name: 'Haemophilia B',
    symbol: 'IX',
    factor: 'Factor IX',
    aka: 'Also called Christmas disease',
    what:
      'The same kind of condition as haemophilia A, but the missing protein is factor IX (9). The two types look identical day to day; a lab test is the only way to tell them apart, and they need different treatment.',
    who:
      'Inherited the same way as haemophilia A, through the X chromosome, so it mostly affects boys and men while women can be carriers.',
    signs: [
      'The same signs as haemophilia A: joint bleeds, deep bruises and prolonged bleeding',
      'Symptoms range from mild to severe depending on how much factor IX the body makes',
    ],
    fact:
      'The rarer of the two haemophilias. Knowing which type someone has matters because each is treated by replacing a different protein.',
    treatment:
      'Managed by replacing the missing factor IX through infusions, on a regular preventive schedule or when a bleed happens. A one-time gene therapy for haemophilia B is now approved as well.',
  },
  {
    id: 'vwd',
    name: 'von Willebrand disease',
    symbol: 'vWF',
    factor: 'von Willebrand factor',
    aka: 'Usually shortened to VWD',
    what:
      'The body is low on, or has a faulty version of, von Willebrand factor, a protein that helps blood cells stick together to seal a wound. Most people have a mild form and many never know they have it.',
    who:
      'Affects men and women equally, but women often notice it first because of very heavy periods or bleeding after childbirth.',
    signs: [
      'Nosebleeds that last longer than ten minutes',
      'Easy bruising from minor knocks',
      'Very heavy or long menstrual periods',
      'Prolonged bleeding after injury, surgery or dental work',
    ],
    fact:
      'The most common inherited bleeding disorder, affecting about 1% of people, and unlike haemophilia it is just as common in women as in men.',
    treatment:
      'Depends on the type and severity. Many people manage well with medicines that help the body release or hold on to its own clotting proteins; replacement products are used for heavier bleeding or before surgery.',
  },
];
