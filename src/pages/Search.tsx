import { InputGroup,Image, Box, Input, InputRightElement, Button, IconButton, Stack, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react'
import { useState } from 'react';
import { searchVideos } from '../services/search';
import VideoCard from '../components/VideoCard';
import Layout from '../components/Layout';


const ProvidersLogos = {
  youtube: 'https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg',
  dailymotion: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Dailymotion_logo_%282015%29.svg',
  vimeo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Vimeo_Logo.svg'

}

async function search(query, providers, nextParams) {
  const { videos, next } = await searchVideos(query, providers, nextParams);
    return {videos, next};
}

export default function Search() {
    const [query, setQuery] = useState();
    const [videos, setVideos] = useState([]);
    const [nextParams, setNextParams] = useState();
  const [providers, setProviders] = useState(['youtube', 'vimeo', 'dailymotion']);
    const [selectedProviders, setSelectedProviders] = useState([...providers]);
    const handleSearch = async ({hasNext} = {}) => {
        const { videos: videosList, next } = await search(
          query,
          selectedProviders,
          hasNext && nextParams,
        );
        setNextParams(next)
        setVideos(hasNext ? [...videos, ...videosList] : videosList);
    };

    return (
      <Layout>
        <Stack spacing={3}>
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
        <Stack isInline>
            {providers.map((provider, i) => <Flex p={8} transition="all 0.2s ease-out" flex={1} boxShadow="0 0 15px 1px rgba(0,0,0,0.1)" rounded={5} key={i} opacity={selectedProviders.includes(provider) ? 1 : 0.4} justifyContent="center" alignItems="center" onClick={() => {
              if (selectedProviders.includes(provider)) setSelectedProviders(selectedProviders.filter(selectedProvider => selectedProvider !== provider))
              else setSelectedProviders([...selectedProviders, provider])
            }}>
            <Image src={ProvidersLogos[provider]} alt={provider} maxH="75px" maxW="75%" width="100%" height="100%" objectFit="contain" objectPosition="center"/>
            </Flex>)}
        </Stack>
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
