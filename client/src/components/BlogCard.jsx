import React from 'react'
import { Avatar, Box, HStack, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <Box w={'30%'} p={'2%'} border={'1px solid gray'} borderRadius={'1.3rem'} bgColor={'gray.100'} opacity={'0.8'} color={'blackAlpha.800'} display={'flex'} flexDirection={'column'}>
            <Box w={'100%'} borderBottom={'1px solid gray'} pb={'2%'}>
                <HStack>
                    <Link>
                        <Avatar size={'xs'} />
                    </Link>
                    <HStack>
                        <Box fontSize={'xs'} lineHeight={'0.9'}>
                            <p><b>Name : </b> {`${'name'}`}</p>
                            <p><b>Bio : </b>{`${'Bio'}`}</p>
                            <p><b>Date :</b> {`${'Date'}`}</p>
                        </Box>
                    </HStack>
                </HStack>
            </Box>
            <Box fontSize={'lg'}>
                <p><b>{`${'title'}`}</b></p>
            </Box>
            <Box fontSize={'xs'}>
                <p><b>Category:</b>{`${'category'}`}</p>
            </Box>
            <Image src={'../assets/logo'} w={'100%'} />

        </Box >
    )
}

export default BlogCard