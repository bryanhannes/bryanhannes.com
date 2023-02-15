import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Socials from "~/components/socials/socials";
import { Card } from "~/components/card";
import { QwikLogo } from "~/components/icons/qwik";
import { Image } from "~/components/image";

export default component$(() => {
  return (
    <>
      <section class="bg-brown text-white">
        <div class="container m-auto flex flex-col-reverse xl:flex-row items-center justify-center gap-8 py-16">
          <div class="flex flex-col gap-2">
            <h1 class={"text-3xl mb-2"}>About me</h1>
            <hr class="mb-4 w-20 border-orange border-2 border-solid" />

            <p class={`leading-relaxed text-2xl sm:text-3xl mb-4`}>
              I'm a <span class="text-orange">frontend software engineer.</span>
            </p>

            <p class={`text-1xl sm:text-2xl mb-8`}>
              <span class="text-orange">Angular and Typescript</span> are my
              daily work horse, but I like exploring other technologies as well.
            </p>

            <div class="flex flex-col sm:flex-row gap-8">
              <div class="flex flex-col">
                <p class={`mb-4`}>
                  I am a software engineer with extensive experience in building
                  high-quality applications. My journey in the field began as a
                  Java developer, but I soon discovered my passion for the
                  visual aspects of applications. This led me to explore
                  frontend development, and I fell in love with{" "}
                  <span class={`text-orange`}>Angular</span>.
                </p>

                <p class={`mb-4`}>
                  Throughout my career, I have had the opportunity to work with
                  a diverse range of technologies. From setting up design
                  systems in Figma, to creating Dockerfiles, to building NodeJS
                  applications.
                </p>
              </div>
              <div class="flex flex-col">
                <p class={`mb-4`}>
                  Even though, I have worked with a wide variety of
                  technologies, my main <span class={`text-orange`}>focus</span>{" "}
                  still lies in{" "}
                  <span class={`text-orange`}>frontend development</span>.
                </p>

                <p class={`mb-4`}>
                  In addition to my professional experience, I have also
                  undertaken numerous{" "}
                  <span class={`text-orange`}>side projects</span> that have
                  helped me continually improve and refine my skills. I firmly
                  believe that these projects have been invaluable in my{" "}
                  <span class={`text-orange`}>
                    growth as a software engineer
                  </span>
                  .
                </p>
              </div>
            </div>

            <div class="flex flex-row justify-end mt-4">
              <Socials />
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-500 to-yellow-500  bg-white rounded-full max-w-[300px] mx-auto p-1">
            <Image
              alt={`Profile picture of Bryan Hannes`}
              sizes={`100vw`}
              imgSrc={`/assets/images/profile-pics/bryan-hannes400.jpg`}
              webpSrcSet={`/assets/images/profile-pics/bryan-hannes@300.webp 300w, /assets/images/profile-pics/bryan-hannes@600.webp 600w`}
              avifSrcSet={`/assets/images/profile-pics/bryan-hannes@300.avif 300w, /assets/images/profile-pics/bryan-hannes@600.avif 600w`}
              cssClass={`rounded-full `}
            />
          </div>
        </div>
      </section>

      <section class="bg-white py-8">
        <div class="container m-auto my-10">
          <h2 class={`text-2xl mb-3 text-center`}>My toolbelt</h2>
          <hr class="mb-8 w-20 border-orange border-2 border-solid text-center mx-auto" />
          <div class={`flex flex-row flex-wrap justify-center gap-16 mt-4`}>
            <img
              src="/assets/images/logos/angular.svg"
              alt="Angular"
              class="skill-logo"
            />
            <img
              src="/assets/images/logos/rxjs.png"
              alt="RxJS"
              class="skill-logo"
            />
            <img
              src="/assets/images/logos/nx.svg"
              alt="Nx Devtools"
              class="skill-logo"
            />
            <QwikLogo />
            <img
              src="/assets/images/logos/nodejs.png"
              alt="NodeJS"
              class="skill-logo"
            />
            <img
              src="/assets/images/logos/docker.webp"
              alt="Docker"
              class="skill-logo"
            />
          </div>
        </div>
      </section>

      <section class="bg-gray-100 py-8">
        <div class="container m-auto my-10">
          <h2 class={`text-2xl mb-2`}>Side projects</h2>
          <hr class="mb-4 w-20 border-orange border-2 border-solid" />
          <p class={`mb-8`}>
            To maintain excitement and explore new technology, I enjoy
            undertaking side projects. Here, I have listed some of my most
            noteworthy side projects.
          </p>
          <div class={`grid gap-8 grid-cols-1 sm:grid-cols-2`}>
            <Card
              title={`Frituurvleesje kiezen`}
              description={`Frituurvleesje kiezen is a website that helps you choose a frituurvleesje. It is a fun project that I build with Qwik.`}
              url={`https://frituurvleesjekiezen.be`}
              buttonText={`Check it out`}
              target={"_blank"}
            >
              <Image
                q:slot={`image`}
                alt={`Profile picture of Bryan Hannes`}
                sizes={`(max-width: 400px) 400w, 720w`}
                imgSrc={`/assets/images/projects/frituurvleesjekiezen@400.jpg`}
                imgSrcSet={`/assets/images/projects/frituurvleesjekiezen@400.jpg 400w, /assets/images/projects/frituurvleesjekiezen@720.jpg 720w`}
                webpSrcSet={`/assets/images/projects/frituurvleesjekiezen@400.webp 400w, /assets/images/projects/frituurvleesjekiezen@720.webp 720w`}
                avifSrcSet={`/assets/images/projects/frituurvleesjekiezen@400.avif 400w, /assets/images/projects/frituurvleesjekiezen@720.avif 720w`}
              />
            </Card>
          </div>
        </div>
      </section>

      <section class="py-8">
        <div class="container m-auto my-10">
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
        "Bryan is a frontend engineer and AI enthusiast. He is passionate about Angular, RxJS, and Qwik, and enjoys sharing his knowledge and experiences through blog posts and YouTube videos. When he's not working, Bryan can be found cooking or working on exciting side projects.",
    },
  ],
};
