"use client";

import { Noto_Sans_Mono } from "next/font/google";
import dedent from "dedent";
import { useEffect, useRef, useState } from "react";
import style from "./Main.module.css";
import clsx from "clsx";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { formatHTML } from "./action";

const notSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  css: string;
  js?: string;
  horizontal?: boolean;
  children: React.ReactNode;
};

export const Main = ({ css, js, horizontal, children }: Props) => {
  const htmlRef = useRef<HTMLElement>(null);
  const cssRef = useRef<HTMLStyleElement>(null);
  const [html, setHtml] = useState("");

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      const html = await formatHTML(htmlRef.current?.innerHTML || "");
      setHtml(html);
    })();
  }, [htmlRef, cssRef]);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    } else {
      js && eval(js || "");
    }
  }, [initialized, js]);

  return (
    <>
      <style>{dedent(css)}</style>
      <main
        className={clsx(style.main, notSansMono.className, js && style.hasJs)}
      >
        <section className={clsx(style.code, horizontal && style.horizontal)}>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: hljs.highlight(html, { language: "xml" }).value,
              }}
            ></code>
          </pre>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: hljs.highlight(dedent(css), { language: "css" }).value,
              }}
            ></code>
          </pre>
        </section>

        {js && (
          <section className={clsx(style.code, style.codeJS)}>
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(dedent(js), { language: "javascript" })
                    .value,
                }}
              ></code>
            </pre>
          </section>
        )}
        <div className={style.resultWrapper}>
          <div className={style.resultTitle}>Result</div>
          <section className={style.result}>
            <main ref={htmlRef}>{children}</main>
          </section>
        </div>
      </main>
    </>
  );
};
