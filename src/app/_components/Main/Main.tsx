"use client";

import { Noto_Sans_Mono } from "next/font/google";
import dedent from "dedent";
import { useEffect, useRef, useState } from "react";
import style from "./Main.module.css";
import clsx from "clsx";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const notSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  css: string;
  children: React.ReactNode;
};

export const Main = ({ css, children }: Props) => {
  const htmlRef = useRef<HTMLElement>(null);
  const cssRef = useRef<HTMLStyleElement>(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(htmlRef.current?.innerHTML || "");
  }, [htmlRef, cssRef]);

  return (
    <>
      <style>{dedent(css)}</style>
      <main className={clsx(style.main, notSansMono.className)}>
        <section className={style.code}>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: hljs.highlightAuto(html).value,
              }}
            ></code>
          </pre>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: hljs.highlightAuto(dedent(css)).value,
              }}
            ></code>
          </pre>
        </section>
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
