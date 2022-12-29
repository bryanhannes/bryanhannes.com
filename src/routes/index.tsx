import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="introduction">
        <h1>Hi I’m Bryan.</h1>

        <p>I am a frontend software engineer based in Belgium.</p>

        <p>Fun facts about me:</p>
        <ul>
          <li>I am a software engineer with 13 years of coding experience</li>
          <li>I coded my first website when I was 13 years old</li>
          <li>️I recently started blogging about tech topics to help others</li>
          <li>️As a kid, I wanted to become a web developer</li>
          <li>Currently Learning Qwik</li>
        </ul>

        <p>I’m specialized in:</p>
        <ul>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>RxJS</li>
        </ul>

        <p>I have a good understanding of:</p>

        <ul>
          <li>NxDevtools</li>
          <li>Docker</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
        </ul>

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

      <div class="latest-articles">
        <h2>Latest blog articles</h2>

        <div class="articles__list">
          <a
            href="https://blog.bryanhannes.com/lets-build-image-generator-with-openai-and-angular/"
            className="articles__article"
          >
            <img
              src="/assets/images/building-image-generator-with-openai-and-angular.png"
              alt="Let's build an Image Generator with OpenAI and Angular"
            />
            <h3>Let's build an Image Generator with OpenAI and Angular</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/building-qwik-with-buildpack/"
            class="articles__article"
          >
            <img
              src="/assets/images/running-qwik-in-docker-without-dockerfile-buildpack.png"
              alt="Running Qwik in Docker without Dockerfile (Buildpacks)
"
            />
            <h3>Running Qwik in Docker without Dockerfile (Buildpacks)</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/why-you-should-externalize-angular-configuration/"
            className="articles__article"
          >
            <img
              src="/assets/images/externalize-configuration-angular-cover.png"
              alt="Externalize Angular configuration"
            />
            <h3>Why you should externalize your Angular Configuration</h3>
          </a>
          <a
            href="https://blog.bryanhannes.com/tutorial-run-qwik-in-docker/"
            class="articles__article"
          >
            <img
              src="/assets/images/running-qwik-in-docker-cover.png"
              alt="Tutorial: Running Qwik in a Docker container"
            />
            <h3>Tutorial: Running Qwik in a Docker container</h3>
          </a>
        </div>
      </div>
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
