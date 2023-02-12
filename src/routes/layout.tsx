import { component$, Slot } from "@builder.io/qwik";
import CookieConsent from "~/components/cookie-consent/cookie-consent";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
});
