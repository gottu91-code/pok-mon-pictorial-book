import styled from "styled-components";

const SMain = styled.main`
  padding-block: 50px;
`;

export const Main = ({ children }) => {
  return <SMain>{children}</SMain>;
};
