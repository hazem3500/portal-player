import { Box, Stack } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import VideoCard from '../components/VideoCard';

export default function History() {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem("history")) || []);
    }, [])
    return (
      <Layout>
        <Stack spacing={5}>
          {history.length &&
            history.map(video => (
              <Box key={video.id}>
                <VideoCard video={video} />
              </Box>
            ))}
        </Stack>
      </Layout>
    );
}
