export const name = "Primefactor";
export const domain = "https://primefactor.io";
export const title = "Cryptography Research and Development Lab";
export const description =
  "Cryptography Research and Development Lab to explore what's possible tomorrow today.";

export const openGraphLayout = "layouts/satori.tsx";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/primefactor-io",
  },
];

export const metas = {
  lang: "en",
  site: "=name",
  title: "=title",
  description: "=description",
  generator: true,
};

export const jsonLd = {
  "@type": "WebSite",
  url: "/",
  name: "=title",
  description: "=description",
  author: {
    "@type": "Person",
    name: "Philipp Muens",
  },
};
