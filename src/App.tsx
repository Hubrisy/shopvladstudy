import React, { Suspense } from "react"
import { ThemeProvider } from "styled-components"

import { StateProvider } from "./state"
import { theme } from "./theme"
import { Home } from "./views/home"

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ThemeProvider theme={theme}>
        <StateProvider>
          <Home />
        </StateProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
