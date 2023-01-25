import { component$, useStore } from "@builder.io/qwik";
import Socials from "~/components/socials/socials";

export default component$(() => {
  const state = useStore({
    year: new Date().getFullYear(),
  });

  return (
    <footer class="bg-brown">
      <div class="container mx-auto">
        <div class="flex justify-between py-5 gap-1">
          <Socials />
          <div class="text-white">
            &copy; bryanhannes.com | 2022 - {state.year}
          </div>
        </div>
      </div>
    </footer>
  );
});
