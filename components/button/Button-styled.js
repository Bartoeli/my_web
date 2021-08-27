import styled from "styled-components";

export const StyledButton = styled.button`
width: 100%;
height: 100%;
padding: ${(props) =>
    `${props.buttonVerticalPadding} ${props.buttonHorizontalPadding}` ||
    "9px 15px"};
  border: ${(props) => props.buttonBorder || "2px solid white"};
  cursor: pointer;
  text-transform: uppercase;
  color: ${(props) => props.buttonTextColor || "#ffffff"};
  border-radius: ${(props) => props.buttonRadius || "0px"};
  font-weight: 500;
  font-size: ${(props) => props.buttonTextSize || "14px"};
  background-color: ${(props) => props.buttonBackgroundColor || "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
`