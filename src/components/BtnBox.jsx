import styled from "styled-components";

const SBtnBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const BtnBox = ({ children }) => {
  return <SBtnBox>{children}</SBtnBox>;
};
