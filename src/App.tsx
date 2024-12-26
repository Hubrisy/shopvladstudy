import React, { Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"

import { Header } from "./components/header"
import { Modals } from "./components/modals"
import { Routes as RoutesEnum } from "./routes"
import { StateProvider } from "./state"
import { theme } from "./theme"
import { ThanksPage } from "./views/thanks"

const AppWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const ProductPage = React.lazy(() =>
  import("./views/product").then((module) => ({ default: module.ProductPage }))
)
const Home = React.lazy(() =>
  import("./views/home").then((module) => ({ default: module.Home }))
)
const ConfirmPage = React.lazy(() =>
  import("./views/confirm").then((module) => ({ default: module.ConfirmPage }))
)

function App() {
  const location = useLocation()

  const isConfirmPage =
    location.pathname === RoutesEnum.confirm ||
    location.pathname === RoutesEnum.thankspage

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ThemeProvider theme={theme}>
        <StateProvider>
          <AppWrapper>
            {!isConfirmPage && <Header />}
            <Routes>
              <Route path={RoutesEnum.root} element={<Home />} />
              <Route path={RoutesEnum.confirm} element={<ConfirmPage />} />
              <Route
                path={`${RoutesEnum.product}/:id`}
                element={<ProductPage />}
              />
              <Route path={RoutesEnum.thankspage} element={<ThanksPage />} />
            </Routes>
          </AppWrapper>
          <Modals />
        </StateProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
