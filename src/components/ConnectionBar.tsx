import React, { useState, useEffect } from "react";
import { Box, Button, Input, Flex, useToast, IconButton, Grid, Tooltip, PseudoBox, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/core";
import Peer from 'peerjs';
import { MdGroupAdd, MdGroup, MdLink, MdTranslate, MdTransform } from "react-icons/md";


const ConnectionBar = ({ state, dispatch, player }) => {
  const [peer, setPeer] = useState();
  const [remoteConnection, setRemoteConnection] = useState()
  const toast = useToast()

  useEffect(() => {
    if(remoteConnection && !state.remoteChanged) {
      remoteConnection.send(JSON.stringify({...state, seeking: false }))
    }
  }, [state.playing, state.playbackRate, state.url, state.seeking, state.loop])

  function startSession() {
    const peer = new Peer();
    peer.on('open', function (id) {
      navigator.clipboard.writeText(id);
      toast({
        title: "Session started.",
          description: "Session link copied to clipboard, send the link the your friend!",
          status: "success",
          duration: 9000,
          isClosable: true,
      })
    });
    peer.on('connection', conn => {
      
      conn.on("data", data => {
        dispatch({ type: "SET_STATE", payload: JSON.parse(data) })
      });
      conn.on("open", () => {
        setRemoteConnection(conn)
      });
    })
    
    setPeer(peer);
    return peer;
  }

  async function joinSession(sessionId) {
    const peer = new Peer();
    peer.on('open', function (id) {
      const connection = peer.connect(sessionId);
      setRemoteConnection(connection);

      connection.on("open", data => {
        toast({
          title: "Joined Session",
          description: "Start playing a video and it'll sync with your friend!",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      })

      connection.on("data", data => {
        dispatch({type: "SET_STATE", payload: JSON.parse(data)})
        player.current.seekTo(state.played);
      })
    })
  }

  

  return (
    <PseudoBox
      opacity="0"
      transition="all 0.2s ease-out"
      height="100%"
      _hover={{
        opacity: 1,
        background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4514180672268907) 60%, rgba(0,212,255,0) 100%)"
      }}
    >
      <Grid
        autoFlow="column"
        gap={5}
        justifyContent="end"
        py={2}
        px={8}
        position="relative"
      >
         <Tooltip label="translate" placement="bottom-start">
          <Box>
            <Box
              cursor="pointer"
              color="white"
              size="40px"
              as={MdTransform}
              onClick={() => toast({
                title: "transcribing video",
                description: "Please wait a while the video is being transcribed",
                status: "success",
                duration: 9000,
                isClosable: true,
              })}
            ></Box>
          </Box>
        </Tooltip>
         <Tooltip label="translate" placement="bottom-start">
          <Box>
            <Box
              cursor="pointer"
              color="white"
              size="40px"
              as={MdTranslate}
              onClick={() => toast({
                title: "Translating video",
                description: "Please wait a while the video is being translated",
                status: "success",
                duration: 9000,
                isClosable: true,
              })}
            ></Box>
          </Box>
        </Tooltip>
        <Tooltip closeOnClick label="Play from URL" placement="bottom-start">
          <Box position="relative">
            <Popover>
              {({ onClose }) => (
                <>
                  <PopoverTrigger>
                    <Box
                      cursor="pointer"
                      color="white"
                      size="40px"
                      as={MdLink}
                    ></Box>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    position="absolute"
                    width="500px"
                    top="100%"
                    right="0"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Enter URL!</PopoverHeader>
                    <PopoverBody>
                      <Box
                        as="form"
                        onSubmit={e => {
                          e.preventDefault();
                          console.log(e.target.value)
                          dispatch({ type: "SET_URL", payload: e.target.url.value });
                          onClose();
                        }}
                      >
                        <Input name="url" placeholder="https://www.youtube.com/watch?v=123" />
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </>
              )}
            </Popover>
          </Box>
        </Tooltip>
        <Tooltip label="start session" placement="bottom-start">
          <Box>
            <Box
              cursor="pointer"
              color="white"
              size="40px"
              as={MdGroupAdd}
              onClick={() => startSession()}
            ></Box>
          </Box>
        </Tooltip>
        <Tooltip closeOnClick label="join session" placement="bottom-start">
          <Box position="relative">
            <Popover>
              {({ onClose }) => (
                <>
                  <PopoverTrigger>
                    <Box
                      cursor="pointer"
                      color="white"
                      size="40px"
                      as={MdGroup}
                      // onClick={() => joinSession(sessionId)}
                    ></Box>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    position="absolute"
                    width="500px"
                    top="100%"
                    right="0"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Enter session ID!</PopoverHeader>
                    <PopoverBody>
                      <Box
                        as="form"
                        onSubmit={e => {
                          e.preventDefault();
                          joinSession(e.target.sessionID.value);
                          onClose();
                        }}
                      >
                        <Input name="sessionID" />
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </>
              )}
            </Popover>
          </Box>
        </Tooltip>
      </Grid>
    </PseudoBox>
  );
};

export default ConnectionBar;
