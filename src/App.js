/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: aqua;
  &:hover {
    background-color: beige;
  }
`;

function App() {
  return (
    <section>
      <StyledButton>Styled</StyledButton>
      <button
        css={css`
          background-color: aqua;
          &:hover {
            background-color: beige;
          }
        `}
      >
        CSS
      </button>
    </section>
  );
}

export default App;
