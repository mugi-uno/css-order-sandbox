import { Main } from "../../_components/Main/Main";

// Order and Appearance の例
export default function Page() {
  return (
    <>
      <Main
        css={`
          .class {
            color: red;
          }
          .class {
            color: blue;
          }
          .class {
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
