import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import styled, { createGlobalStyle } from "styled-components";
import Player from "./Player";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import theme from "../theme";
import { ThemeProvider, Box, Grid, Flex, Stack, Icon } from "@chakra-ui/core";
import reset from "styled-reset";
import { MdPlayArrow } from "react-icons/md";
import SideMenu from "./SideMenu";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
  }

  a {
    &, :visited {
      color: inherit;
      text-decoration: none;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Grid height="100vh" templateColumns="80px 1fr">
          <SideMenu />
          <Box overflow="auto">
            <Switch>
              <Route path="/history">history</Route>
              <Route path="/favorites">favorites</Route>
              <Route path="/">
                <Player />
              </Route>
            </Switch>
          </Box>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
