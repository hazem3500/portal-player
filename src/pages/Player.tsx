import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import usePlayer from "../hooks/usePlayer";
import { ipcRenderer } from "electron";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/core";
import Toolbar from "../components/Toolbar";
import useFullscreen from "../hooks/useFullscreeen";
import ConnectionBar from "../components/ConnectionBar";
import { useLocation } from "react-router-dom";

const URLForm = styled.form`
  height: 30px;
  display: flex;

  input {
    flex: 1;
  }
`;

const StyledPlayer = styled(ReactPlayer)`
  display: flex;
  max-height: calc(100vh - 75px);
`

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
  
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.videoUrl) {
      dispatch({ type: "SET_URL", payload: location.state.videoUrl });
      dispatch({ type: "PLAY" });
    }
  }, [location])

  return (
    <Flex
      ref={containerRef}
      minHeight="100vh"
      backgroundColor="gray.900"
      direction="column"
      position="relative"
    >
      <Box position="absolute" top="0" left="0" right="0" height="100px" zIndex="1000">
        <ConnectionBar player={playerRef} state={state} dispatch={dispatch} />
      </Box>
      <Flex flex={1} width="100%" alignItems="stretch">
        <StyledPlayer
          {...state}
          ref={playerRef}
          onPlay={() => dispatch({ type: "PLAY" })}
          onPause={() => dispatch({ type: "PAUSE" })}
          onProgress={({ played }) => {
            if (!state.seeking && !state.remoteChanged)
              dispatch({ type: "SEEK_CHANGE", payload: played });
          }}
          onDuration={duration =>
            dispatch({ type: "SET_DURATION", payload: duration })
          }
          width="100%"
          height="auto"
        ></StyledPlayer>
      </Flex>
      <Toolbar state={state} dispatch={dispatch} />
    </Flex>
  );
}
