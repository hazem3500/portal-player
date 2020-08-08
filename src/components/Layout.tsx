import { Box } from '@chakra-ui/core';
import React from 'react'

export default function Layout({children}) {
    return <Box px="8" py="5">{children}</Box>;
}
