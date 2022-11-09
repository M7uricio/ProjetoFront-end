/* import { ModalStyle } from './style'; */
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const CarouselImages = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  list-style: none;
  gap: 30px;

  li {
    gap: 30px;

    img {
      width: 400px;
      height: 300px;
    }
  }
`;

export const CloseIcon = styled(IoCloseOutline)`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const ModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "90%",
    width: "80%",
  },
};

export const ModalClose = styled.button`
  display: flex;
  float: right;
`;

export const ModalHeader = styled.header`
  * {
    text-align: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    z-index: auto;
  }
  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  figure {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;

  p {
    padding: 15px;
    background-color: var(--brand-2);
    border-radius: 8px;
    font-weight: bold;
  }
`;

export const ModalContainer = styled.div`
  div {
    background-color: red;
  }
`;
