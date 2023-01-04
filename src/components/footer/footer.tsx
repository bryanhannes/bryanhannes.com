import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.scss?inline";
import Socials from "~/components/socials/socials";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    year: new Date().getFullYear(),
  });

  return (
    <footer class="footer-wrapper">
      <div class="container">
        <div class="footer">
          <Socials />
          <ul class="footer__menu">
            <li>
              <span>&copy; Bryan Hannes | 2022 - {state.year}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});
