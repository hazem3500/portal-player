import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  background: black;
  flex: 1;
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  video {
    width: 100%;
  }
`;

export default function Player({ src }) {
  return (
    <Container>
      <ReactPlayer url={src} height="100%" width="100%" controls></ReactPlayer>
    </Container>
  );
}
