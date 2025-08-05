import { getCollection, getEntry } from "astro:content";

export async function GET({ params }) {
  const { path } = params;

  const doc = await getEntry("docs", path || "index");
  const markdown = `# ${doc.data.title}\n\n` + doc.body;

  return new Response(markdown, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}

export async function getStaticPaths() {
  const docs = await getCollection("docs");
  const paths = docs.map((doc) => ({
    params: { path: doc.id },
  }));

  return paths;
}
