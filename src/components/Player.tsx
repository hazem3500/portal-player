import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import usePlayer from "../hooks/usePlayer";
import { ipcRenderer } from "electron";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
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

export default function Player() {
  const [playerState, playerDispatch] = usePlayer();

  useEffect(() => {
    ipcRenderer.on("file-opened", (event, file) => {
      playerDispatch({ type: "SET_URL", payload: file });
    });
  }, [playerDispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    playerDispatch({ type: "SET_URL", payload: e.target.url.value });
  }

  return (
    <div>
      <Container>
        <ReactPlayer {...playerState} height="80%" width="80%"></ReactPlayer>
      </Container>
      <div>
        <button onClick={() => playerDispatch({ type: "PLAY" })}>Play</button>
        <button onClick={() => playerDispatch({ type: "PAUSE" })}>Pause</button>
        <button onClick={() => playerDispatch({ type: "TOGGLE_LOOP" })}>
          Loop
        </button>
        <div>
          volume:
          <input
            type="range"
            name="volume"
            min={0}
            max={100}
            step={1}
            value={playerState.volume * 100}
            onChange={e =>
              playerDispatch({
                type: "SET_VOLUME",
                payload: parseInt(e.target.value) / 100,
              })
            }
          />
        </div>
        <div>
          speed:
          <input
            type="range"
            name="speed"
            value={playerState.playbackRate * 100}
            min={25}
            max={400}
            step={25}
            onChange={e =>
              playerDispatch({
                type: "SET_PLAYBACK_RATE",
                payload: parseInt(e.target.value) / 100,
              })
            }
          />
        </div>
        <button onClick={() => playerDispatch({ type: "MUTE" })}>Mute</button>
        <button onClick={() => playerDispatch({ type: "UNMUTE" })}>
          Unmute
        </button>
      </div>
      <pre>
        <code>{JSON.stringify(playerState, null, 4)}</code>
      </pre>
      <URLForm onSubmit={handleSubmit}>
        <input name="url" type="text" />
        <button type="submit">Set URL</button>
      </URLForm>
    </div>
  );
}
