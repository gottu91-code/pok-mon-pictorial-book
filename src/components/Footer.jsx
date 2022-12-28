import styled from "styled-components";

const SFooter = styled.footer`
  text-align: center;
  background-color: #fafafa;
  padding-block: 40px;
`;

export const Footer = () => {
  return (
    <SFooter>
      <p className="copyright">&copy; Goto Sho all reserved.</p>
    </SFooter>
  );
};
