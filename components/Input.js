import { motion } from "framer-motion";
import styled from "styled-components";
import { space, layout } from "styled-system";

export const Input = styled(motion.input)`
  border: 4px solid ${(props) => props.theme.colors.text};
  border-radius: 0;
  background: transparent;
  padding: 20px;
  font-size: 2rem;
  font-family: system-ui, serif;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 250ms ease-out;
  ${space}
  ${layout}

  &:focus {
    outline: 4px solid white;
    outline-offset: 2px;
  }
`;
