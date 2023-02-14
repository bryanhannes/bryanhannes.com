import { component$ } from "@builder.io/qwik";

export type ImageProps = {
  alt: string;
  loading?: "eager" | "lazy";
  webpSrcSet?: string;
  avifSrcSet?: string;
  imgSrc: string;
  imgSrcSet?: string;
  sizes?: string;
  cssClass?: string;
};

export const Image = component$(
  ({
    alt,
    loading = "eager",
    webpSrcSet,
    imgSrc,
    imgSrcSet,
    sizes,
    cssClass,
    avifSrcSet,
  }: ImageProps) => {
    return (
      <>
        <picture class={cssClass}>
          <source type="image/avif" srcSet={avifSrcSet} class={cssClass} />
          <source type="image/webp" srcSet={webpSrcSet} class={cssClass} />
          <img
            src={imgSrc}
            srcSet={imgSrcSet}
            sizes={sizes}
            loading={loading}
            // decoding="async"
            alt={alt}
            class={cssClass}
          />
        </picture>
      </>
    );
  }
);
