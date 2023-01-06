import styled from "styled-components";

const SHeader = styled.header`
  text-align: center;
  padding: 20px 0;
  background-color: #fafafa;
  h1 {
    font-size: 2rem;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <h1 className="title">ポケモン図鑑</h1>
    </SHeader>
  );
};
