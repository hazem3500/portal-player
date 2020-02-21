import React from 'react'
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select, Text, Grid, PseudoBox, Stack } from '@chakra-ui/core'
import { MdPlayArrow, MdPause, MdLoop, MdVolumeMute, MdVolumeUp, MdVolumeDown, MdVolumeOff, MdFullscreen, MdFullscreenExit } from 'react-icons/md'

const Toolbar = ({state, dispatch}) => {
    return (
        <Stack spacing={8} isInline alignItems="center" bg="gray.600" py={4} px={8}>
            <Box color="white" cursor="pointer">
                {
                    !state.playing 
                    ? <MdPlayArrow size={40} onClick={() => dispatch({ type: "PLAY" })}/>
                    : <MdPause size={40} onClick={() => dispatch({ type: "PAUSE" })}/>
                }
            </Box>
            <Slider color="blue"
                value={state.played * 500} 
                min={0}
                max={1000} 
                onChange={value => dispatch({ type: "SEEK_CHANGE", payload: value/1000 })}
                >
                <SliderTrack />
                <SliderFilledTrack />
                <SliderThumb />
            </Slider>
            <PseudoBox transition="flex-basis 0.5s ease-out" role="group" flexBasis="40px" _hover={{flexBasis:"300px"}}>
                <Flex alignItems="center">
                    <Box color="white" cursor="pointer" onClick={() => {dispatch({ type: "TOGGLE_MUTE" })}}>
                        {(state.muted || state.volume === 0) && <MdVolumeOff size="40"/>}
                        {(!state.muted && 0 < state.volume && state.volume <= 0.5) && <MdVolumeDown size="40"/>}
                        {(!state.muted && state.volume > 0.5) && <MdVolumeUp size="40"/>}
                    </Box>
                    <PseudoBox transition="flex-basis 0.5s ease-out" flexBasis="0" opacity={0} _groupHover={{opacity: 1, marginLeft: 4, flexBasis: "200px"}}>
                        <Slider color="blue"
                            value={state.muted ? 0 : state.volume * 100} 
                            min={0}
                            max={100} 
                            onChange={value =>
                                dispatch({
                                    type: "SET_VOLUME",
                                    payload: value / 100,
                                })}
                                >
                            <SliderTrack />
                            <SliderFilledTrack />
                            <SliderThumb />
                        </Slider>
                    </PseudoBox>
                </Flex>
            </PseudoBox>
            <PseudoBox transition="flex-basis 0.5s ease-out" role="group" flexBasis="40px" _hover={{flexBasis:"300px"}}>
                <Flex alignItems="center">
                    <PseudoBox transition="flex-basis 0.5s ease-out" flexBasis="2ch" _groupHover={{flexBasis:"11ch"}}>
                        <Text fontSize="lg" fontWeight={600} textAlign="right" color="white" whiteSpace="nowrap">
                            x{state.playbackRate}
                        </Text>
                    </PseudoBox>
                    <PseudoBox transition="flex-basis 0.5s ease-out" flexBasis="0" opacity={0} _groupHover={{opacity: 1, marginLeft: 4 ,flexBasis: "200px", padding: 1}}>
                        <Slider color="blue"
                            value={state.playbackRate * 100}
                            min={25}
                            max={400}
                            step={25}
                            onChange={value =>
                                dispatch({
                                    type: "SET_PLAYBACK_RATE",
                                    payload: value / 100,
                                })
                            }
                            >
                            <SliderTrack />
                            <SliderFilledTrack />
                            <SliderThumb />
                        </Slider>
                    </PseudoBox>
                </Flex>
            </PseudoBox>
            <Box cursor="pointer" transition="color 0.2s ease-out" color={state.loop ? 'blue.500' : 'white'}>
                <MdLoop size={40} color="currentcolor" onClick={() => dispatch({ type: "TOGGLE_LOOP" })}/>
            </Box>
            <Box cursor="pointer">
                {!state.isFullscreen && <MdFullscreen onClick={() => dispatch({ type: "TOGGLE_FULLSCREEN" })} size={40} color="white"/>}
                {state.isFullscreen && <MdFullscreenExit onClick={() => dispatch({ type: "TOGGLE_FULLSCREEN" })} size={40} color="white"/>}
            </Box>
      </Stack>
    )
}

export default Toolbar
