import styled from "styled-components";

const SLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  .text {
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const Loading = () => {
  return (
    <SLoading>
      <p className="text">ローディング中...</p>
    </SLoading>
  );
};
