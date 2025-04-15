import { FC } from 'react';

interface Section {
  title: string;
  items: string[];
  weight: number;
}

const sections: Section[] = [
  {
    title: 'Existenzgründung',
    items: [
      'Beratung für Existenzgründer',
      'Unternehmensform',
      'Kalkulationen',
      'Erstellung von Business-Plänen',
    ],
    weight: 100,
  },
  {
    title: 'Produkt- und Lieferantensuche',
    items: [
      'Produktsuche',
      'Weltweite Lieferantensuche',
      'Lieferantenmanagement',
      'Ausschreibungen',
    ],
    weight: 90,
  },
  {
    title: 'Kalkulationen aller Art',
    items: [
      'Finanzkalkulationen',
      'Kreditrechner',
      'Rentabilitätsrechner',
      'Liquiditätsrechner',
      'Anlage EKS',
      'Einnahme-Überschuss-Rechner (EÜR)',
      'Gewinn- und Verlustrechner (GuV)',
      'Kalkulationen für kurz- bis langfristige Projekte',
      'Brutto-Netto-Rechner für Arbeitnehmer',
      'Brutto-Netto-Rechner für Arbeitgeber',
      'und viele andere auf Nachfrage',
    ],
    weight: 80,
  },
  {
    title: 'Business-Pläne',
    items: ['Geschäftsgründung', 'Neue Projekte', 'Krediterhaltung bei Banken', 'Große Einkäufe'],
    weight: 70,
  },
  {
    title: 'Präsentationen',
    items: ['für Kunden', 'für Verkauf und Vertrieb', 'für Investoren'],
    weight: 60,
  },
  {
    title: 'Excel-Tabellenkalkulation',
    items: [
      'Organisation der Geschäftsprozesse',
      'Überblick über Ihre Geldbewegungen',
      'Nachhilfe',
    ],
    weight: 50,
  },
  {
    title: 'Führung von Geschäfts- und Privatkorrespondenz',
    items: ['Ausfüllen von Formularen', 'Schriftverkehr', 'Geschäftliche Korrespondenz'],
    weight: 40,
  },
  {
    title: 'Marktforschung',
    items: [
      'Produktforschung und Produktanalyse',
      'Branchenanalyse',
      'Marktanalyse',
      'Marketingforschung',
      'Wettbewerbs-/Konkurrenzanalyse',
      'Zielgruppenanalyse',
      'Standortanalyse',
    ],
    weight: 30,
  },
].sort((a, b) => b.weight - a.weight);

const Section: FC<Section> = ({ title, items }) => (
  <section className="mt-5 ml-5">
    <h3 className="h3Styles">{title}</h3>
    <ul className="contentUL">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
);

const HomepageLayout: FC = () => {
  return (
    <main className="contentSectionWrapper bg-horizontal-gradient">
      <h1 className="text-center text-lg lg:font-extrabold">Beratungsangebot: Überblick</h1>
      <h2 className="mt-5 text-center text-lg lg:font-extrabold">
        Seit 2012 bieten wir Unternehmensberatung in verschiedenen Bereichen an:
      </h2>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </main>
  );
};

export default HomepageLayout;
