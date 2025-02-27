import styled, { css } from "styled-components";

import { FontWeight, Theme, Transition } from "@/foundations";

import type { ButtonProps } from "./Button.types";
import { TypoProps, TypoStyle } from "@/components/Typography";

export const Layout = styled.div<ButtonProps & TypoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 54px;
  border-radius: 4px;

  ${TypoStyle}

  cursor: pointer;

  ${({ styleVariant }) =>
    styleVariant &&
    css`
      border: 1px solid ${Theme.borderColor.primary};
      background-color: ${Theme.ButtonBgColor[styleVariant]};
      color: ${Theme.ButtonTextColor[styleVariant]};
      font-weight: ${styleVariant === "primary"
        ? FontWeight.bold
        : FontWeight.regular};

      :hover,
      :active {
        border: 1px solid ${Theme.borderColor.active};
        background-color: ${Theme.ButtonActiveBgColor[styleVariant]};
        color: ${Theme.ButtonActiveTextColor[styleVariant]};
        transition: ${Transition};
      }
    `}

  ${({ styleVariant, disabled }) =>
    styleVariant &&
    disabled &&
    css`
      border: 1px solid ${Theme.ButtonDisableBorderColor[styleVariant]};
      background-color: ${Theme.ButtonDisableBgColor[styleVariant]};
      color: ${Theme.textColor.lightest};
      pointer-events: none;
    `}
`;
