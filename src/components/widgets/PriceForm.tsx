// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";


function PriceForm({ text }: any) {
    //const formRef = useRef();
    const formRef = useRef<HTMLFormElement>(null!);
    const [form, setForm] = useState({
      name: "",
      nameFirst: "",
      email: "",
      tel: "",
      paket: "",
      state: "",
      plz: "",
      adress: "",
      day: "",
      month: "",
      year: "",
      others: false,
    });

    // formRef.current?.focus(); //Object is possibly 'null'
  

    const [dateState, setDateState] = useState({
        datenow: new Date(),
      });
    
      const getDays = () => {
        const allDays = [];
        for (let day = 1; day <= 31; day++) {
          allDays.push(day);
        }
        return allDays;
      }
    
      const getYears = () => {
        const allYears = [];
        const getTodayYear = dateState.datenow.getFullYear();
        for (let day = getTodayYear; day >= getTodayYear - 100; day--) {
          allYears.push(day);
        }
        return allYears;
      }
    
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

    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs
          .send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          first_name: form.nameFirst,
          to_name: "Janik Halder",
          from_email: form.email,
          to_email: "info@janikhalder.com",
          tel: form.tel,
          birthday: form.day + "." + form.month + "." + form.year,
          adress: form.adress + " / " + form.plz + " / " + form.state,
          paket: form.paket,
          others: form.others,
        },
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            setForm({
                name: "",
                nameFirst: "",
                email: "",
                tel: "",
                paket: "",
                state: "",
                plz: "",
                adress: "",
                day: "",
                month: "",
                year: "",
                others: false,
            });
        },
        (error: any) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, da ist was schief gelaufen. Probiere es nochmal.");
          }
        )
    }


    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">
                              Kontaktdaten
                            </label>
                          </div>
                          <div className="flex flex-row justify-center items-center gap-4">
                            <input
                              type="text"
                              id="fname"
                              value={form.nameFirst}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Vorname"
                              required
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              id="lname"
                              value={form.name}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third   block w-full p-2.5 "
                              placeholder="Nachname"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="flex flex-row justify-center items-center gap-4">
                            <input
                              type="email"
                              id="email"
                              value={form.email}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Deine E-Mail"
                              onChange={handleChange}
                            />
                            <input
                              type="tel"
                              id="tel"
                              value={form.tel}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Deine Telefonnummer"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">
                              Deine Geburtsdatum
                            </label>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="relative mt-1">
                                <select
                                  name="day"
                                  id="day"
                                  value={form.day}
                                  className="block appearance-none w-full py-2 px-3 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Tag</option>

                                  {getDays().map((day, index) => (
                                    <option key={day} value={index}>
                                      {day.toString()}
                                    </option>
                                  ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-gray-400"
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
                              <div className="relative mt-1">
                                <select
                                  name="month"
                                  id="month"
                                  value={form.month}
                                  onChange={handleChange}
                                  className="block appearance-none w-full py-2 px-3 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-gray-400"
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
                              <div className="relative mt-1">
                                <select
                                  name="year"
                                  id="year"
                                  onChange={handleChange}
                                  value={form.year}
                                  className="block appearance-none w-full py-2 px-3 pr-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Jahr</option>
                                  {getYears().map((year) => (
                                    <option key={`year-${year}`} value={year}>
                                      {year.toString()}
                                    </option>
                                  ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <svg
                                    className="h-5 w-5 text-gray-400"
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
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">
                              Deine Adresse
                            </label>
                          </div>
                          <div>
                              <input
                              type="text"
                              id="adresse"
                              value={form.adress}
                              onChange={handleChange}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Adresse"
                              />
                            </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <input
                              type="text"
                              id="plz"
                              value={form.plz}
                              onChange={handleChange}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Postleitzahl"
                              />
                            </div>
                            <div>
                              <input
                              type="text"
                              id="stadt"
                              onChange={handleChange}
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-third block w-full p-2.5 "
                              placeholder="Stadt / Ort"
                              />
                            </div>
                          </div>

                          <div className="flex flex-row justify-center items-center">
                            <label className="block mb-2 text-sm font-medium text-gray-900 w-full">
                              Paket
                            </label>
                            <p className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm">
                              {text} 
                            </p>
                          </div>
                          <div className="flex flex-row justify-center items-center">
                              <label className="block mb-2 text-sm font-medium text-gray-900 w-full">
                                Auch andere Pakete anfragen?
                              </label>
                              <input onChange={handleChange} onClick={() => form.others = !form.others} id="yellow-checkbox" type="checkbox" className="w-4 h-4 p-4 accent-third text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 focus:ring-2"/>
                          </div>
                          <div className="w-full flex justify-center items-center">
                            <button
                              
                              className="text-white bg-third hover:bg-fourth focus:ring-4 focus:ring-primary-200 font-bold rounded-lg text-xl px-5 py-2.5 text-center "
                            >
                              {loading ? "Wird gesendet..." : "Anfragen"}
                            </button>
                          </div>
                        </form>
    )
}

export const QPriceForm = qwikify$(PriceForm);
