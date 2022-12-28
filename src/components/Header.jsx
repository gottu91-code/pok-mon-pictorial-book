import styled from "styled-components";

const SHeader = styled.header`
  text-align: center;
  padding: 20px 0;
  background-color: #fafafa;
`;

export const Header = () => {
  return (
    <SHeader>
      <h1 className="title">ポケモン図鑑</h1>
    </SHeader>
  );
};
