import { component$ } from "@builder.io/qwik";
import { IconArrowDownRight } from "../icons/IconArrowDownRight";

export default component$(() => {
  const items = [
    [
      {
        question: "Welche Vorteile bringt mir der Wiener Verein?",
        answer: `Der Wiener Verein ist ein Spezialist auf dem Gebiet der Bestattungsvorsorge und bietet eine umfassende Absicherung für den Todesfall. Durch die Absicherung der Bestattungskosten und die Ausrichtung der Bestattung nach persönlichen Wünschen können Angehörige entlastet werden. Zusätzlich bietet der Wiener Verein einen umfangreichen Service, wie beispielsweise die Überführung des Verstorbenen oder die Regelung des digitalen Nachlasses.`,
      },
      {
        question: "Kann jeder eine Bestattungsvorsorge abschließen?",
        answer: `Ja, grundsätzlich kann jeder eine Bestattungsvorsorge abschließen. Es gibt keine Altersgrenze oder Gesundheitsprüfung. Eine Bestattungsvorsorge sollte jedoch frühzeitig abgeschlossen werden, um eine ausreichende finanzielle Absicherung zu gewährleisten.`,
      },
      {
        question: "Was ist Bestattungsvorsorge und warum ist sie wichtig?",
        answer: `Bestattungsvorsorge ist die Planung und finanzielle Absicherung Ihrer Bestattung im Voraus. Sie ist wichtig, um sicherzustellen, dass Ihre Wünsche respektiert werden und Ihre Angehörigen nicht mit der Organisation und Finanzierung der Bestattung belastet werden.`,
      },
    ],
    [
      {
        question:
          "Wie viel kostet eine Bestattung und wie kann ich mich finanziell darauf vorbereiten?",
        answer: `Die Kosten für eine Bestattung können je nach Art der Bestattung und den zusätzlichen Leistungen stark variieren. Es ist daher wichtig, sich auf die Kosten vorzubereiten und eine finanzielle Absicherung durch eine Bestattungsvorsorge zu haben.`,
      },
      {
        question: "Was passiert, wenn ich im Ausland versterbe?",
        answer: `Im Falle eines Todes im Ausland muss eine internationale Überführung organisiert werden. Eine Bestattungsvorsorge kann hier helfen, die Kosten und den Aufwand zu minimieren.`,
      },
      {
        question: "Was passiert mit meinem digitalen Nachlass?",
        answer: `Der digitale Nachlass umfasst alle digitalen Konten, die Sie besitzen, wie beispielsweise E-Mail-Konten, Social-Media-Konten oder Cloud-Dienste. Wir regeln ihren auch digitalen Nachlass.`,
      },
    ],
  ];

  return (
    <section class="border-t border-slate-800 bg-white">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p class="text-third font-bold tracking-wide uppercase text-xl">
              FAQs
            </p>
            <h2 class="max-w-lg mb-4 text-black text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
              Die wichtigsten Fragen
            </h2>
          </div>
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
            {items.map((subitems) => (
              <div class="space-y-8">
                {subitems.map(({ question, answer }) => (
                  <div>
                    <h3 class="mb-4 text-xl font-bold text-black">
                      <IconArrowDownRight class="w-7 h-7 text-third inline-block" />
                      {question}
                    </h3>
                    {answer.split("\n\n").map((paragraph) => (
                      <p class="text-gray-700 mb-2">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
