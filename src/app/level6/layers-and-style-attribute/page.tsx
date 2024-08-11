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
        `}
      >
        <div id="id" style={{ color: "blue" }}>
          TEXT
        </div>
      </Main>
    </>
  );
}
