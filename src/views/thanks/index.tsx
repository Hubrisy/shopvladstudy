import React from "react"
import { Link } from "react-router-dom"

import { ThanksPageBlock, ThanksPageContainer } from "./styled"

export const ThanksPage = () => {
  return (
    <ThanksPageContainer>
      <ThanksPageBlock>
        <div>Thank you for your purchasement ♡</div>
        <div>
          <Link to="/">
            <button type="button">Back to site</button>
          </Link>
        </div>
      </ThanksPageBlock>
    </ThanksPageContainer>
  )
}
