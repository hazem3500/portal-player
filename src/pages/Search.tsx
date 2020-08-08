import { InputGroup,Image, Box, Input, InputRightElement, Button, IconButton, Stack, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react'
import { useState } from 'react';
import { searchVideos } from '../services/search';
import VideoCard from '../components/VideoCard';
import Layout from '../components/Layout';


async function search(query, nextParams) {
    const { videos, next } = await searchVideos(query, nextParams);
    return {videos, next};
}

export default function Search() {
    const [query, setQuery] = useState();
    const [videos, setVideos] = useState([]);
    const [nextParams, setNextParams] = useState();
    const handleSearch = async ({hasNext} = {}) => {
        const { videos: videosList, next } = await search(
          query,
          hasNext && nextParams,
        );
        setNextParams(next)
        setVideos(hasNext ? [...videos, ...videosList] : videosList);
    };

    return (
      <Layout>
        <Stack spacing={5}>

        <Box as="form" onSubmit={(e) => {
            e.preventDefault();
            setNextParams({});
            setVideos([]);
            handleSearch()
        }}>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search"
              onInput={({ target: { value } }) => {
                setQuery(value);
              }}
            />
            <InputRightElement>
              <IconButton
                size="lg"
                aria-label="Search database"
                icon="search"
                type="submit"
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Stack>
          {videos.map(
            (video) => (
              <Box key={video.id}>
                <VideoCard video={video} />
              </Box>
            )
          )}
        </Stack>
        {videos.length && (
          <Box textAlign="center">
            <Button onClick={() => handleSearch({hasNext: true})}>More</Button>
          </Box>
        )}
        </Stack>
      </Layout>
    );
}
