import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ArticlePreview } from "~/routes/article-preview";

export default component$(() => {
  return (
    <>
      <section class="bg-brown text-white">
        <div className="container m-auto flex justify-between flex-col md:flex-row items-center">
          <div class="flex flex-col container m-auto gap-2 pt-10 pb-40 px-4 md:px-0">
            <p class="text-5xl font-bold mb-2"> Hello —</p>
            <h1 class="text-4xl mb-2">
              I'm Bryan. <br />
              I'm a frontend software engineer,{" "}
              <a
                href="https://blog.bryanhannes.com"
                target="_blank"
                class="text-orange"
              >
                blogger
              </a>
              , and{" "}
              <a
                href="https://www.youtube.com/@bryanhannes"
                target="_blank"
                class="text-orange"
              >
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
              <a
                href="https://twitter.com/BryanHannes"
                target="_blank"
                class="text-orange"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/bryan-hannes/"
                target="_blank"
                class="text-orange"
              >
                LinkedIn
              </a>{" "}
              ,{" "}
              <a
                href="https://www.youtube.com/@bryanhannes"
                target="_blank"
                class="text-orange"
              >
                YouTube
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/bryanhannes"
                target="_blank"
                class="text-orange"
              >
                Github
              </a>
              .
            </p>
          </div>

          <div class="bg-gradient-to-r from-red-500 to-yellow-500  bg-white rounded-full">
            <img
              src="/assets/bryan-hannes.jpg"
              alt="Bryan Hannes"
              class="rounded-full mx-auto p-1 max-w-[300px]"
            />
          </div>
        </div>
      </section>

      <section class="container m-auto my-10 px-4 md:px-0">
        <h2 class="text-2xl mb-3">Latest blog articles</h2>
        <hr class="mb-10 w-20 border-orange border-2 border-solid" />
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ArticlePreview
            title={"Reactively storing and retrieving URL state in Angular"}
            imagePath={
              "https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular.png"
            }
            url={
              "https://blog.bryanhannes.com/reactively-storing-and-retrieving-url-state-in-angular/"
            }
            isVideo={false}
          />

          <ArticlePreview
            title={"Let's build an Image Generator with OpenAI and Angular"}
            imagePath={
              "https://blog.bryanhannes.com/assets/building-image-generator-with-openai-and-angular/building-image-generator-with-openai-and-angular.png"
            }
            url={
              "https://blog.bryanhannes.com/lets-build-image-generator-with-openai-and-angular/"
            }
            isVideo={true}
          />

          <ArticlePreview
            title={"Typesafe view models with RxJS and Angular"}
            imagePath={
              "https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular.png"
            }
            url={
              "https://blog.bryanhannes.com/typesafe-view-models-with-rxjs-and-angular/"
            }
            isVideo={false}
          />
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
