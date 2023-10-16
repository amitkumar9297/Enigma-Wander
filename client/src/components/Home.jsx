import React from 'react'
import { Box } from '@chakra-ui/react'
import UserInfo from './UserInfo'
import BlogCard from './BlogCard'

export const Home = () => {
    return (
        <Box display={'flex'} flexDirection={'row'}>
            <UserInfo />
            <Box w={'85%'} ml={'2%'} mt={'2%'} mr={'2%'}>
                <BlogCard />
            </Box>
        </Box>
    )
}
