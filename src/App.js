import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: aqua;
  &:hover {
    background-color: beige;
  }
`;

const buttonCss = css`
  background-color: aqua;
  &:hover {
    background-color: beige;
  }
`;

function App() {
  return (
    <section>
      <StyledButton>Styled</StyledButton>
      <button css={buttonCss}>CSS</button>
    </section>
  );
}

export default App;
