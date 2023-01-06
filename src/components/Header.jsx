import { Link } from "react-router-dom";
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
      <h1 className="title">
        <Link to="/">ポケモン図鑑</Link>
      </h1>
    </SHeader>
  );
};
