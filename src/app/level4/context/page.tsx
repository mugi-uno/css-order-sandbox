import { Main } from "../../_components/Main/Main";

// contextの例
export default function Page() {
  return (
    <>
      <Main
        css={`
          #id {
            color: red;
          }
        `}
        js={`
          const shadow = document
            .getElementById("id")
            .attachShadow({ mode: "open" });

          shadow.innerHTML = "<div>TEXT</div>";

          const style = document.createElement("style");

          style.textContent = \`
            div {
              color: blue;
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
