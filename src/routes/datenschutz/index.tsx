import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <div class="h-20 bg-fourth"></div>
      <div class="max-width-[1280px] p-10 bg-fourth text-white">
        <h1 class="font-bold text-3xl pt-10 pb-5">Datenschutz</h1>
        <p class="py-2">
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
          Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
          ausführlich über den Umgang mit Ihren Daten.
        </p>
        <p class="py-2">
          Die Verantwortung für die von Bestattungsvorsorge tirol-vorarlberg
          Maier & Jenewein verarbeiteten personenbezogene Daten unterliegt
          Jenewein Siegfried, Eduard-Bodem Gasse 11 6020 Innsbruck. Sie
          erreichen uns per E-Mail info@wvtirol.at oder Telefon +43 50 350 69000
        </p>
        <p class="py-2">
          Wenn Sie Verbraucher sind, wird bei Streitigkeiten über entgeltliche
          Verträge die Schlichtungsstelle für Verbrauchergeschäfte
          (www.verbraucherschlichtung.or.at) als außergerichtliche
          Streitschlichtungsstelle tätig. Sie können bei derartigen
          Streitigkeiten diese Schlichtungsstelle anrufen. Bitte nehmen Sie zur
          Kenntnis, dass wir nicht verpflichtet sind, diese Stelle zur
          Streitschlichtung einzuschalten oder uns ihr zu unterwerfen, und dass
          wir im Falle einer Streitigkeit erst entscheiden werden, ob einem
          außergerichtlichen Schlichtungsverfahren zugestimmt wird oder nicht.
        </p>
        <p class="py-2">
          Soweit auf unseren Seiten personenbezogene Daten (beim
          Kontaktformular, der Anmeldung zum Newsletter) erhoben werden, erfolgt
          dies stets auf freiwilliger Basis und ausschließlich zum direkt dort
          angeführten Zweck. Diese Daten werden gemäß Art 6 Abs 1 lit a DSGVO
          aufgrund Ihrer Einwilligung (beim Kontaktformular) oder gemäß Art 6
          Abs 1 lit f DSGVO aufgrund unserer berechtigten Interessen an
          Direktwerbung (bei der Anmeldung zum Newsletter) rechtmäßig
          verarbeitet. Diese Daten werden bis zur Erfüllung des jeweiligen
          Zwecks (Kontaktaufnahme entsprechend der Anfrage im Kontaktformular,
          bis zur Abmeldung vom Newsletter) gespeichert und nach Erreichung
          dieses Zwecks wieder gelöscht. Eine Weitergabe dieser Daten an Dritte
          erfolgt nicht. Sie haben jederzeit gemäß Art 7 DSGVO die Möglichkeit,
          Ihre Einwilligung zu widerrufen.
        </p>
        <div class="py-5">
          <p>Telefon: +43 50 350 69000</p>
          <p>Mobil: +43 664 1575629</p>
          <p>E-Mail: info@wvtirol.at</p>
        </div>

        <h2 class="font-bold text-xl pt-10 pb-5">
          Bezüglich sämtlicher Datenverarbeitungen haben Sie folgende Rechte:
        </h2>
        <p class="py-2">
          Auskunftsrecht (Art 15 DSGVO) Wir haben Ihnen auf Antrag binnen eines
          Monats Auskunft über die verarbeiteten personenbezogenen Daten und den
          Zweck der Verarbeitung zu erteilen
        </p>
        <p class="py-2">
          Recht auf Berichtigung (Art 16 DSGVO) Bei unrichtigen bzw.
          unvollständigen Daten können Sie Berichtigung verlangen.
        </p>
        <p class="py-2">
          Recht auf Löschung (Art 17 DSGVO) Wir müssen Daten löschen, wenn sie
          für die Zwecke der Verarbeitung nicht notwendig sind, Sie ihre
          Einwilligung widerrufen (sofern kein anderer, zusätzlicher
          Erlaubnistatbestand für die Verarbeitung vorliegt) oder die Daten
          unrechtmäßig verarbeitet wurden.
        </p>
        <p class="py-2">
          Recht auf Einschränkung der Verarbeitung (Art 18 DSGVO) Sie können
          eine Einschränkung der Verarbeitung fordern, wenn Ihre Daten etwa nur
          mehr zu bestimmten Zwecken verwendet werden sollen.
        </p>
        <p class="py-2">
          Recht auf Datenübertragbarkeit (Art 20 DSGVO) Sie können verlangen,
          die von Ihnen verarbeiteten Daten in einem strukturierten, gängigen
          und maschinenlesbaren Format zu erhalten und dass diese an andere
          Verantwortliche übermittelt werden sollen.
        </p>
        <p class="py-2">
          Recht auf Widerspruch (Art 21 DSGVO) Bei Verarbeitungen, die auf Basis
          eines öffentlichen Interesses oder unseres berechtigten Interesses
          erfolgen, können Sie Widerspruch erheben.
        </p>
        <p class="py-2">
          Widerrufsrecht (Art 7 Abs 3 DSGVO) Einwilligungen können von Ihnen
          jederzeit und ohne Begründung widerrufen werden. Sie können dies durch
          Versenden einer Nachricht an unsere E-Mail-Adresse info@wvtirol.at
          vornehmen.
        </p>
        <p class="py-2">
          Beschwerde an die Datenschutzbehörde Nähere Ausführungen zu diesen
          Rechten finden Sie in der deutsche Fassung der DSGVO unter folgendem
          Link:
          http://eur-lex.europa.eu/legal-content/DE/TXT/PDF/?uri=CELEX:32016R0679&from=DE
        </p>
        <p class="py-2">
          Bitte beachten Sie, dass Sie zur Ausübung dieser Rechte Ihre Identität
          in einer geeigneten Form nachweisen müssen. Ohne diesen Nachweis würde
          die Gefahr bestehen, dass Unbefugte an Ihre Daten gelangen können.
        </p>
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
  ],
};
