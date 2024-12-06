import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"

import { Header } from "./components/header"
import { Modals } from "./components/modals"
import { Routes as RoutesEnum } from "./routes"
import { StateProvider } from "./state"
import { theme } from "./theme"
import { Home } from "./views/home"
import { Product } from "./views/product"

const AppWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 45px;
`

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ThemeProvider theme={theme}>
        <StateProvider>
          <AppWrapper>
            <Header />
            {/* Todo: Add Lazy loading */}
            <Routes>
              <Route path={RoutesEnum.root} element={<Home />} />
              <Route path={`${RoutesEnum.product}/:id`} element={<Product />} />
            </Routes>
            <Modals />
          </AppWrapper>
        </StateProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
