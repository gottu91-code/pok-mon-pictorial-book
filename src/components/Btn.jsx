import styled from "styled-components";

const SBtn = styled.button`
  background-color: #fafafa;
  padding: 22px 60px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.1rem;
  width: fit-content;
  display: block;
  margin-inline: auto;
  margin-top: 40px;
  border: 1px solid #eee;
`;

export const Btn = ({ children, onClickFunc = () => {} }) => {
  return <SBtn onClick={onClickFunc}>{children}</SBtn>;
};
