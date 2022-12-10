import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
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
        and{" "}
        <a href="https://github.com/bryanhannes" target="_blank">
          Github
        </a>
        .
      </p>
    </div>
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
