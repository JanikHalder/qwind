import { component$ } from "@builder.io/qwik";

import { IconFlame } from "../icons/IconFlame";
import { IconPuzzle } from "../icons/IconPuzzle";
import { IconStars } from "../icons/IconStars";

export default component$(() => {
    const items = [
        [
            { 
                title: "Sofortschutz – Keine Gesundheitsfragen",
                list: [
                    "Voller Anspruch bei Unfalltod (auch der Überführungskosten und -leistung).",
                    "bei Tod durch Krankheit werden die einbezahlten Prämien inkl. Gewinnanteil geleistet.",
                    "Ab dem dritten Jahr voller Anspruch auf alle Leistungen.",
                ],
                icon: IconFlame,
            },
            {
                title: "Lebenslanger Schutz",
                list: [
                    "Auch wenn keine Prämien mehr bezahlt werden",
                ],
                icon: IconPuzzle,
            },
            {
                title: "Zusatz-Absicherung",
                list: [
                    "Sofortschutz: bei Tod durch Krankheit in den ersten drei Jahren möglich.",
                    "Unfalltod: Verdopplung der Versicherungssumme nach Tod durch Unfall.",
                ],
                icon: IconStars,
            },
            {
                title: "Im Ernstfall – Direktverrechnung",
                list: [
                    "Sofortige unkomplizierte Direktverrechnung mit Bestattungsunternehmen.",
                    "Abdeckung der Nebenkosten: Blumen, Kränze, Bewirtung der Trauergäste, Notar, Steinmetz, Friedhofsgebühren, …",
                    "Unkomplizierte Auszahlung des Restkapitals ohne Verlassenschaftsverfahren an die Hinterbliebenen.",
                ],
                icon: IconFlame,
            },
            {
                title: "Ausrichtung der Bestattung nach persönlichen Wünschen",
                list: [
                    "Persönliche Wünsche zur Gestaltung",
                    "Beruhigung und Sicherheit auch für alleinstehende Menschen.",
                    "Alternative Bestattungsformen: Erinnerungsdiamant, Seebestattung und Naturbestattung werden organisiert und bezahlt.",
                ],
                icon: IconPuzzle,
            },
            {
                title: "Weltweites Überführungsservice",
                list: [
                    "Rasch, unbürokratisch wird die Heimholung (Transportkosten, Gebühren, Spesen) im Ablebensfall, organisiert und bezahlt: Inland und Ausland.",
                ],
                icon: IconStars,
            },
            {
                title: "Soforthilfe – wir kümmern uns um Sie",
                list: [
                    "Wir helfen Ihnen und den Hinterbliebenen bei Fragen unmittelbar weiter, begleiten Sie im Ernstfall und kontrollieren die Erfüllung.",
                ],
                icon: IconFlame,
            },
            {
                title: "Hilfe in der Organisation",
                list: [
                    "Vorsorgeleitfaden: Wünsche der versicherten Person werden erhoben. Alles Wichtige rund ums Ableben ist für die Hinterbliebenen übersichtlich dargestellt.",
                    "Digitaler Nachlass-Service: Wir erledigen für Sie die erforderlichen Abmeldungen nach einem Todesfall.",
                ],
                icon: IconPuzzle,
            }
        ]
    ]


    return (
        <section class="bg-white">
            <div class="container px-6 py-10 mx-auto max-w-screen-xl">
                <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Unsere Alleinstellungs-<br/><span class="underline decoration-third">Merkmale</span></h2>

                <p class="mt-4 text-gray-500 xl:mt-6 ">
                    Einzigartige Vorteile: Sofortschutz, lebenslanger Schutz und Ausrichtung nach persönlichen Wünschen.
                </p>
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {items.map((subItem) => (
                    subItem.map(({title, list, icon: Icon}) => (
                        <div key={`index-${title}`} class="p-8 space-y-3 border-2 border-third rounded-xl">    
                            {Icon && <Icon />}                            

                            <h3 class="text-xl font-semibold text-gray-700 capitalize ">{title}</h3>
                            <ol class="list-disc">
                            {list.map((listitem) => (
                                <li key={`index-${listitem}`}>
                                    <p class="text-gray-500">
                                        {listitem}
                                    </p>
                                </li>
                                ))}
                            </ol>
                        </div>
                    ))
                ))}
                </div>
            </div>
        </section>
    )
})