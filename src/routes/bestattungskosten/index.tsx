import { component$ } from "@builder.io/qwik";
import BenefitsBestattungskosten from "~/components/widgets/BenefitsBestattungskosten";
import CTA from "~/components/widgets/CTA";
import ContentKosten from "~/components/widgets/ContentKosten";
import HeroKosten from "~/components/widgets/HeroKosten";
import Stats from "~/components/widgets/Stats";
import type { DocumentHead } from "@builder.io/qwik-city";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <HeroKosten />
      <ContentKosten />
      <BenefitsBestattungskosten />
      <Stats />
      <CTA />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "Bestattungskosten im Vergleich",
      content: SITE.description,
    },
  ],
};
