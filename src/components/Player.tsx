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
  min-height: 60vh;
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
  const { playerRef, state, dispatch } = usePlayer();

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
    <div>
      <Container>
        <ReactPlayer
          {...state}
          ref={playerRef}
          height="80%"
          width="80%"
        ></ReactPlayer>
      </Container>
      <div>
        <div>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={state.played}
            onMouseDown={() => dispatch({ type: "SEEK_MOUSE_DOWN" })}
            onChange={e =>
              dispatch({ type: "SEEK_CHANGE", payload: e.target.value })
            }
            onMouseUp={e =>
              dispatch({ type: "SEEK_MOUSE_UP", payload: e.target.value })
            }
          />
        </div>
        <button onClick={() => dispatch({ type: "PLAY" })}>Play</button>
        <button onClick={() => dispatch({ type: "PAUSE" })}>Pause</button>
        <button onClick={() => dispatch({ type: "TOGGLE_LOOP" })}>Loop</button>
        <div>
          volume:
          <input
            type="range"
            name="volume"
            min={0}
            max={100}
            step={1}
            value={state.volume * 100}
            onChange={e =>
              dispatch({
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
            value={state.playbackRate * 100}
            min={25}
            max={400}
            step={25}
            onChange={e =>
              dispatch({
                type: "SET_PLAYBACK_RATE",
                payload: parseInt(e.target.value) / 100,
              })
            }
          />
        </div>
        <button onClick={() => dispatch({ type: "MUTE" })}>Mute</button>
        <button onClick={() => dispatch({ type: "UNMUTE" })}>Unmute</button>
      </div>
      <pre>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <URLForm onSubmit={handleSubmit}>
        <input name="url" type="text" />
        <button type="submit">Set URL</button>
      </URLForm>
    </div>
  );
}
