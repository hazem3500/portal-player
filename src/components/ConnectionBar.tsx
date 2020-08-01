import React, { useState, useEffect } from "react";
import { Box, Button, Input, Flex } from "@chakra-ui/core";
import Peer from 'peerjs';


const ConnectionBar = ({ state, dispatch }) => {
  const [peer, setPeer] = useState();
  const [sessionId, setSessionId] = useState();
  const [remoteConnection, setRemoteConnection] = useState()

  useEffect(() => {
    if(remoteConnection) {
      remoteConnection.send(JSON.stringify(state))
    }
  }, [state])

  function startSession() {
    const peer = new Peer();
    peer.on('open', function (id) {
      console.log('My peer ID is: ' + id);
      setSessionId(id)
    });
    peer.on('connection', conn => {
      
      conn.on("data", data => {
        // Will print 'hi!'
        console.log(data);
      });
      conn.on("open", () => {
        console.log('connection open');
        setRemoteConnection(conn)
        conn.send("hello!");
      });
    })
    
    setPeer(peer);
    return peer;
  }

  async function joinSession(sessionId) {
    let currPeer = peer;
    if (!peer) currPeer = await startSession();
    console.log(currPeer);
    const connection = currPeer.connect(sessionId);
    connection.on("data", data => {
      dispatch({type: "SET_STATE", payload: JSON.parse(data)})
    })
  }

  return (
    <Flex>
      <Input
        type="text"
        value={sessionId}
        onChange={
          ({ target: { value } }) => {
            console.log('change session id');
            setSessionId(value)
          }
        }
        placeholder={sessionId}
      />
      <Button onClick={() => startSession()}>Start Session</Button>
      <Button onClick={() => joinSession(sessionId)}>Join Session</Button>
    </Flex>
  );
};

export default ConnectionBar;
