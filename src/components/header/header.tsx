import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useVisibleTask$(() => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!hamburgerBtn || !mobileMenu) return;

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
  });
  return (
    <header class="bg-white">
      <div class="container flex  flex-row justify-between items-center m-auto">
        <Link href="/">
          <img
            class="w-20 my-3"
            src="/assets/bryan-hannes-logo.svg"
            alt="Bryan Hannes logo"
          />
        </Link>
        <div>
          <button
            id="hamburger-button"
            type="button"
            class="-my-1 flex h-8 w-8 items-center justify-center lg:hidden"
          >
            <span class="sr-only">Open navigation</span>
            <svg viewBox="0 0 24 24" class="h-6 w-6 stroke-black">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>

          <nav
            class="gap-8 align m-0 pb-4 sm:pb-0 hidden lg:flex"
            aria-label={`main`}
          >
            <Link
              href="/"
              class="duration-200 transition-all no-underline text-black hover:text-orange"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              href="/about"
              class="duration-200 transition-all no-underline text-black hover:text-orange"
            >
              {" "}
              About me{" "}
            </Link>
            <Link
              href="https://blog.bryanhannes.com"
              class="duration-200 transition-all no-underline text-black hover:text-orange"
            >
              {" "}
              Blog{" "}
            </Link>
          </nav>
        </div>
      </div>
      <section
        id="mobile-menu"
        class="top-68 justify-content-center absolute hidden w-full origin-top animate-open-menu flex-col bg-white text-3xl z-10"
      >
        <button class="text-5xl self-end px-6">&times;</button>
        <nav
          class="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <Link
            href="/"
            class="w-full text-center duration-200 transition-all no-underline text-black hover:text-orange py-6"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            href="/about"
            class="w-full text-center duration-200 transition-all no-underline text-black hover:text-orange  py-6"
          >
            {" "}
            About me{" "}
          </Link>
          <Link
            href="https://blog.bryanhannes.com"
            class="w-full text-center duration-200 transition-all no-underline text-black hover:text-orange  py-6"
          >
            {" "}
            Blog{" "}
          </Link>
        </nav>
      </section>
    </header>
  );
});
