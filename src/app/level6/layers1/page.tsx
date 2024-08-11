import { Main } from "../../_components/Main/Main";

export default function Page() {
  return (
    <>
      <Main
        // prettier-ignore
        css={`
          @layer layerA {
            #id { color: red; }
          }

          @layer layerB {
            .class { color: blue; }
          }

          @layer layerC {
            div { color: green; }
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
