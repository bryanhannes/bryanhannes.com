import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import homeStyles from "./home.scss?inline";

export default component$(() => {
  useStylesScoped$(homeStyles);

  return (
    <>
      <section class="introduction">
        <div class="column">
          <p class="hello">Hello —</p>
          <h1>
            I'm Bryan. <br />
            I'm a frontend software engineer,{" "}
            <a href="https://blog.bryanhannes.com" target="_blank">
              blogger
            </a>
            , and{" "}
            <a href="https://www.youtube.com/@bryanhannes" target="_blank">
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
            <a href="https://twitter.com/BryanHannes" target="_blank">
              Twitter
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/bryan-hannes/" target="_blank">
              LinkedIn
            </a>{" "}
            ,{" "}
            <a href="https://www.youtube.com/@bryanhannes" target="_blank">
              YouTube
            </a>{" "}
            and{" "}
            <a href="https://github.com/bryanhannes" target="_blank">
              Github
            </a>
            .
          </p>
        </div>
        <div class="column">
          <img
            src="/assets/bryan-hannes.jpg"
            alt="Bryan Hannes"
            class="profile-picture"
          />
        </div>
        {/*<p>Fun facts about me:</p>*/}
      </section>
      <section class="latest-articles">
        <h2>Latest blog articles</h2>
        <hr class="line" />

        <div class="articles__list">
          <a
            href="https://blog.bryanhannes.com/typesafe-view-models-with-rxjs-and-angular/"
            className="articles__article"
          >
            <img
              src="https://blog.bryanhannes.com/assets/typesafe-view-models-with-rxjs-and-angular/typesafe-view-models-with-rxjs-and-angular.png"
              alt="Typesafe view models with RxJS and Angular"
            />
            <h3>Typesafe view models with RxJS and Angular</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/reactively-storing-and-retrieving-url-state-in-angular/"
            className="articles__article"
          >
            <img
              src="https://blog.bryanhannes.com/assets/reactively-storing-and-retrieving-url-state-in-angular/reactively-storing-and-retrieving-url-state-in-angular.png"
              alt="Reactively storing and retrieving URL state in Angular"
            />
            <h3>Reactively storing and retrieving URL state in Angular</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/lets-build-image-generator-with-openai-and-angular/"
            class="articles__article"
          >
            <img
              src="https://blog.bryanhannes.com/assets/building-image-generator-with-openai-and-angular/building-image-generator-with-openai-and-angular.png"
              alt="Let's build an Image Generator with OpenAI and Angular"
            />
            <h3>Let's build an Image Generator with OpenAI and Angular</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/building-qwik-with-buildpack/"
            class="articles__article"
          >
            <img
              src="https://blog.bryanhannes.com/assets/running-qwik-in-docker-without-dockerfile-buildpack/running-qwik-in-docker-without-dockerfile-buildpack.png"
              alt="Running Qwik in Docker without Dockerfile (Buildpacks)
"
            />
            <h3>Running Qwik in Docker without Dockerfile (Buildpacks)</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/why-you-should-externalize-angular-configuration/"
            class="articles__article"
          >
            <img
              src="https://blog.bryanhannes.com/assets/externalize-angular-configuration/externalize-configuration-angular-cover.png"
              alt="Externalize Angular configuration"
            />
            <h3>Why you should externalize your Angular Configuration</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/tutorial-run-qwik-in-docker/"
            class="articles__article"
          >
            <img
              src="https://blog.bryanhannes.com/assets/running-qwik-in-docker/running-qwik-in-docker-cover.png"
              alt="Tutorial: Running Qwik in a Docker container"
            />
            <h3>Tutorial: Running Qwik in a Docker container</h3>
          </a>
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
