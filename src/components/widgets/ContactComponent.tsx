import { $, component$, useSignal } from "@builder.io/qwik";
import emailjs from "@emailjs/browser";

export default component$(() => {
  const email = useSignal("");
  const subject = useSignal("");
  const message = useSignal("");
  const loading = useSignal(false);

  const sendEmail = $(() => {
    loading.value = true;

    emailjs
      .send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: "name",
          first_name: "nameFirst",
          to_name: "Janik Halder",
          message: message.value,
          subject: subject.value,
          from_email: email.value,
          to_email: "info@janikhalder.com",
          tel: "tel",
          birthday: "day" + "." + "month" + "." + "year",
          adress: "adress" + " / " + "plz" + " / " + "stadt",
          paket: "paket",
          others: "others",
        },
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert(
            "Deine Nachricht wurde versendet wir melden uns schnellstmöglich."
          );
          message.value = "";
          subject.value = "";
          email.value = "";
          loading.value = false;
        },
        (error: any) => {
          console.log(error);

          alert("Etwas ist schiefgelaufen, versuche es bitte nochmal.");
        }
      );
  });

  return (
    <section class="relative pt-24 pb-36 bg-fourth overflow-hidden">
      <div class="relative z-10 container px-4 mx-auto">
        <h2 class="text-white mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
          Kontakt
        </h2>
        <p class="mb-20 text-lg text-center text-gray-300 font-medium leading-normal md:max-w-lg mx-auto">
          Sicher und einfach: Kontaktieren Sie uns für eine umfassende
          Bestattungsvorsorge.
        </p>

        <div class="py-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
          <form preventdefault:submit class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-300 "
              >
                Deine E-Mail Adresse
              </label>
              <input
                bind:value={email}
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                placeholder="name@deinemail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
              >
                Thema
              </label>
              <input
                bind:value={subject}
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
                placeholder="Um was geht es?"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400"
              >
                Deine Nachricht
              </label>
              <textarea
                bind:value={message}
                rows={10}
                id="message"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                placeholder="Schreib uns eine Nachricht ..."
              ></textarea>
            </div>
            <button
              onClick$={() => {
                sendEmail();
              }}
              preventdefault:submit
              class="py-3 px-5 text-xl font-bold text-center text-white rounded-lg bg-third sm:w-fit hover:bg-fourth focus:ring-4 focus:outline-none focus:ring-third"
            >
              {loading.value ? "Wird gesendet..." : "Nachricht senden"}
            </button>
          </form>
        </div>

        <div class="flex flex-wrap -m-3">
          <div class="w-full md:w-1/3 p-3  hover:scale-105 ease-in-out transition duration-700">
            <a href="mailto:info@wvtirol.at">
              <div class="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div class="mb-6 relative mx-auto w-16 h-16 bg-third rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 class="mb-3 text-xl font-bold font-heading leading-snug">
                  Sende uns eine Email
                </h3>
                <p class="font-medium leading-relaxed">info@wvtirol.at</p>
              </div>
            </a>
          </div>
          <div class="w-full md:w-1/3 p-3 hover:scale-105 ease-in-out transition duration-700">
            <a href="tel:+4350 350 69000">
              <div class="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div class="mb-6 relative mx-auto w-16 h-16 bg-third border border-blueGray-200 rounded-full">
                  <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 class="mb-3 text-xl font-bold font-heading leading-snug">
                  Rufe uns an
                </h3>
                <p class="font-medium leading-relaxed">+43 50 350 69000</p>
              </div>
            </a>
          </div>
          <div class="w-full md:w-1/3 p-3">
            <div class="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
              <div class="mb-6 relative mx-auto w-16 h-16 bg-third border border-blueGray-200 rounded-full">
                <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    width="32"
                    height="33"
                    viewbox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 class="mb-3 text-xl font-bold font-heading leading-snug">
                Adresse
              </h3>
              <p class="font-medium max-w-xs mx-auto leading-relaxed">
                6020 Innsbruck, Salurnerstraße 3, Österreich
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
