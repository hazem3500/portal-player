import React, { useState, useEffect } from "react";
import { Box, Button, Input, Flex } from "@chakra-ui/core";
import SimplePeer from "simple-peer";

const ConnectionBar = ({ dispatch }) => {
  const [peer, setPeer] = useState();
  const [sessionId, setSessionId] = useState();

  useEffect(() => {
    if (peer) {
      console.log(peer);
      peer.on("signal", data => {
        setSessionId(JSON.stringify(data));
        console.log(data);
        peer.signal(data);
      });
      peer.on("connect", () => {
        console.log("CONNECT");
        dispatch({ type: "SET_REMOTE_PEER", payload: peer });
        peer.send("whatever" + Math.random());
      });

      peer.on("data", data => {
        console.log("data: " + data);
      });
    }
  }, [peer]);

  function startSession() {
    const p = new SimplePeer({
      initiator: true,
    });
    setPeer(p);
  }

  return (
    <Flex>
      <Input
        type="text"
        value={sessionId}
        onChange={({ target: { value } }) => setSessionId(value)}
        placeholder={sessionId}
      />
      <Button onClick={() => startSession()}>Start Session</Button>
      <Button>Join Session</Button>
    </Flex>
  );
};

export default ConnectionBar;
