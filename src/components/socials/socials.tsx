import { component$, useStylesScoped$ } from "@builder.io/qwik";
import socialsStyles from "./socials.scss?inline";

export default component$(() => {
  useStylesScoped$(socialsStyles);

  return (
    <ul class="socials">
      <li>
        <a href="https://www.twitter.com/BryanHannes" target="_blank">
          <svg class="svg-icon">
            <use xlink:href="/assets/social-icons.svg#twitter"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/bryan-hannes" target="_blank">
          <svg class="svg-icon">
            <use xlink:href="/assets/social-icons.svg#linkedin"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@bryanhannes" target="_blank">
          <svg class="svg-icon">
            <use xlink:href="/assets/social-icons.svg#youtube"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://github.com/bryanhannes" target="_blank">
          <svg class="svg-icon">
            <use xlink:href="/assets/social-icons.svg#github"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
});
