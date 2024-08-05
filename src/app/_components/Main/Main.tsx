"use client";

import dedent from "dedent";
import { useEffect, useRef, useState } from "react";
import style from "./Main.module.css";

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
      <main className={style.main}>
        <section className={style.code}>
          <pre>{html}</pre>
          <pre>{dedent(css)}</pre>
        </section>
        <section>
          <main ref={htmlRef}>{children}</main>
        </section>
      </main>
    </>
  );
};
