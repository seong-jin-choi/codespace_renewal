import { keyframes, css } from "styled-components";

const fadeInKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const titleFadeIn = css`
  animation: 0.9s, 1.5s ${fadeInKeyframe} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;
