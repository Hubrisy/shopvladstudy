import styled from "styled-components"

export const AdminPanelContainer = styled.div`
  position: relative;
  z-index: 5;
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
`
export const OrdersSection = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow: auto;
  position: relative;
`
export const OrdersSectionTitleBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h1 {
    margin: 0 auto;
  }

  button {
    height: 30px;
    font-size: 16px;
    width: 80px;
    margin-top: 10px;
    padding: 0;
    position: absolute;
    right: 10px;
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

export const OrdersBlock = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  margin-bottom: 20px;
`
export const OrdersContent = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c1dcdc;
  cursor: pointer;
  padding: 10px;
`
