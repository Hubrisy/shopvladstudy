import React, { Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"

import { Header } from "./components/header"
import { Modals } from "./components/modals"
import { Routes as RoutesEnum } from "./routes"
import { StateProvider } from "./state"
import { theme } from "./theme"

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
const ThanksPage = React.lazy(() =>
  import("./views/thanks").then((module) => ({
    default: module.ThanksPage,
  }))
)
const Login = React.lazy(() =>
  import("./views/login").then((module) => ({
    default: module.Login,
  }))
)

const Admin = React.lazy(() =>
  import("./views/admin").then((module) => ({
    default: module.Admin,
  }))
)

function App() {
  const location = useLocation()

  const isConfirmPage =
    location.pathname === RoutesEnum.confirm ||
    location.pathname === RoutesEnum.thankspage ||
    location.pathname === RoutesEnum.login ||
    location.pathname === RoutesEnum.admin

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
              <Route path={RoutesEnum.login} element={<Login />} />
              <Route path={RoutesEnum.admin} element={<Admin />} />
            </Routes>
          </AppWrapper>
          <Modals />
        </StateProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
