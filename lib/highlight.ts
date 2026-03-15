import { codeToHtml } from "shiki";

export async function highlightCode(code: string, lang: string = "jsx") {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });
  return html;
}
