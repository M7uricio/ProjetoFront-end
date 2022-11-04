import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  font-size: 16px;
  background: var(--white);
  max-width: 440px;
  width: 100%;

  label {
    align-self: flex-start;
    margin-left: 15px;
    color: var(--black);
    margin-bottom: 3px;
  }
  input {
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    border-radius: 10px;
    gap: 10px;
    border: 1px solid var(--brand-2);
  }

  h1 {
    font-size: 14.439px;
    margin-top: 20px;
  }
  p {
    color: var(---color-gray2);
    align-self: flex-start;
    margin-left: 15px;
    margin-bottom: 1rem;
  }
`;
