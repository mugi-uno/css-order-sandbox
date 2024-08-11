import { Main } from "../../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        css={`
          @scope (.parent) {
            div {
              color: red;
            }
          }
        `}
      >
        <div className="root">
          ROOT
          <div className="parent">
            PARENT
            <div className="child">CHILD</div>
          </div>
        </div>
      </Main>
    </>
  );
}
