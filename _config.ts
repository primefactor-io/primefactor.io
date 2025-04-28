import lume from "lume/mod.ts";
import { domain } from "./src/_data.ts";
import { Data, Page } from "lume/core/file.ts";

import jsx from "lume/plugins/jsx.ts";
import nav from "lume/plugins/nav.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import postcss from "lume/plugins/postcss.ts";
import favicon from "lume/plugins/favicon.ts";
import modifyUrls from "lume/plugins/modify_urls.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

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
  .use(metas())
  .use(tailwindcss())
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
  }));

export default site;
