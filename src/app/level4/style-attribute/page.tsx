import { Main } from "../../_components/Main/Main";

// シンプルなstyle属性の例
export default function Page() {
  return (
    <>
      <Main
        css={`
          #id {
            color: red;
          }
        `}
      >
        <div id="id" style={{ color: "blue" }}>
          TEXT
        </div>
      </Main>
    </>
  );
}
