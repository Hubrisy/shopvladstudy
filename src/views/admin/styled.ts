import styled from "styled-components"

export const AdminPanelContainer = styled.div`
  width: 100%;
  background-color: #c1dcdc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AdminPanelBlock = styled.div`
  width: 90%;
  height: 650px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  overflow: auto;
`
export const OrdersSection = styled.div`
  color: black;
  display: flex;

  button {
    height: 30px;
    font-size: 16px;
    width: 80px;
    margin-top: 10px;
    padding: 0;
  }
`
export const NavSection = styled.div`
  color: white;
  width: 20%;
  background-color: rgb(161, 155, 155);

  h1 {
    text-align: center;
    margin-top: 10px;
  }
`
