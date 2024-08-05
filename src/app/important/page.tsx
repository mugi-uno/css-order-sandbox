import { Main } from "../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        css={`
          @layer base, layerA, layerB;

          @layer base {
            .target {
              color: red !important;
            }
          }

          .target {
            color: blue !important;
          }
        `}
      >
        <div className="target">TEXT</div>
      </Main>
    </>
  );
}
