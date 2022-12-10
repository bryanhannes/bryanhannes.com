import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

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
            <li>
              <Link href="/"> Who is Bryan? </Link>
            </li>
            <li>
              <Link href="https://blog.bryanhannes.com"> Blog </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
