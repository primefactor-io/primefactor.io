export const name = "My Website";
export const domain = "https://example.com";
export const title = "My Website Title";
export const description = "My Website Description.";

export const openGraphLayout = "layouts/satori.tsx";

export const metas = {
  lang: "en",
  site: "=name",
  title: "=title",
  description: "=description",
  twitter: "@jdoe",
  fediverse: "@jdoe@example.com",
  generator: true,
};

export const jsonLd = {
  "@type": "WebSite",
  url: "/",
  name: "=title",
  description: "=description",
  author: {
    "@type": "Person",
    name: "John Doe",
  },
};
