import { component$ } from "@builder.io/qwik";

import TeamImage from '../../assets/wienervereinteam.jpg';

export default component$(() => {
  return (
    <section class="bg-white">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Wer sind wir?
          </h2>
          <p class="mb-4">Wiener Verein Bestattungsvorsorge Tirol Vorarlberg</p>
          <p>
            Wir sind ein Team besteht aus erfahrenen und einfühlsamen Experten
            auf dem Gebiet der Bestattungsvorsorge. Wir arbeiten eng mit
            Bestattern und anderen Dienstleistern zusammen, um für Sie eine
            individuelle und würdevolle Bestattung zu organisieren. Unsere
            Mitarbeiter sind jederzeit für Sie da und begleiten Sie in jeder
            Phase der Vorsorge. Wir nehmen uns Zeit für Ihre Fragen und Anliegen
            und stehen Ihnen mit unserer Erfahrung und Kompetenz zur Seite.
          </p>
        </div>
        <div class="mt-8">
          <img
            class="w-full rounded-lg"
            src={TeamImage}
            alt="office content 1"
          />
        </div>
      </div>
    </section>
  );
});
