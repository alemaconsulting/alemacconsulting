import MainLayout from '@/layouts/mainLayout';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { resultObj } from '@/shared/types';

export async function getStaticProps() {
  const allPostsData: resultObj[] = await getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type PropsType = {
  allPostsData: resultObj[];
};

const Index = ({ allPostsData }: PropsType) => {
  const linksData = allPostsData.map((post) => ({
    slug: post.slug,
    title: post.title,
  }));
  return (
    <MainLayout linksData={linksData}>
      <section className="w-full py-5 font-bold sm:rounded-lg sm:border-2 sm:border-borderGrey sm:bg-gradBacking sm:bg-horizontalBgGrad sm:px-10 sm:py-4 xl:px-16 xl:py-8">
        <h1 className="text-center text-lg lg:font-extrabold">Beratungsangebot: Überblick</h1>
        <p className="mt-5 text-center text-lg lg:font-extrabold">
          Seit 2012 bieten wir Unternehmensberatung in verschiedenen Bereichen an:
        </p>
        <div className="ml-5 mt-5 sm:mt-10">
          <h3 className="checkmarkedHeader">Produkt- und Lieferantensuche</h3>
          <ul className="contentUL">
            <li>Produktsuche</li>
            <li>Weltweite Lieferantensuche</li>
            <li>Lieferantenmanagement</li>
            <li>Ausschreibungen</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Kalkulationen aller Ar</h3>
          <ul className="contentUL">
            <li>Finanzkalkulationen</li>
            <li>Kreditrechner</li>
            <li>Rentabilitätsrechner</li>
            <li>Liquiditätsrechner</li>
            <li>Anlage EKS</li>
            <li>Einnahme-Überschuss-Rechner (EÜR)</li>
            <li>Gewinn- und Verlustrechner (GuV)</li>
            <li>Kalkulationen für kurz- bis langfristige Projekte</li>
            <li>Brutto-Netto-Rechner für Arbeitnehmer</li>
            <li>Brutto-Netto-Rechner für Arbeitgeber</li>
            <li>und viele andere auf Nachfrage</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Business-Pläne</h3>
          <ul className="contentUL">
            <li>Geschäftsgründung</li>
            <li>Neue Projekte</li>
            <li>Krediterhaltung bei Banken</li>
            <li>Große Einkäufe</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Existenzgründung</h3>
          <ul className="contentUL">
            <li>Beratung für Existenzgründer</li>
            <li>Unternehmensform</li>
            <li>Kalkulationen</li>
            <li>Erstellung von Business-Plänen</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Präsentationen</h3>
          <ul className="contentUL">
            <li>für Kunden</li>
            <li>für Verkauf und Vertrieb</li>
            <li>für Investoren</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Excel-Tabellenkalkulation</h3>
          <ul className="contentUL">
            <li>Organisation der Geschäftsprozesse</li>
            <li>Überblick über Ihre Geldbewegungen</li>
            <li>Nachhilfe</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Übersetzungen aller Art</h3>
          <ul className="contentUL">
            <li>Deutsch</li>
            <li>Englisch</li>
            <li>Russisch</li>
            <li>Spanisch</li>
            <li>Andere Sprachen auf Nachfrage</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">
            Führung von Geschäfts- und Privatkorrespondenz aller Art
          </h3>
          <ul className="contentUL">
            <li>Ausfüllen von Formularen</li>
            <li>Schriftverkehr</li>
            <li>Geschäftliche Korrespondenz</li>
          </ul>
        </div>
        <div className="ml-5 mt-5">
          <h3 className="checkmarkedHeader">Marktforschung</h3>
          <ul className="contentUL">
            <li>Produktforschung und Produktanalyse</li>
            <li>Branchenanalyse</li>
            <li>Marktanalyse</li>
            <li>Marketingforschung</li>
            <li>Wettbewerbs-/Konkurrenzanalyse</li>
            <li>Zielgruppenanalyse</li>
            <li>Standortanalyse</li>
          </ul>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
