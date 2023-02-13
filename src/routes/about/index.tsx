import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Socials from "~/components/socials/socials";
import { Card } from "~/components/card";
import { QwikLogo } from "~/components/icons/qwik";

export default component$(() => {
  return (
    <>
      <section class="bg-brown text-white">
        <div class="container m-auto flex flex-col md:flex-row items-center justify-center gap-8 py-16">
          <div class="flex flex-col container gap-2 px-4 md:px-0">
            <h1 class={"text-3xl mb-2"}>About me</h1>
            <hr class="mb-4 w-20 border-orange border-2 border-solid" />

            <p class={`leading-relaxed text-4xl`}>
              I'm a <span class="text-orange">frontend software engineer.</span>
            </p>

            <p class={`text-2xl mb-8`}>
              <span class="text-orange">Angular and Typescript</span> are my
              daily work horse, but I like exploring other technologies as well.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col">
                <p className={`mb-4`}>
                  I am a software engineer with extensive experience in building
                  high-quality applications. My journey in the field began as a
                  Java developer, but I soon discovered my passion for the
                  visual aspects of applications. This led me to explore
                  frontend development, and I fell in love with{" "}
                  <span class={`text-orange`}>Angular</span>.
                </p>

                <p className={`mb-4`}>
                  Throughout my career, I have had the opportunity to work with
                  a diverse range of technologies. From setting up design
                  systems in Figma, to creating Dockerfiles, to building NodeJS
                  applications.
                </p>
              </div>
              <div className="flex flex-col">
                <p className={`mb-4`}>
                  Even though, I have worked with a wide variety of
                  technologies, my main{" "}
                  <span className={`text-orange`}>focus</span> still lies in{" "}
                  <span className={`text-orange`}>frontend development</span>.
                </p>

                <p className={`mb-4`}>
                  In addition to my professional experience, I have also
                  undertaken numerous{" "}
                  <span className={`text-orange`}>side projects</span> that have
                  helped me continually improve and refine my skills. I firmly
                  believe that these projects have been invaluable in my{" "}
                  <span className={`text-orange`}>
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
          <div className="bg-gradient-to-r from-red-500 to-yellow-500  bg-white rounded-full">
            <img
              src="/assets/bryan-hannes.jpg"
              alt="Bryan Hannes"
              className="rounded-full mx-auto p-1 max-w-[300px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container m-auto my-10 px-4 md:px-0 ">
          <h2 className={`text-2xl mb-3 text-center`}>My toolbelt</h2>
          <hr className="mb-8 w-20 border-orange border-2 border-solid text-center mx-auto" />
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

      <section class="bg-gray-100 py-8">
        <div class="container m-auto my-10 px-4 md:px-0 ">
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
              imagePath={`/assets/images/projects/frituurvleesjekiezen-mockup.jpg`}
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
        "Bryan is a frontend engineer and AI enthusiast. He is passionate about Angular, RxJS, and Qwik, and enjoys sharing his knowledge and experiences through blog posts and YouTube videos. When he's not working, Bryan can be found cooking or working on exciting side projects.",
    },
  ],
};
