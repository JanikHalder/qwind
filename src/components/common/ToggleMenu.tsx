import { PropFunction, component$, useStore } from "@builder.io/qwik";

import { IconMenu } from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
  show$: PropFunction<() => boolean>;
}

export default component$((props: ItemProps) => {
  const iconClass = props.iconClass;

  const store = useStore({
    isExpanded: false,
  });

  return (
    <button
      type="button"
      class={`ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition ${
        store.isExpanded ? "expanded" : ""
      }`}
      aria-label="Toggle Menu"
      onClick$={() => {
        store.isExpanded = store.isExpanded ? false : true;
        props.show$();

        // TODO:
        document.body.classList.toggle("overflow-hidden");
        document.getElementById("header")?.classList.toggle("h-screen");
        //document.getElementById("header")?.classList.toggle("bg-slate-900")
        document.querySelector("#header nav")?.classList.toggle("hidden");
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
