# starlight-markdown

Generate Markdown format with your Starlight documentation for LLMs

![starlight-markdown](https://raw.githubusercontent.com/reynaldichernando/starlight-markdown/refs/heads/main/docs/public/banner.png)

See it on a live documentation page: [HTML](https://corsfix.com/docs/cors-proxy/api) vs. [Markdown](https://corsfix.com/docs/cors-proxy/api/index.md)

## Usage

Install the plugin by running the following command:

```bash
npm i starlight-markdown
```

Inside your astro.config.mjs file add the starlightMarkdown plugin:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightMarkdown from "starlight-markdown";

export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      plugins: [starlightMarkdown()],
      sidebar: [
        ...
      ],
    }),
  ],
});
```

## How It Works

During Starlight build process, in addition to the HTML files, the plugin will generate the Markdown version of the page under `/index.md` suffix.

These are static files, meaning you can still any static hosting site without a server.

## License

[MIT](https://github.com/reynaldichernando/starlight-markdown/blob/main/LICENSE)
