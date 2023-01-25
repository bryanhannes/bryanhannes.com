import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  return (
    <>

      <section class="flex justify-between flex-row items-center gap-2 my-10 mb-40">
        <div class="flex flex-col">
          <p class="text-5xl font-bold mb-2"> Hello —</p>
          <h1 class="text-4xl mb-2">
            I'm Bryan. <br />
            I'm a frontend software engineer,{" "}
            <a href="https://blog.bryanhannes.com" target="_blank" class="text-orange">
              blogger
            </a>
            , and{" "}
            <a href="https://www.youtube.com/@bryanhannes" target="_blank" class="text-orange">
              YouTuber
            </a>
            .
          </h1>
          <p>
            On this site you'll discover my blog articles and more information
            about me.
          </p>
          <p>
            You can find me on{" "}
            <a href="https://twitter.com/BryanHannes" target="_blank" class="text-orange">
              Twitter
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/bryan-hannes/" target="_blank" class="text-orange">
              LinkedIn
            </a>{" "}
            ,{" "}
            <a href="https://www.youtube.com/@bryanhannes" target="_blank" class="text-orange">
              YouTube
            </a>{" "}
            and{" "}
            <a href="https://github.com/bryanhannes" target="_blank" class="text-orange">
              Github
            </a>
            .
          </p>
        </div>

        <div class="bg-gradient-to-r from-red-500 to-yellow-500 rounded-full">
          <img
            src="/assets/bryan-hannes.jpg"
            alt="Bryan Hannes"
            class="max-w-sm rounded-full mx-auto p-2"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl mb-3">Latest blog articles</h2>
        <hr class="mb-10 w-20 border-orange border-2 border-solid" />

        <div class="grid grid-cols-2 gap-8">

          <div class="bg-white rounded-2xl p-5">
            <a
              href="https://blog.bryanhannes.com/typesafe-view-models-with-rxjs-and-angular/"
            >
              <img
                src="https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular.png"
                alt="Typesafe view models with RxJS and Angular"
                class="rounded mb-3"
              />
              <h3 class="text-1xl color-orange">Typesafe view models with RxJS and Angular</h3>
            </a>
          </div>

          <div class="bg-white rounded-2xl p-5">
            <a
              href="https://blog.bryanhannes.com/reactively-storing-and-retrieving-url-state-in-angular/"
            >
              <img
                src="https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular.png"
                alt="Reactively storing and retrieving URL state in Angular"
                class="rounded mb-3"
              />
              <h3 class="text-1xl color-orange">Reactively storing and retrieving URL state in Angular</h3>
            </a>
          </div>

          <div class="bg-white rounded-2xl p-5">
            <a
              href="https://blog.bryanhannes.com/lets-build-image-generator-with-openai-and-angular/"
            >
              <img
                src="https://blog.bryanhannes.com/assets/building-image-generator-with-openai-and-angular/building-image-generator-with-openai-and-angular.png"
                alt="Let's build an Image Generator with OpenAI and Angular"
                class="rounded mb-3"
              />
              <h3 class="text-1xl color-orange">Let's build an Image Generator with OpenAI and Angular</h3>
            </a>
          </div>
          <div class="bg-white rounded-2xl p-5">
            <a
              href="https://blog.bryanhannes.com/building-qwik-with-buildpack/"
            >
              <img
                src="https://blog.bryanhannes.com/assets/running-qwik-in-docker-without-dockerfile-buildpack/running-qwik-in-docker-without-dockerfile-buildpack.png"
                alt="Running Qwik in Docker without Dockerfile (Buildpacks)"
                class="rounded mb-3"
              />
              <h3 class="text-1xl color-orange">Running Qwik in Docker without Dockerfile (Buildpacks)</h3>
            </a>
          </div>
        </div>
      </section>

    </>
  );
});

export const head: DocumentHead = {
  title: "Bryan Hannes | Bryanhannes.com",
  meta: [
    {
      name: "description",
      content:
        "Bryan Hannes is frontend software engineer based in Belgium. He is specialized in technologies such as Angular, TypeScript and RxJS.",
    },
  ],
};
