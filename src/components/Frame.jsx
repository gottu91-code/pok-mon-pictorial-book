import styled from "styled-components";

const SFrame = styled.div`
  max-width: 1300px;
  margin-inline: auto;
  padding-inline: 50px;
  @media (max-width: 500px) {
    padding-inline: 5%;
  }
`;

export const Frame = ({ children }) => {
  return <SFrame>{children}</SFrame>;
};
