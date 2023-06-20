import { $, component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import emailjs from "@emailjs/browser";

export default component$(() => {
    const email = useSignal('');
    const subject = useSignal('');
    const message = useSignal('');
    const loading = useSignal(false);

   const sendEmail = $(() => {
    loading.value = true;
    
    emailjs.send(
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
    .then((response) => {
      alert("Deine Nachricht wurde versendet wir melden uns schnellstmöglich.");
      message.value = '';
      subject.value = '';
      email.value = '';
      loading.value = false;
    },
    (error: any) => {
      console.log(error);
  
      alert("Etwas ist schiefgelaufen, versuche es bitte nochmal.");
    })
  });

    return (
        <section class="bg-white dark:bg-gray-900" id="contact">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Kontaktiere uns</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Du hast Fragen zu unseren Leistungen? Kontaktiere uns.</p>
                <form preventdefault:submit class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Deine E-Mail Adresse</label>
                        <input bind:value={email} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@deinemail.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thema</label>
                        <input bind:value={subject} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm " placeholder="Um was geht es?" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deine Nachricht</label>
                        <textarea bind:value={message} rows={10} id="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 " placeholder="Schreib uns eine Nachricht ..."></textarea>
                    </div>
                    <button onClick$={() => {
                        sendEmail();
                    }} preventdefault:submit class="py-3 px-5 text-xl font-bold text-center text-white rounded-lg bg-third sm:w-fit hover:bg-fourth focus:ring-4 focus:outline-none focus:ring-third">{loading.value ? "Wird gesendet..." : "Nachricht senden"}</button>
                </form>
            </div>
        </section>
    )
})