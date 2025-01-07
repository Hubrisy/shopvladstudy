import styled from "styled-components"

export const AdminPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`

export const AdminPanelBlock = styled.div`
  margin: 50px auto 0;
  height: 450px;
  border: 2px solid #c1dcdc;
  width: 400px;
  border-radius: 10px;

  h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 28px;
  }
`
export const AdminPanelInputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const AdminPanelInputBlock = styled.div`
  text-align: start;
  width: 300px;
  margin-top: 20px;

  input {
    height: 50px;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid #c1dcdc;
  }
`
export const AdminPanelBtnBlock = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 40px;

  button {
    background-color: #c1dcdc;
  }
`

export const SuccessBlock = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  height: 40px;
  width: 150px;
  padding-top: 5px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(24, 187, 73);
  font-style: italic;
  font-weight: 400;
  top: 30px;
  border-radius: 10px;
`
