import { component$ } from "@builder.io/qwik";
import { IconStar } from "~/components/icons/IconStar";

export default component$(() => {
  const items = [
    [
      {
        title: "Die Nummer 1 in der Hinterbliebenenvorsorge.",
        description: "Als Spezialist auf dem Gebiet der Bestattungsvorsorge ist der WIENER VEREIN Ihr kompetenter Ansprechpartner. Wir konzentrieren uns ausschließlich auf die umfassende Vorsorge für den Todesfall.",
        icon: "tabler:brand-tailwind",
      },
      {
        title: "Kooperationspartner der Österreichischen Bestatter:",
        description:
          "Der WIENER VEREIN hat seit Jahrzehnten Kooperationsvereinbarungen mit allen Bestattungsunternehmen Österreichs. Diese bewährte Zusammenarbeit garantiert eine reibungslose und pietätvolle Durchführung der versicherten Leistungen.",
        icon: "tabler:components",
      },
    ],
    [
      {
        title: "Kompetenz und Know-How seit über 100 Jahren.",
        description:
          "Rasche, unbürokratische Soforthilfe, hunderttausende Male bewährt!",
        icon: "tabler:list-check",
      },
      {
        title: "Leistungsstark",
        description:
          `Unser Sofortschutz bietet lebenslangen Schutz und Direktverrechnung mit Bestattern. Wir richten die Bestattung nach Ihren Wünschen aus, ob Feuer-, Erd-, Wiesen-, Baum- oder Seebestattung. Wir können Nebenkosten abdecken und bieten weltweites Überführungsservice sowie eine Unfalltod-Zusatzversicherung und Digitalen Nachlass-Service.`,
        icon: "tabler:rocket",
      },
    ],
  ];

  return (
    <section class="scroll-mt-16 bg-fourth" id="features">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
        <div class="mb-10 md:mx-auto text-center md:mb-12 max-w-3xl">
          <p class="text-base text-white font-bold tracking-wide uppercase pb-4">
            Gründe
          </p>
          <h2 class="text-4xl md:text-5xl text-third font-bold leading-tighter tracking-tighter mb-4 font-heading">
            Warum Wiener Verein?
          </h2>
          <p class="max-w-3xl mx-auto sm:text-center text-xl text-slate-300">
            Sorgenfrei in die Zukunft: Die Vorteile einer Bestattungsvorsorge.
          </p>
        </div>
        <div class="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0 justify-center md:justify-between">
          {items.map((subitems, index) => (
            <div key={`item-${index}`} class="space-y-8 sm:px-8 flex flex-col justify-between">
              {subitems.map(({ title, description }) => (
                <div key={title} class="flex flex-col max-w-md items-center p-6 bg-white rounded-xl text-center h-full">
                  <div class="mb-4 mr-4">
                    <div class="text-white flex items-center justify-center w-12 h-12 rounded-full bg-third">
                      <IconStar />
                    </div>
                  </div>
                  <div>
                    <h3 class="mb-3 text-xl text-black font-bold">{title}</h3>
                    <p class="text-gray-600 text-base">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
