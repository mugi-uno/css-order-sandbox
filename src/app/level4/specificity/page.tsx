import { Main } from "../../_components/Main/Main";

// シンプルな詳細度の例
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
            color: green;
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
