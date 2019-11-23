import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_URL":
      return { ...state, url: action.payload };
    case "PLAY":
      return { ...state, playing: true };
    case "PAUSE":
      return { ...state, playing: false };
    case "TOGGLE_PLAY":
      return { ...state, playing: !state.playing };
    case "TOGGLE_LOOP":
      return { ...state, loop: !state.loop };
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    case "MUTE":
      return { ...state, muted: true };
    case "UNMUTE":
      return { ...state, muted: false };
    case "TOGGLE_MUTE":
      return { ...state, muted: !state.muted };
    case "SET_PLAYBACK_RATE":
      return { ...state, playbackRate: action.payload };

    default:
      throw new Error("invalid action");
  }
}

const defaultState = {
  url: "",
  playing: false,
  loop: false,
  volume: 1,
  muted: false,
  playbackRate: 1,
};
const usePlayer = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    ...initialState,
  });

  return [state, dispatch];
};

export default usePlayer;
