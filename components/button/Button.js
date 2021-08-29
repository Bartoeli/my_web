import React from "react";
import { StyledButton } from "./Button-styled";

export const Button = ({
  buttonText,
  buttonVerticalPadding,
  buttonHorizontalPadding,
  buttonBorder,
  buttonTextColor,
  buttonRadius,
  buttonTextSize,
  buttonBackgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={() => onClick()}
      buttonVerticalPadding={buttonVerticalPadding}
      buttonHorizontalPadding={buttonHorizontalPadding}
      buttonBorder={buttonBorder}
      buttonTextColor={buttonTextColor}
      buttonRadius={buttonRadius}
      buttonTextSize={buttonTextSize}
      buttonBackgroundColor={buttonBackgroundColor}
    >
      {buttonText}
    </StyledButton>
  );
};
