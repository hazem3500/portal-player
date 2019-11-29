import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import Player from "./Player";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    <Router>
      <GlobalStyle />
      <Container>
        <Link to="/history">history</Link>
        <Link to="/favorites">favorites</Link>
        <Link to="/">Player</Link>
        <Switch>
          <Route path="/history">history</Route>
          <Route path="/favorites">favorites</Route>
          <Route path="/">
            <Player />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default hot(App);
