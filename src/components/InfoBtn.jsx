import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "./Btn";

const SInfoBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const InfoBtn = () => {
  return (
    <SInfoBtn>
      <div className="Btn">
        <Link to="info">
          <Btn>使用技術</Btn>
        </Link>
      </div>
    </SInfoBtn>
  );
};
