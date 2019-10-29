import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import Player from "./Player";
import { ipcRenderer } from "electron";

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

const URLForm = styled.form`
  height: 30px;
  display: flex;

  input {
    flex: 1;
    padding: 5px;
  }

  button {
    border: none;
    background: blueviolet;
    color: white;
    outline: none;
  }
`;

function App() {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    ipcRenderer.on("file-opened", (event, file) => {
      setSrc(file);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSrc(e.target.url.value);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Player src={src} />
        <URLForm onSubmit={handleSubmit}>
          <input name="url" type="text" />
          <button type="submit">Play</button>
        </URLForm>
      </Container>
    </>
  );
}

export default hot(App);
