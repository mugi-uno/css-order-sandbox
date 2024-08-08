import { Main } from "../../_components/Main/Main";

// シンプルなimportantの例
export default function Page() {
  return (
    <>
      <Main
        css={`
          #id {
            color: red;
          }
          .class {
            color: blue;
          }
          div {
            /* !important を付与 */
            color: green !important;
          }
        `}
      >
        <div id="id" className="class">
          TEXT
        </div>
      </Main>
    </>
  );
}
