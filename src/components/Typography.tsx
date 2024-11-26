import React from "react"
import styled from "styled-components"

import { breakpoints } from "../theme"

type TypographyType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "body1"
  | "body2"
  | "body3"

type TypographyConfigItem = {
  fontSize?: string
  lineHeight?: string
  fontWeight?: string | number
}

type ResponsiveTypographyConfigItem = {
  mobile: TypographyConfigItem
  desktop: TypographyConfigItem
}

const typographyConfig: Record<TypographyType, ResponsiveTypographyConfigItem> =
  {
    heading1: {
      mobile: {
        fontSize: "36px",
        lineHeight: "44px",
        fontWeight: 600,
      },
      desktop: {
        fontSize: "44px",
        lineHeight: "52px",
        fontWeight: 600,
      },
    },
    heading2: {
      mobile: {
        fontSize: "28px",
        lineHeight: "32px",
        fontWeight: 600,
      },
      desktop: {
        fontSize: "36px",
        lineHeight: "40px",
        fontWeight: 600,
      },
    },
    heading3: {
      mobile: {
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: 600,
      },
      desktop: {
        fontSize: "28px",
        lineHeight: "32px",
        fontWeight: 600,
      },
    },
    body1: {
      mobile: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
      },
      desktop: {
        fontSize: "24px",
        lineHeight: "28px",
        fontWeight: 400,
      },
    },
    body2: {
      mobile: {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 400,
      },
      desktop: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: 400,
      },
    },
    body3: {
      mobile: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: 400,
      },
      desktop: {
        fontSize: "26px",
        lineHeight: "20px",
        fontWeight: 400,
      },
    },
  }

interface TypographyStyles {
  fontSize?: string
  lineHeight?: string
  fontWeight?: string | number
}

interface TypographyProps extends React.PropsWithChildren, TypographyStyles {
  type: TypographyType
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = "body2",
  ...rest
}) => (
  <TypographyStyled type={type} {...rest}>
    {children}
  </TypographyStyled>
)

const TypographyStyled = styled.div<
  {
    type: TypographyType
  } & TypographyStyles
>`
  font-size: ${({ type, fontSize }) =>
    fontSize ?? typographyConfig[type].mobile.fontSize};
  line-height: ${({ type, lineHeight }) =>
    lineHeight ?? typographyConfig[type].mobile.lineHeight};
  font-weight: ${({ type, fontWeight }) =>
    fontWeight ?? typographyConfig[type].mobile.fontWeight};

  @media (min-width: ${breakpoints.tabletLg}) {
    font-size: ${({ type, fontSize }) =>
      fontSize ?? typographyConfig[type].desktop.fontSize};
    line-height: ${({ type, lineHeight }) =>
      lineHeight ?? typographyConfig[type].desktop.lineHeight};
    font-weight: ${({ type, fontWeight }) =>
      fontWeight ?? typographyConfig[type].desktop.fontWeight};
  }
`
