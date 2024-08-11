import { Main } from "../../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        // prettier-ignore
        css={`
          @layer layerA {
            #id { color: red !important; }
          }

          @layer layerB {
            .class { color: blue !important; }
          }

          @layer layerC {
            div { color: green !important; }
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
