/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components"

import type { theme } from "./index"

type CustomTheme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
declare module "styled-components/macro" {
  export interface DefaultTheme extends CustomTheme {}
}
