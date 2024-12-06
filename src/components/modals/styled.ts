import styled from "styled-components"

interface ModalProps {
  isModal: boolean
}

export const ModalContainer = styled.div<ModalProps>`
  height: 400px;
  width: 250px;
  background-color: black;
  display: ${(props) => (props.isModal ? "block" : "none")};
`
