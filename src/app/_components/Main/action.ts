"use server";

import * as prettier from "prettier";

export async function formatHTML(src: string) {
  const html = await prettier.format(src, {
    parser: "html",
  });

  return html;
}
