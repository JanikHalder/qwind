import { component$ } from "@builder.io/qwik";


export default component$(() => {
    return (
        <section class="bg-fourth">
            <div class="py-16 pt-24 px-4 mx-auto max-w-screen-xl text-center lg:pt-32 lg:px-12">
                <p class="text-third font-semibold mb-4">Wiener Verein</p>
                <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Bestattungskosten</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">Wie teuer kommt eine Bestattung und welche versteckten Kosten gibt es.</p>
            </div>
        </section>
    )
});