# starlight-markdown

Generate Markdown format with your Starlight documentation for LLMs

## Usage

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
