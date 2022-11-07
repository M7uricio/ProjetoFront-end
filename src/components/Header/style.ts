import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  gap: 5px;
  margin-bottom: 10px;
  button:nth-child(1) {
    align-self: start;
    border-radius: 10px;
    margin: 5px;
  }
`;
