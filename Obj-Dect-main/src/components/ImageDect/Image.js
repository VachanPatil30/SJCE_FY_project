
import styled from "styled-components";
import { ObjectDetector } from "./index";
import React from "react";

const AppContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #100242;
  display: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  top: 200px;
`;

function Image() {
  return (
    <AppContainer>
      <ObjectDetector />
    </AppContainer>
  );
}

export default Image;