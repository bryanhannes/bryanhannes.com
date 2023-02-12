import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="bg-white">
      <div class="container flex  flex-col sm:flex-row justify-between items-center m-auto">
        <Link href="/">
          <img
            class="w-20 my-3"
            src="/assets/bryan-hannes-logo.svg"
            alt="Bryan Hannes logo"
          />
        </Link>
        <ul class="flex gap-8 align m-0 display-none pb-4 sm:pb-0">
          <li>
            <Link
              href="/"
              class="duration-200 transition-all no-underline text-black hover:text-orange"
            >
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              class="duration-200 transition-all no-underline text-black hover:text-orange"
            >
              {" "}
              About me{" "}
            </Link>
          </li>
          <li>
            <Link
              href="https://blog.bryanhannes.com"
              class="duration-200 transition-all no-underline text-black hover:text-orange"
            >
              {" "}
              Blog{" "}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
