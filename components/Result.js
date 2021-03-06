import styled from "styled-components";
import { space, layout } from "styled-system";

export const Result = styled.section`
  display: flex;
  flex-direction: column;
  outline: 4px solid ${(props) => props.theme.colors.text};
  outline-offset: 4px;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.background} !important;
  justify-content: space-between;
  min-height: 400px;
  box-sizing: border-box;
  ${layout}

  h1,
  h2 {
    color: ${(props) => props.theme.colors.background} !important;
  }
  ${space}
`;
