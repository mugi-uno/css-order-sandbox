import { Main } from "../../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        css={`
          @scope (.parent) {
            span {
              color: red;
            }
          }
        `}
      >
        <div className="root">
          <span>ROOT</span>
          <div className="parent">
            <span>PARENT</span>
            <div className="child">
              <span>CHILD</span>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
