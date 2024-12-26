import styled from "styled-components"

import Bckg from "../../images/data/plantbckg3.jpg"

export const ThanksPageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 97.7vh;
  background-image: url(${Bckg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const ThanksPageBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 800px;
  background-color: #c1dcdc;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 50px;
    width: 200px;
    font-size: 20px;
    margin-top: 50px;
    border: none;
    border-radius: 10px;
  }

  /* div {
    margin-top: 150px;
  } */
`
