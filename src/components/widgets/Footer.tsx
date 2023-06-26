import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Logo from "~/components/atoms/Logo";

export default component$(() => {
  const links = [
    {
      title: "Infomartionen",
      items: [
        { title: "Leistungen", href: "/leistungen" },
        { title: "Preise", href: "/preise" },
        { title: "Bestattungskosten", href: "/bestattungskosten" },
        { title: "Referenzen", href: "/referenzen" },
        { title: "Team", href: "/team" },
      ],
    },
    {
      title: "Zusätzliche Links",
      items: [
        { title: "Kontakt", href: "/kontakt" },
        { title: "Impressum", href: "/impressum" },
        { title: "Datenschutz", href: "/datenschutz" },
      ],
    },
  ];

  const contact = [
    {
      title: "Kontakt",
      items: [
        { title: "Tel: +43 50 350 69000", href: "tel:+435035069000" },
        { title: "Mail: info@wvtirol.at", href: "mailto:info@wvtirol.at" },
        { title: "6020 Innsbruck", href: "#" },
        { title: "Salurnerstraße 3", href: "#" },
      ],
    },
  ];


  return (
    <footer class="border-t border-gray-200 text-white bg-fourth">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col justify-center lg:grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link
                class="inline-block font-bold text-xl uppercase text-third"
                href={"/"}
              >
                <Logo />
              </Link>
            </div>
            <div class="text-sm text-gray-400">
              Die Bestattungsvorsorge für Tirol und Vorarlberg
            </div>
          </div>
          {links.map(({ title, items }) => (
            <div class="col-span-6 md:col-span-3 lg:col-span-2" key={title}>
              <div class="font-medium mb-2">{title}</div>
              {items && Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }) => (
                    <li class="mb-2" key={title}>
                      <Link
                        class="hover:text-gray-500 text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {contact.map(({ title, items }) => (
            <div class="col-span-6 md:col-span-3 lg:col-span-4" key={title}>
              <div class="font-medium mb-2">{title}</div>
              {items && Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }) => (
                    <li class="mb-2" key={title}>
                      <Link
                        class="hover:text-gray-500 text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          {/* <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  class="text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {Icon && <Icon />}
                </Link>
              </li>
            ))}
          </ul> */}

          <div class="text-sm  mr-4 text-slate-400">
            Made by{" "}
            <a
              class="text-third hover:underline"
              href="https://janikhalder.at/"
            >
              {" "}
              Janik Halder
            </a>{" "}
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
