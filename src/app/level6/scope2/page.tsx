import { Main } from "../../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        horizontal
        css={`
          @scope (.root) {
            span {
              color: green;
            }
          }
          @scope (.parent) {
            span {
              color: red;
            }
          }
          @scope (.child) {
            span {
              color: blue;
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
