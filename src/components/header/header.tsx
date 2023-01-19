import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Socials from "~/components/socials/socials";

export default component$(() => {
  return (
    <header class="site-header" role="banner">
      <div class="container">
        <div class="header">
          <Link href="/">
            <img
              class="header__logo"
              src="/assets/bryan-hannes-logo.svg"
              alt="Bryan Hannes logo"
            />
          </Link>
          <ul class="header__menu">
            <li class="header__menu__item">
              <Link href="/"> Home </Link>
            </li>
            <li class="header__menu__item">
              <Link href="/about"> About </Link>
            </li>
            <li className="header__menu__item">
              <Link href="/projects"> Projects </Link>
            </li>
            <li class="header__menu__item">
              <Link href="https://blog.bryanhannes.com"> Blog </Link>
            </li>
          </ul>
          <div class="header__socials">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
});
