import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 80vh;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ textColor }) => textColor};

  div {
    padding: 10px;
    cursor: pointer;

    svg {
      font-size: 32px;
      color: ${({ textColor }) => textColor};
    }
  }
`;
