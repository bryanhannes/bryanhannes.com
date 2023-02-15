import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Socials from "~/components/socials/socials";

export default component$(() => {
  const state = useStore({
    year: new Date().getFullYear(),
  });

  return (
    <footer class="bg-brown">
      <div class="container mx-auto">
        <div class="flex flex-col sm:flex-row justify-between py-5 gap-1">
          <div class={`mb-4 sm:mb-0`}>
            <Socials />
          </div>
          <div class="flex flex-col sm:flex-row-reverse gap-4">
            <div class="text-white font-medium text-center sm:text-left">
              &copy; 2022 - {state.year} Bryan Hannes
            </div>
            <div class="text-white font-medium text-center sm:text-right">
              <Link
                href="/privacy-policy"
                class="whitespace-nowrap text-white hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
