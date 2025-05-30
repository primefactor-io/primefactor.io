import lume from "lume/mod.ts";
import { domain } from "./src/_data.ts";
import { Data, Page } from "lume/core/file.ts";

import jsx from "lume/plugins/jsx.ts";
import nav from "lume/plugins/nav.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import jsonLd from "lume/plugins/json_ld.ts";
import sitemap from "lume/plugins/sitemap.ts";
import postcss from "lume/plugins/postcss.ts";
import favicon from "lume/plugins/favicon.ts";
import ogImages from "lume/plugins/og_images.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import modifyUrls from "lume/plugins/modify_urls.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({ src: "./src", location: new URL(domain) })
  .use(jsx())
  .use(nav())
  .use(robots())
  .use(favicon({
    input: "/public/favicon.png",
  }))
  .use(sitemap({
    query: "type=page isRedirect!=true",
  }))
  .use(ogImages())
  .use(metas()) // Note: The Metas plugin needs to be added after the OG Images plugin.
  .use(jsonLd())
  .use(tailwindcss({
    options: {
      theme: {
        extend: {
          animation: {
            "gradient": "gradient 8s linear infinite",
          },
          keyframes: {
            "gradient": {
              to: { "background-position": "200% center" },
            },
          },
        },
      },
    },
  }))
  .use(postcss()) // Note: The PostCSS plugin needs to be added after the Tailwind CSS plugin.
  .use(modifyUrls({
    extensions: [".html"],
    fn: (url: string, page: Page<Data>) => {
      if (url.startsWith("http")) {
        const link = page.document?.querySelector(`a[href="${url}"]`);
        if (link) link.setAttribute("target", "_blank");
      }
      return url;
    },
  }))
  .use(lightningCss())
  .use(checkUrls())
  // TODO: Remove once `satori.tsx` is updated.
  .copy("public/og-image.png", "index.png");

export default site;
