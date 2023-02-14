import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card";
import Socials from "~/components/socials/socials";
import { Image } from "~/components/image";

export default component$(() => {
  return (
    <>
      <section class="bg-brown text-white">
        <div class="container m-auto flex justify-center items-center flex-col md:flex-row items-center gap-8 py-16">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500  bg-white rounded-full max-w-[300px] mx-auto p-1">
            <Image
              alt={`Profile picture of Bryan Hannes`}
              sizes={`100vw`}
              imgSrc={`/assets/images/profile-pics/bryan-hannes400.jpg`}
              webpSrcSet={`/assets/images/profile-pics/bryan-hannes@300.webp 300w, /assets/images/profile-pics/bryan-hannes@600.webp 600w`}
              avifSrcSet={`/assets/images/profile-pics/bryan-hannes@300.avif 300w, /assets/images/profile-pics/bryan-hannes@600.avif 600w`}
              cssClass={`rounded-full `}
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
                aria-label="Bryan Hannes on YouTUbe"
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
            url={
              "https://blog.bryanhannes.com/the-chat-gpt-lookalike-build-with-qwik-and-openai/"
            }
            buttonText={"Watch the video"}
          >
            <Image
              q:slot={`image`}
              alt={`The ChatGPT lookalike build with Qwik and OpenAI`}
              sizes={`100vw`}
              imgSrc={`https://blog.bryanhannes.com/assets/qwikchat-chat-gpt-with-qwik-and-openai/qwikchat-chat-gpt-with-qwik-and-openai@500.jpg`}
              webpSrcSet={`https://blog.bryanhannes.com/assets/qwikchat-chat-gpt-with-qwik-and-openai/qwikchat-chat-gpt-with-qwik-and-openai@500.webp 500w, https://blog.bryanhannes.com/assets/qwikchat-chat-gpt-with-qwik-and-openai/qwikchat-chat-gpt-with-qwik-and-openai@1000.webp 1000w`}
              avifSrcSet={`https://blog.bryanhannes.com/assets/qwikchat-chat-gpt-with-qwik-and-openai/qwikchat-chat-gpt-with-qwik-and-openai@500.avif 500w, https://blog.bryanhannes.com/assets/qwikchat-chat-gpt-with-qwik-and-openai/qwikchat-chat-gpt-with-qwik-and-openai@1000.avif 1000w`}
            />
          </Card>

          <Card
            title={"Reactively storing and retrieving URL state in Angular"}
            url={
              "https://blog.bryanhannes.com/reactively-storing-and-retrieving-url-state-in-angular/"
            }
          >
            <Image
              q:slot={`image`}
              alt={`Reactively storing and retrieving URL state in Angular`}
              sizes={`100vw`}
              imgSrc={`https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular@500.jpg`}
              webpSrcSet={`https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular@500.webp 500w, https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular@1000.webp 1000w`}
              avifSrcSet={`https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular@500.avif 500w, https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular@1000.avif 1000w`}
            />
          </Card>

          <Card
            title={"Typesafe view models with RxJS and Angular"}
            url={
              "https://blog.bryanhannes.com/typesafe-view-models-with-rxjs-and-angular/"
            }
          >
            <Image
              q:slot={`image`}
              alt={`Typesafe view models with RxJS and Angular`}
              sizes={`100vw`}
              imgSrc={`https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/qwikchat-chat-gpt-with-qwik-and-openai@500.jpg`}
              webpSrcSet={`https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular@500.webp 500w, https://blog.bryanhannes.com/assets/ctypesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular@1000.webp 1000w`}
              avifSrcSet={`https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular@500.avif 500w, https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular@1000.avif 1000w`}
            />
          </Card>
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
