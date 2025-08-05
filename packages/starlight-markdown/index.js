function starlightMarkdownIntegration(options) {
  return {
    name: "starlight-markdown",
    hooks: {
      "astro:config:setup": async ({ injectRoute }) => {
        injectRoute({
          pattern: "/index.md",
          entrypoint: "starlight-markdown/markdown.md.js",
        });
        injectRoute({
          pattern: "/[...path]/index.md",
          entrypoint: "starlight-markdown/markdown.md.js",
        });
      },
    },
  };
}

export default function starlightMarkdown(userConfig) {
  return {
    name: "starlight-markdown",
    hooks: {
      "config:setup"({ addIntegration }) {
        addIntegration(starlightMarkdownIntegration(userConfig));
      },
    },
  };
}
