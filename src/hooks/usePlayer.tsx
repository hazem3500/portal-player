import React, { useReducer, useRef, useEffect } from "react";

function reducer(state, action) {
  console.log({state, action});
  switch (action.type) {
    case "SET_URL":
      return { ...state, url: action.payload}
    case "PLAY":
      return { ...state, playing: true };
    case "PAUSE":
      return { ...state, playing: false };
    case "TOGGLE_PLAY":
      return { ...state, playing: !state.playing };
    case "TOGGLE_LOOP":
      return { ...state, loop: !state.loop };
    case "SET_VOLUME":
      return { ...state, muted: action.payload === 0, volume: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload, remoteChanged: true };
    case "MUTE":
      return { ...state, muted: true };
    case "UNMUTE":
      return {
        ...state,
        muted: false,
        volume: state.volume === 0 ? 1 : state.volume,
      };
    case "TOGGLE_MUTE":
      return {
        ...state,
        muted: !state.muted,
        volume: state.volume === 0 ? 1 : state.volume,
      };
    case "SET_PLAYBACK_RATE":
      return { ...state, playbackRate: action.payload };
    case "SEEK_START":
      return { ...state, seeking: true };
    case "SEEK_CHANGE":
      return { ...state, played: parseFloat(action.payload) };
    case "SEEK_END":
      return { ...state, seeking: false };
    case "TOGGLE_FULLSCREEN":
      if (state.isFullscreen) document.exitFullscreen();
      return { ...state, isFullscreen: !state.isFullscreen };
    case "SET_STATE":
      return { ...state, ...action.payload, remoteChanged: true };
      case "END_REMOTE_CHANGE":
        return { ...state, remoteChanged: false };
    default:
      throw new Error(`invalid action ${action.type}`);
  }
}

const defaultState = {
  url: "",
  playing: false,
  loop: false,
  volume: 1,
  muted: false,
  playbackRate: 1,
  seeking: false,
  played: 0,
  isFullscreen: false,
  duration: 0,
  remoteChanged: false
};

const usePlayer = (initialState = {}) => {
  const playerRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    ...initialState,
  });

  useEffect(() => {
    if(sessionStorage.getItem('player-state')) dispatch({type: 'SET_STATE', payload: JSON.parse(sessionStorage.getItem('player-state'))})
  }, [])

  useEffect(() => {
    sessionStorage.setItem('player-state', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(state.played);
    }
    dispatch({ type: 'END_REMOTE_CHANGE'})
  }, [state.seeking, state.remoteChanged]);

  useEffect(() => {
    dispatch({ type: 'SEEK_CHANGE', payload: 0 })
  }, [state.url]);



  return { playerRef, state, dispatch };
};

export default usePlayer;
