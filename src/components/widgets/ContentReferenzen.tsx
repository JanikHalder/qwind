import { component$ } from "@builder.io/qwik";

export default component$(() => {
    const content = [
        {
            name: "Familie Wolny",
            text: " Verabschiedung Franz Wolny ",
            firma: "Rum"
        },
        {
            name: "Familie Triendl",
            text: "Verabschiedung Anna Jenewein",
            firma: "Innsbruck"
        },
        {
            name: "Familie Parth",
            text: "Verabschiedung Anton und Anna Parth",
            firma: "Innsbruck"
        },
        {
            name: "Familie Pechlaner",
            text:  "Verabschiedung Ernst Pechlaner",
            firma: "Innsbruck"
        },
        {
            name: "Familie Lenniger",
            text:  "Verabschiedung Luis Lenninger",
            firma: "Innsbruck"
        },
        {
            name: "Familie Mayr/Rametta",
            text:  "Verabschiedung Erna Raschbichler",
            firma: "Innsbruck"
        },
        {
            name: "Familie Kreis",
            text:  "Verabschiedung Peter Kreis",
            firma: "Innsbruck"
        },
        {
            name: "Familie Niederwieser",
            text:  "Verabschiedung Franz Niederwieser",
            firma: "Innsbruck"
        },
        {
            name: "Familie Zabernig",
            text:  "Verabschiedung Manfred Zabernig",
            firma: "Innsbruck"
        },
        {
            name: "Familie Mitterer",
            text:  "Verabschiedung Rudolph Mitterer",
            firma: "Innsbruck"
        },
        {
            name: "Familie Erika Maier",
            text:  "Verabschiedung Andy Spörl",
            firma: "Innsbruck"
        },
        {
            name: "Familie Schweiger",
            text:  "Verabschiedung Roland Schweiger",
            firma: "Innsbruck"
        },
        {
            name: "Familie Frötscher",
            text:  "Verabschiedung Franz Frötscher",
            firma: "Innsbruck"
        },
        {
            name: "Familie Fussenegger",
            text:  "Verabschiedung Martin und Hardy Fussenegger",
            firma: "Dornbirn"
        },
        {
            name: "Familie Urban",
            text:  "Verabschiedung Gerfried Urban",
            firma: "München"
        },
        {
            name: "Familie Zoppel",
            text:  "Verabschiedung Roland Zoppel",
            firma: "Nenzing"
        },
        {
            name: "Familie Eigner",
            text:  "Verabschiedung Helmut Eigner",
            firma: "Schruns"
        },
        {
            name: "Familie Ellensohn",
            text:  "Verabschiedung Elas und Kurt Ellensohn",
        },
        {
            name: "Familie Buhri",
            text:  "Verabschiedung Edgar Buhri",
            firma: "Feldkirch"
        },

    ]

    return (
        <section class="relative pt-24 pb-32 bg-white overflow-hidden">
            <div class="relative z-10 container px-4 mx-auto">
                <h2 class="mb-16 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">Einen Auszug unserer Kunden</h2>
                <div class="flex flex-wrap -m-3">
                {content.map((people) => 
                    <div class="w-full md:w-1/2 lg:w-1/3 p-3 rounded-sm" key={people.name}>
                        <div class="p-6 h-full bg-white bg-opacity-60 border rounded-4xl rounded-xl">
                            <div class="flex flex-col justify-between h-full">
                                <div class="mb-5 block">
                                <div class="flex flex-wrap mb-4 -m-2">
                                    {/* <div class="p-2 w-16 overflow-hidden rounded-full">
                                        <img src="https://media.istockphoto.com/id/1167753373/vector/woman-avatar-isolated-on-white-background-vector-illustration-for-your-design.jpg?s=612x612&w=0&k=20&c=Y2a_YXRjZ3bXa3Jn2EStSXv7hJly0uEkdlWk4tdbI6U=" alt=""/>
                                    </div> */}
                                    <div class="w-auto p-2">
                                    <h3 class="font-semibold leading-normal">{people.name}</h3>
                                    <p class="text-gray-500 uppercase">{people.firma}</p>
                                    </div>
                                </div>
                                <p class="text-lg font-medium">{people.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <div class="pt-3 w-full text-xl font-bold text-center">
                    <p>Und viele mehr …</p>
                </div>
            </div>
        </section>
    )
})