import { component$, Slot } from "@builder.io/qwik";

export interface CardProps {
  title: string;
  description?: string;
  url: string;
  imagePath?: string;
  buttonText?: string;
  target?: string;
}

export const Card = component$(
  ({
    title,
    description,
    imagePath,
    url,
    buttonText = "Read more",
    target = "_self",
  }: CardProps) => {
    return (
      <div class="bg-white shadow rounded-xl hover:no-underline gradient-hover">
        <a
          href={url}
          class={`text-decoration text-brown bg-white`}
          target={target}
        >
          {imagePath ? (
            <img
              src={imagePath}
              alt={title}
              class="rounded-t-xl"
              loading="lazy"
            />
          ) : (
            <Slot name="image" />
          )}
          <div class={`p-4`}>
            <h3 class="text-1xl font-semibold break-words mb-2">{title}</h3>
            {description && description?.length > 0 ? (
              <p class="text-sm">{description}</p>
            ) : null}
            <div class="flex items-center mt-4">
              <span class="bg-gray-100 rounded p-2  text-orange inline-flex justify-center items-center uppercase font-semibold text-sm transition-all duration-300 hover:text-red-800 hover:bg-gray-200">
                {buttonText}
                <svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M9 4l8 8-8 8"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    );
  }
);
