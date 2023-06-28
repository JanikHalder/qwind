import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <div class="h-20 bg-fourth"></div>
      <div class="max-width-[1280px] p-10 bg-fourth text-white">
        <h1 class="font-bold text-3xl pt-10 pb-5">
          Impressum und Offenlegung gemäß § 25 Mediengesetz
        </h1>
        <p>Bestattungsvorsorge tirol-vorarlberg Maier & Jenewein OG</p>
        <p>Gerhard Maier</p>
        <p>Eduard-Bodem Gasse 11</p>
        <p>6020 Innsbruck</p>
        <p>Österreich</p>
        <div class="py-5">
          <p>Telefon: +43 50 350 69000</p>
          <p>Mobil: +43 664 1575629</p>
          <p>E-Mail: info@wvtirol.at</p>
        </div>
        <p>UID: 30885141</p>
        <p>Firmenbuch Nr.: FN 4944866 w</p>
        <p>Firmenbuchgericht: Landesgericht Innsbruck</p>
        <p>Unternehmensgegenstand: Versicherungsagentur</p>
        <p>Zuständige Gewerbebehörde: BH Innsbruck</p>
        <p>
          Berufsrecht: Versicherungsvermittlung in der Form Versicherungsagent.
          Gewerbeordnung: Abrufbar im Internet unter https://www.ris.bka.gv.at/
        </p>
        <p>Mitgliedschaften in Wirtschaftskammerorganisationen: WKO Tirol</p>
        <p>Für den Inhalt verantwortlich: Gerhard Maier</p>
        <div class="py-5">
          <p>Bank: Volksbank Tirol AG</p>
          <p>IBAN: AT58 4239 0030 0002 3423</p>
          <p>BIC: VBOEATWWINN</p>
        </div>

        <h2 class="font-bold text-xl pt-10 pb-5">
          Technische Konzeption und Realisierung
        </h2>
        <p>Janik Halder</p>
        <a href="http://janikhalder.at/">janikhalder.at</a>

        <h2 class="font-bold text-xl pt-10 pb-5">
          Urheberrechte/Haftungsausschluss
        </h2>
        <div class="py-5">
          <p>
            Der Inhalt dieser Website ist urheberrechtlich geschützt. Die
            Bereitstellung von Inhalten und Bildmaterial dieser Website auf
            anderen Websites ist nur mit ausdrücklicher Genehmigung gestattet.
            Die auf der Website enthaltenen Angaben werden nach bestem Wissen
            erstellt und mit großer Sorgfalt auf ihre Richtigkeit überprüft.
            Trotzdem sind inhaltliche und sachliche Fehler nicht vollständig
            auszuschließen. Wir übernehmen deshalb keinerlei Garantie und
            Haftung für die Richtigkeit, Aktualität und Vollständigkeit der
            bereitgestellten Informationen. Alle Angaben sind ohne Gewähr. Diese
            Website enthält weiterführende Informationen von anderen Anbietern
            im Rahmen externer Links. Die damit verlinkten Inhalte wurden von
            Dritten erstellt, stellen keine Inhalte von uns dar und entziehen
            sich inhaltlich auch unserem Einfluss. Eine Haftung für die
            verlinkten Inhalte wird daher ausgeschlossen. Bei Hinweis auf eine
            Rechtswidrigkeit der verlinkten Inhalte werden wir den
            entsprechenden Link sofort entfernen.
          </p>
        </div>
        <p>© ADOBESTOCK: Kzenon, SydaProductions, candy1812</p>
        <p>© Bestattungsvorsorge tirol-vorarlberg Maier & Jenewein</p>
        <p>© DieFotografen</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "impressum",
      content: SITE.description,
    },
    // Open graph
    {
      property: 'og:title',
      content: SITE.title,
    },
    {
      property: 'og:description',
      content: SITE.description,
    },
  ],
};
