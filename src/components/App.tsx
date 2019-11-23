import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import Player from "./Player";
import { ipcRenderer } from "electron";
import usePlayer from "../hooks/usePlayer";

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  body {
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Player />
      </Container>
    </>
  );
}

export default hot(App);
