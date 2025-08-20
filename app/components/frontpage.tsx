import { FC } from "react";

interface Section {
  items: string[];
  title: string;
  weight: number;
}

const sections: Section[] = [
  {
    items: [
      "Beratung für Existenzgründer",
      "Unternehmensform",
      "Kalkulationen",
      "Erstellung von Business-Plänen",
    ],
    title: "Existenzgründung",
    weight: 100,
  },
  {
    items: [
      "Produktsuche",
      "Weltweite Lieferantensuche",
      "Lieferantenmanagement",
      "Ausschreibungen",
    ],
    title: "Produkt- und Lieferantensuche",
    weight: 90,
  },
  {
    items: [
      "Finanzkalkulationen",
      "Kreditrechner",
      "Rentabilitätsrechner",
      "Liquiditätsrechner",
      "Anlage EKS",
      "Einnahme-Überschuss-Rechner (EÜR)",
      "Gewinn- und Verlustrechner (GuV)",
      "Kalkulationen für kurz- bis langfristige Projekte",
      "Brutto-Netto-Rechner für Arbeitnehmer",
      "Brutto-Netto-Rechner für Arbeitgeber",
      "und viele andere auf Nachfrage",
    ],
    title: "Kalkulationen aller Art",
    weight: 80,
  },
  {
    items: [
      "Geschäftsgründung",
      "Neue Projekte",
      "Krediterhaltung bei Banken",
      "Große Einkäufe",
    ],
    title: "Business-Pläne",
    weight: 70,
  },
  {
    items: ["für Kunden", "für Verkauf und Vertrieb", "für Investoren"],
    title: "Präsentationen",
    weight: 60,
  },
  {
    items: [
      "Organisation der Geschäftsprozesse",
      "Überblick über Ihre Geldbewegungen",
      "Nachhilfe",
    ],
    title: "Excel-Tabellenkalkulation",
    weight: 50,
  },
  {
    items: [
      "Ausfüllen von Formularen",
      "Schriftverkehr",
      "Geschäftliche Korrespondenz",
    ],
    title: "Führung von Geschäfts- und Privatkorrespondenz",
    weight: 40,
  },
  {
    items: [
      "Produktforschung und Produktanalyse",
      "Branchenanalyse",
      "Marktanalyse",
      "Marketingforschung",
      "Wettbewerbs-/Konkurrenzanalyse",
      "Zielgruppenanalyse",
      "Standortanalyse",
    ],
    title: "Marktforschung",
    weight: 30,
  },
].sort((a, b) => b.weight - a.weight);

const Section: FC<Section> = ({ items, title }) => (
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
      <h1 className="text-center text-lg lg:font-extrabold">
        Beratungsangebot: Überblick
      </h1>
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
