import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import aboutStyles from "./about.scss?inline";

export default component$(() => {
  useStylesScoped$(aboutStyles);

  return (
    <>
      <section class="introduction">
        <div class="column">
          <h1 class="hello">About me </h1>
          <hr className="line" />
          <p>
            I'm Bryan Hannes. I'm a frontend software engineer for DHL Aviation.
            I'm also a{" "}
            <a href="https://blog.bryanhannes.com" target="_blank">
              blogger
            </a>{" "}
            and{" "}
            <a href="https://www.youtube.com/@bryanhannes" target="_blank">
              YouTuber
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
      </section>

      <section class="blurb">
        <h2>Things I am pretty good at</h2>
        <hr class="line" />

        <div class="skills">
          <img
            src="/assets/images/logos/angular.svg"
            alt="Angular"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/ts.png"
            alt="TypeScript"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/rxjs.png"
            alt="RxJS"
            class="skill-logo"
          />
        </div>
      </section>

      <section class="blurb">
        <h2>Things I have a good understanding of</h2>
        <hr class="line" />
        <div class="skills">
          <img
            src="/assets/images/logos/nx.svg"
            alt="Nx Devtools"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/docker.webp"
            alt="Docker"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/mongodb.png"
            alt="MongoDB"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/nodejs.png"
            alt="NodeJS"
            class="skill-logo"
          />
        </div>
      </section>

      <section class="blurb">
        <h2>I also have some design skills</h2>
        <hr class="line" />
        <div class="skills">
          <img
            src="/assets/images/logos/figma.svg"
            alt="Figma"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/photoshop.svg"
            alt="Photoshop"
            class="skill-logo"
          />
          <img
            src="/assets/images/logos/affinity.svg"
            alt="Affinity Designer"
            className="skill-logo"
          />
        </div>
      </section>

      <section class="blurb">
        <h2>Fun facts</h2>
        <hr className="line" />
        <ul>
          <li>️As an 11 year old kid, I wanted to become a web developer</li>
          <li>I coded my first website when I was 13 years old</li>
          <li>My favorite IDE is Webstorm</li>
        </ul>
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
