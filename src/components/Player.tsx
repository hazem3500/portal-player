import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import usePlayer from "../hooks/usePlayer";
import { ipcRenderer } from "electron";
import { Box, Flex, Text } from "@chakra-ui/core";
import Toolbar from "./Toolbar";
import useFullscreen from "../hooks/useFullscreeen";
import ConnectionBar from "./ConnectionBar";

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

export default function Player() {
  const { playerRef, state, dispatch } = usePlayer();
  const containerRef = useRef();
  const [isFullscreen, setIsFullscreen] = useFullscreen(containerRef);
  useEffect(() => {
    if (state.isFullscreen) setIsFullscreen(state.isFullscreen);
  }, [state.isFullscreen]);

  useEffect(() => {
    ipcRenderer.on("file-opened", (event, file) => {
      dispatch({ type: "SET_URL", payload: file });
    });
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "SET_URL", payload: e.target.url.value });
  }

  return (
    <Flex
      ref={containerRef}
      minHeight="100vh"
      backgroundColor="gray.900"
      direction="column"
      position="relative"
    >
      <Flex flex={1} width="100%" alignItems="stretch">
        <ReactPlayer
          {...state}
          ref={playerRef}
          onPlay={() => dispatch({ type: "PLAY" })}
          onPause={() => dispatch({ type: "PAUSE" })}
          onProgress={({ played }) => {
            console.log('progress')
            if (!state.seeking)
              dispatch({ type: "SEEK_CHANGE", payload: played });
          }}
          onDuration={duration =>
            dispatch({ type: "SET_DURATION", payload: duration })
          }
          width="100%"
          height="auto"
        ></ReactPlayer>
      </Flex>
      <Toolbar state={state} dispatch={dispatch} />
      <Box position="absolute" p={8} top={10} right={10} background="white">
        <Text as="div">
          <pre>
            <code>
              {JSON.stringify({ ...state, remoteConnection: null }, null, 4)}
            </code>
          </pre>
        </Text>
      </Box>
      <URLForm onSubmit={handleSubmit}>
        <input name="url" type="text" />
        <button type="submit">Set URL</button>
      </URLForm>
      <ConnectionBar player={playerRef} state={state} dispatch={dispatch} />
    </Flex>
  );
}
