import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Socials from "~/components/socials/socials";

export default component$(() => {
  return (

    <header class="bg-beige-100">
      <div class="container flex justify-between items-center m-auto">
        <Link href="/">
          <img
            class="w-20 m-5"
            src="/assets/bryan-hannes-logo.svg"
            alt="Bryan Hannes logo"
          />
        </Link>
        <ul class="flex gap-3 align m-0">
          <li >
            <Link href="/" class="duration-200 transition-all no-underline text-black hover:text-orange" > Home </Link>
          </li>
          <li>
            <Link href="/about" class="duration-200 transition-all no-underline text-black hover:text-orange" > About </Link>
          </li>
          <li>
            <Link href="/projects" class="duration-200 transition-all no-underline text-black hover:text-orange" > Projects </Link>
          </li>
          <li>
            <Link href="https://blog.bryanhannes.com" class="duration-200 transition-all no-underline text-black hover:text-orange" > Blog </Link>
          </li>
        </ul>

        <Socials />

      </div>
    </header>
  );
});
