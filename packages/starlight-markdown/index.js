function starlightMarkdownIntegration(options) {
  return {
    name: "starlight-markdown",
    hooks: {
      "astro:config:setup": async ({ injectRoute }) => {
        injectRoute({
          pattern: "/[...path]/index.md",
          entrypoint: "starlight-markdown/markdown.md.js",
        });
      },
    },
  };
}

export default function starlightContextualMenu(userConfig) {
  return {
    name: "starlight-markdown",
    hooks: {
      "config:setup"({ addIntegration }) {
        addIntegration(starlightMarkdownIntegration(userConfig));
      },
    },
  };
}
