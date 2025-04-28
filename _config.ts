import lume from "lume/mod.ts";
import { Data, Page } from "lume/core/file.ts";

import modifyUrls from "lume/plugins/modify_urls.ts";

const site = lume({ src: "./src" })
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
