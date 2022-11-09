import styled from "styled-components";

const ModalEditPetsStyle = styled.div`
  min-width: 300px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(204, 204, 204);

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    gap: 10px;
    .btnCloseModalEditPet {
      width: 30px;
      height: 30px;
      font-weight: 800;
      color: var(--white);
      background-color: var(--brand-2-clear);
    }
    input {
      min-width: 200px;
    }
  }
`;

export default ModalEditPetsStyle;
