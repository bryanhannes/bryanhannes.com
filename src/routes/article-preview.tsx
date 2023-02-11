import { component$ } from "@builder.io/qwik";

export interface ArticlePreviewProps {
  title: string;
  url: string;
  imagePath: string;
  isVideo: boolean;
}

export const ArticlePreview = component$(
  ({ title, imagePath, isVideo, url }: ArticlePreviewProps) => {
    return (
      <div className="bg-white shadow rounded-xl hover:no-underline gradient-hover">
        <a href={url} class={`text-decoration text-brown bg-white`}>
          <img src={imagePath} alt={title} className="rounded-t-xl" />
          <div class={`p-4`}>
            <h3 className="text-1xl font-semibold break-words">{title}</h3>
          </div>
        </a>
      </div>
    );
  }
);
