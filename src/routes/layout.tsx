import { component$, Slot } from "@builder.io/qwik";
import CookieConsent from "~/components/cookie-consent/cookie-consent";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="bg-beige-200">
        <div class="container m-auto">
          <Slot />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
});
