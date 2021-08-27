import styled from "styled-components";
import Image from 'next/image'


export const ImageContainer = styled.div`
  position: relative;
  width: 252px;
  height: 21px;
  z-index: 1;
  margin: 0 auto;
  margin-top: 15px;
`

export const HeaderImage = styled(Image)`
  height: 21px;
  fill: ${(props) => props.headerImageFill || "#000"};
`