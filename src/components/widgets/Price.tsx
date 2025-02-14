import React, { component$, useStore, useSignal, $ } from "@builder.io/qwik";
import emailjs from "@emailjs/browser";

export default component$(() => {
  const nameFirst = useSignal("");
  const name = useSignal("");
  const email = useSignal("");
  const tel = useSignal("");
  const message = useSignal("");
  const year = useSignal("");
  const month = useSignal("");
  const day = useSignal("");
  const adress = useSignal("");
  const plz = useSignal("");
  const stadt = useSignal("");
  const paket = useSignal("");
  const others = useSignal(false);
  const loading = useSignal(false);

  const popUpState = useStore({
    value: false,
    text: "",
  });

  const sendEmail = $(() => {
    loading.value = true;

    emailjs
      .send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: nameFirst.value + " " + name.value,
          to_name: "Janik Halder",
          from_email: email.value,
          to_email: "info@janikhalder.com",
          tel: tel.value,
          birthday: day.value + "." + month.value + "." + year.value,
          adress: adress.value + " / " + plz.value + " / " + stadt.value,
          paket: paket.value,
          others: others.value ? "Ja" : "Nein",
          message: "",
          subject: "",
        },
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Danke für deine Anfrage. Wir melden uns schnellstmöglich.");
          nameFirst.value = "";
          name.value = "";
          email.value = "";
          tel.value = "";
          message.value = "";
          year.value = "";
          month.value = "";
          adress.value = "";
          day.value = "";
          plz.value = "";
          stadt.value = "";
          paket.value = "";
          others.value = false;
          loading.value = false;
        },
        (error: any) => {
          console.log(error);

          alert("Etwas ist schiefgelaufen, versuche es bitte nochmal.");
        }
      );
  });

  const dateState = useStore({
    datenow: new Date(),
  });

  const getDays$ = () => {
    const allDays = [];
    for (let day = 1; day <= 31; day++) {
      allDays.push(day);
    }
    return allDays;
  };

  const getYears$ = () => {
    const allYears = [];
    const getTodayYear = dateState.datenow.getFullYear();
    for (let day = getTodayYear; day >= getTodayYear - 100; day--) {
      allYears.push(day);
    }
    return allYears;
  };

  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  return (
    <section class="bg-fourth">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl sm:text-6xl tracking-tight font-extrabold text-white">
            Unsere Pakete
          </h2>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 items-start">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border shadow border-gray-600 xl:p-8 ">
            <h3 class="mb-4 text-2xl font-semibold">Basis</h3>
            <p class="font-light text-gray-500 sm:text-lg mb-8">
              Das kleine Paket, um Ihre Bedüfnisse abzudecken
            </p>
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Sofortschutz</span> – keine
                  Gesundheitsfragen
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Direktverrechnung Bestatter</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Lebenslanger</span>{" "}
                  Versicherungsschutz
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">keine finanzielle Belastung</span>{" "}
                  der Hinterbliebenen
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="font-semibold">Gewinnanteile</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Weltweites{" "}
                  <span class="font-semibold">Überführungsservice klein</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Bestattung nach{" "}
                  <span class="font-semibold">individuellen Wünschen</span>
                </span>
              </li>
            </ul>
            <button
              onClick$={() => {
                popUpState.value = true;
                popUpState.text = "Basis";
              }}
              class="text-white bg-third hover:bg-fourth font-bold rounded-lg text-xl px-5 py-2.5 text-center hover:scale-105 ease-in-out transition duration-700"
            >
              Paket anfragen
            </button>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border shadow border-gray-600 xl:p-8">
            <h3 class="mb-4 text-2xl font-semibold">Tradition</h3>
            <p class="font-bold text-third sm:text-lg mb-8">
              Unser Top - Seller.
            </p>
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Sofortschutz</span> – keine
                  Gesundheitsfragen
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Direktverrechnung Bestatter</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Lebenslanger</span>{" "}
                  Versicherungsschutz
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">keine finanzielle Belastung</span>{" "}
                  der Hinterbliebenen
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="font-semibold">Gewinnanteile</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Weltweites{" "}
                  <span class="font-semibold">Überführungsservice mittel</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Bestattung nach{" "}
                  <span class="font-semibold">individuellen Wünschen</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  {" "}
                  <span class="font-semibold">Unfalltod</span>
                  -Zusatzversicherung
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  {" "}
                  <span class="font-semibold">Leitfaden</span> zur Orientierung
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Abdeckung der Nebenkosten</span>
              </li>
            </ul>
            <button
              onClick$={() => {
                popUpState.value = true;
                popUpState.text = "Tradition";
              }}
              class="text-white bg-third hover:bg-fourth  font-bold rounded-lg text-xl px-5 py-2.5 text-center hover:scale-105 ease-in-out transition duration-700"
            >
              Paket anfragen
            </button>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 ">
            <h3 class="mb-4 text-2xl font-semibold">Prestige</h3>
            <p class="font-light text-gray-500 sm:text-lg mb-8">
              Das Rund-Um Sorglospaket. Für alle die nichts dem Zufall
              überlassen wollen.
            </p>
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Sofortschutz</span> – keine
                  Gesundheitsfragen
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Direktverrechnung Bestatter</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Lebenslanger</span>{" "}
                  Versicherungsschutz
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">keine finanzielle Belastung</span>{" "}
                  der Hinterbliebenen
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="font-semibold">Gewinnanteile</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Weltweites{" "}
                  <span class="font-semibold">Überführungsservice groß</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Bestattung nach{" "}
                  <span class="font-semibold">individuellen Wünschen</span>
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Unfalltod</span>
                  -Zusatzversicherung
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold">Leitfaden</span> zur Orientierung
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Abdeckung der Nebenkosten</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Abdeckung der Folgekosten</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Digitale Nachlass</span>
              </li>
            </ul>
            <button
              onClick$={() => {
                popUpState.value = true;
                popUpState.text = "Prestige";
              }}
              class="text-white bg-third hover:bg-fourth font-bold rounded-lg text-xl px-5 py-2.5 text-center hover:scale-105 ease-in-out transition duration-700"
            >
              Paket anfragen
            </button>
          </div>
        </div>
      </div>
      {popUpState.value && (
        <div class="absolute">
          <qwik-fragment>
            <div class="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
              <div
                class="fixed inset-0 transition-opacity"
                aria-hidden="true"
                onClick$={() => (popUpState.value = false)}
              >
                <div class="absolute inset-0 bg-black opacity-75"></div>
              </div>
              <div
                class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div class="sm:flex sm:items-start">
                  <div class="w-full sm:mx-auto">
                    <div class="aspect-w-16 aspect-h-9">
                      <div class=" px-4 mx-auto w-full sm:max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                          Anfragen
                        </h2>
                        <form preventdefault:submit class="space-y-4">
                          <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 ">
                              Kontaktdaten
                            </label>
                          </div>
                          <div class="flex flex-row justify-center items-center gap-4">
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              bind:value={nameFirst}
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Vorname"
                              required
                            />
                            <input
                              type="text"
                              id="lname"
                              name="lname"
                              bind:value={name}
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third   block w-full p-2.5 "
                              placeholder="Nachname"
                              required
                            />
                          </div>

                          <div class="flex flex-row justify-center items-center gap-4">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              bind:value={email}
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Deine E-Mail"
                            />
                            <input
                              type="tel"
                              id="tel"
                              name="tel"
                              bind:value={tel}
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Deine Telefonnummer"
                              required
                            />
                          </div>
                          <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 ">
                              Deine Geburtsdatum
                            </label>
                          </div>
                          <div class="grid grid-cols-3 gap-4">
                            <div>
                              <div class="relative mt-1">
                                <select
                                  name="day"
                                  id="day"
                                  bind:value={day}
                                  class="block appearance-none w-full py-2 px-3 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Tag</option>

                                  {getDays$().map((day, index) => (
                                    <option key={day} value={index}>
                                      {day.toString()}
                                    </option>
                                  ))}
                                </select>
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    class="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M19 9l-7 7-7-7"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="relative mt-1">
                                <select
                                  name="month"
                                  id="month"
                                  bind:value={month}
                                  class="block appearance-none w-full py-2 px-3 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Monat</option>
                                  {months.map((month) => (
                                    <option
                                      key={`month-${month}`}
                                      value={month}
                                    >
                                      {month}
                                    </option>
                                  ))}
                                </select>
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    class="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M19 9l-7 7-7-7"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="relative mt-1">
                                <select
                                  name="year"
                                  id="year"
                                  bind:value={year}
                                  class="block appearance-none w-full py-2 px-3 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Jahr</option>
                                  {getYears$().map((year) => (
                                    <option key={`year-${year}`} value={year}>
                                      {year.toString()}
                                    </option>
                                  ))}
                                </select>
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    class="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M19 9l-7 7-7-7"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 ">
                              Deine Adresse
                            </label>
                          </div>
                          <div>
                            <input
                              type="text"
                              id="adress"
                              name="adress"
                              bind:value={adress}
                              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Adresse"
                            />
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div>
                              <input
                                type="text"
                                id="plz"
                                name="plz"
                                bind:value={plz}
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                                placeholder="Postleitzahl"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                id="stadt"
                                name="stadt"
                                bind:value={stadt}
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                                placeholder="Stadt / Ort"
                              />
                            </div>
                          </div>

                          <div class="flex flex-row justify-center items-center">
                            <label class="block mb-2 text-sm font-medium text-gray-900 w-full">
                              Paket
                            </label>
                            <input
                              name="paket"
                              value={popUpState.text}
                              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                              disabled
                            />
                          </div>
                          <div class="flex flex-row justify-center items-center">
                            <label class="block mb-2 text-sm font-medium text-gray-900 w-full">
                              Auch andere Pakete anfragen?
                            </label>
                            <input
                              name="others"
                              onClick$={() => (others.value = !others)}
                              id="yellow-checkbox"
                              type="checkbox"
                              class="w-4 h-4 p-4 accent-third text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2"
                            />
                          </div>
                          <div class="w-full flex justify-center items-center">
                            <button
                              onClick$={() => {
                                sendEmail();
                              }}
                              preventdefault:submit
                              class="text-white bg-third hover:bg-fourth focus:ring-4 focus:ring-primary-200 font-bold rounded-lg text-xl px-5 py-2.5 text-center "
                            >
                              {loading.value ? "Wird gesendet..." : "Anfragen"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick$={() => (popUpState.value = false)}
                  type="button"
                  class="absolute top-0 right-0 bg-fourth text-white w-8 h-8 rounded-full flex items-center justify-center mt-2 mr-2 focus:outline-none hover:scale-105 ease-in-out transition duration-700"
                  aria-label="Close"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </qwik-fragment>
        </div>
      )}
    </section>
  );
});
