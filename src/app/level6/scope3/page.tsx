import { Main } from "../../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        css={`
          div {
            color: red;
          }

          @scope (.class) {
            div {
              color: blue;
            }
          }
        `}
      >
        <div className="class">
          <div>ROOT</div>
        </div>
      </Main>
    </>
  );
}
