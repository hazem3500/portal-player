import React from 'react'
import { Flex, Stack, Heading, Image, Text } from '@chakra-ui/core'
import { Link } from "react-router-dom";

function saveVideoToHistory(video) {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const newHistory = [video, ...history];
    console.log({history, newHistory});
    localStorage.setItem('history', JSON.stringify(newHistory))
}

export default function VideoCard({video}) {
    const { link, id, url, thumbnail, title, publishedAt, description } = video;
    return (
        <Flex
            as={Link}
            key={id}
            to={{
                pathname: "/",
                state: { videoUrl: url },
            }}
            onClick={() => saveVideoToHistory(video)}
            rounded="lg"
            borderWidth="1px"
            overflow="hidden"
        >
            <Image src={thumbnail} alt={title} height="160px" maxWidth="214px" />
            <Stack px="3" py="1" flex="1">
                <Flex justifyContent="space-between">
                    <Heading as="h2" size="md">
                        {title}
                    </Heading>
                    <Text>{new Date(publishedAt).toLocaleDateString()}</Text>
                </Flex>
                <Text display="-webkit-box" overflow="hidden" style={{ WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{description}</Text>
            </Stack>
        </Flex>
    )
}
