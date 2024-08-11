import { Main } from "../../_components/Main/Main";

// contextの例
export default function Page() {
  return (
    <>
      <Main
        css={`
          #id {
            /* !important を付与しても勝てない */
            color: red !important;
          }
        `}
        js={`
          const shadow = document
            .getElementById("id")
            .attachShadow({ mode: "open" });

          shadow.innerHTML = "<div>TEXT</div>";

          const style = document.createElement("style");

          style.textContent = \`
            :host(#id) {
              /* 外部から上書き不可なスタイル */
              color: blue !important;
            }
          \`;

          shadow.appendChild(style);
        `}
      >
        <div id="id"></div>
      </Main>
    </>
  );
}
