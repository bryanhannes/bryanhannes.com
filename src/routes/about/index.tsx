import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Socials from "~/components/socials/socials";
import { Card } from "~/components/card";
import { QwikLogo } from "~/components/icons/qwik";

export default component$(() => {
  return (
    <>
      <section class="bg-brown text-white">
        <div class="container m-auto flex flex-col md:flex-row items-center gap-8 py-16">
          <div class="flex flex-col container gap-2 px-4 md:px-0">
            <h1 class={"text-3xl mb-2"}>About me</h1>
            <hr class="mb-4 w-20 border-orange border-2 border-solid" />
            <p class={`leading-relaxed text-4xl`}>
              I'm a <span class="text-orange">frontend software engineer.</span>
            </p>
            <p class={`text-2xl mb-4`}>
              <span class="text-orange">Angular and Typescript</span> are my
              daily work horse, but I like exploring other technologies as well.
            </p>

            <p>
              I like working on the visible side of things, that's why my main
              focus is on the frontend. But that doesn't mean I don't like
              exploring things like NodeJS and Docker.
            </p>

            <div class="flex flex-row justify-end mt-4">
              <Socials />
            </div>
          </div>
        </div>
      </section>

      {/* TODO Create a few lines of text here*/}
      <section class="py-8">
        <div class="container m-auto my-10 px-4 md:px-0 ">
          <h2 class={`text-2xl mb-2`}>Technical Skills</h2>
          <hr class="mb-4 w-20 border-orange border-2 border-solid" />
          <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {/*  TODO add some technicall skills here, in a slideshow? */}

            <p>Over the years I've build a lot of web applications</p>

            <p>
              I'm an advocate on working on side projects for educational
              purposes, because I believe this strenghten your skillset in other
              ways.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container m-auto my-10 px-4 md:px-0 ">
          <h2 className={`text-2xl mb-2`}>My toolbelt</h2>
          <hr className="mb-4 w-20 border-orange border-2 border-solid" />
          <div className={`flex flex-row flex-wrap justify-center gap-16 mt-4`}>
            <img
              src="/assets/images/logos/angular.svg"
              alt="Angular"
              className="skill-logo"
            />
            <img
              src="/assets/images/logos/rxjs.png"
              alt="RxJS"
              className="skill-logo"
            />
            <img
              src="/assets/images/logos/nx.svg"
              alt="Nx Devtools"
              className="skill-logo"
            />
            <QwikLogo />
            <img
              src="/assets/images/logos/nodejs.png"
              alt="NodeJS"
              className="skill-logo"
            />
            <img
              src="/assets/images/logos/docker.webp"
              alt="Docker"
              className="skill-logo"
            />
          </div>
        </div>
      </section>

      <section class="bg-brown py-8 text-white">
        <div class="container m-auto my-10 px-4 md:px-0 ">
          <h2 class={`text-2xl mb-2`}>Side projects</h2>
          <hr class="mb-4 w-20 border-orange border-2 border-solid" />
          <p class={`mb-4`}>
            To keep things interesting and experiment with new tech I like to
            work on side projects, here you can find some of the most relevant
            side projects.
          </p>
          <div class={`grid gap-8 grid-cols-1 sm:grid-cols-2`}>
            <Card
              title={`Frituurvleesje kiezen`}
              description={`Frituurvleesje kiezen is a website that helps you choose a frituurvleesje. It is a fun project that I build with Qwik.`}
              url={`https://frituurvleesjekiezen.be`}
              imagePath={`/assets/images/projects/frituurvleesje-kiezen.jpg`}
              buttonText={`Check it out`}
              target={"_blank"}
            />
          </div>
        </div>
      </section>

      <section class="py-8">
        <div class="container m-auto my-10 px-4 md:px-0 ">
          <h2 class={`text-2xl mb-2`}>Fun Facts</h2>
          <hr class="mb-4 w-20 border-orange border-2 border-solid" />
          <ul class={`ml-0`}>
            <li>✔ As an 11-year-old I wanted to be a webdesigner</li>
            <li>
              ✔ I created my first website when I was 13 years old with HTML and
              CSS
            </li>
            <li>✔ I prefer working on a Macbook</li>
          </ul>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "About Bryan Hannes | bryanhannes.com",
  meta: [
    {
      name: "description",
      content:
        "Bryan is a front-end engineer and AI enthusiast. He is passionate about Angular, RxJS, and Qwik, and enjoys sharing his knowledge and experiences through blog posts and YouTube videos. When he's not working, Bryan can be found cooking or working on exciting side projects.",
    },
  ],
};
