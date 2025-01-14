import styled from "styled-components"

export const OrderDetailsContainer = styled.div`
  position: fixed;
  z-index: 20;
  height: 100%;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.723);
  top: 0;
  left: 0;
`

export const OrderDetailsBlock = styled.div`
  width: 700px;
  height: 450px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 25;
  display: flex;
`
export const OrderUserInfo = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`
export const UserInfoItem = styled.div`
  margin-top: 10px;
`
export const UserOrderInfo = styled.div`
  width: 100%;
`
export const UserOrderBlock = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`
