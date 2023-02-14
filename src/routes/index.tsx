import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card";
import Socials from "~/components/socials/socials";

export default component$(() => {
  return (
    <>
      <section class="bg-brown text-white">
        <div class="container m-auto flex justify-center items-center flex-col md:flex-row items-center gap-8 py-16">
          <div class="bg-gradient-to-r from-red-500 to-yellow-500  bg-white rounded-full">
            <img
              src="/assets/bryan-hannes.jpg"
              alt="Bryan Hannes"
              class="rounded-full mx-auto p-1 max-w-[300px]"
            />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex flex-col sm:flex-row gap-4 mb-2 text-center sm:text-left">
              <span class={`waving-hand text-4xl md:text-5xl lg:text-6xl`}>
                👋
              </span>
              <h1 class={`text-3xl md:text-4xl lg:text-5xl`}>
                Hi, I'm Bryan Hannes
              </h1>
            </div>
            <p class={`leading-relaxed text-lg`}>
              I'm a <span class="text-orange">frontend software engineer </span>{" "}
              and AI enthusiast.{" "}
            </p>
            <p>
              I'm passionate about{" "}
              <span class="text-orange">Angular, RxJS, and Qwik</span>, and
              enjoy sharing my knowledge and experiences through blog posts and{" "}
              <a
                href="https://www.youtube.com/@bryanhannes"
                target="_blank"
                class="text-orange underline"
              >
                YouTube
              </a>{" "}
              videos.{" "}
            </p>
            <div class="flex flex-row justify-end mt-2">
              <Socials />
            </div>
          </div>
        </div>
      </section>

      <section class="container m-auto my-10">
        <h2 class="text-2xl mb-3">Latest blog articles</h2>
        <hr class="mb-10 w-20 border-orange border-2 border-solid" />
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title={"The ChatGPT lookalike build with Qwik and OpenAI"}
            imagePath={
              "https://blog.bryanhannes.com/assets/covers/qwikchat-chat-gpt-with-qwik-and-openai.png"
            }
            url={
              "https://blog.bryanhannes.com/the-chat-gpt-lookalike-build-with-qwik-and-openai/"
            }
            buttonText={"Watch the video"}
          />

          <Card
            title={"Reactively storing and retrieving URL state in Angular"}
            imagePath={
              "https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular.png"
            }
            url={
              "https://blog.bryanhannes.com/reactively-storing-and-retrieving-url-state-in-angular/"
            }
          />

          <Card
            title={"Typesafe view models with RxJS and Angular"}
            imagePath={
              "https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular.png"
            }
            url={
              "https://blog.bryanhannes.com/typesafe-view-models-with-rxjs-and-angular/"
            }
          />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Frontend Engineer - Bryan Hannes | Bryanhannes.com",
  meta: [
    {
      name: "description",
      content:
        "Bryan is a frontend engineer and AI enthusiast. He is passionate about Angular, RxJS, and Qwik, and enjoys sharing his knowledge and experiences through blog posts and YouTube videos. When he's not working, Bryan can be found cooking or working on exciting side projects.",
    },
  ],
};
