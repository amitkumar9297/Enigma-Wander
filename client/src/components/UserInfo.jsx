import React from 'react';
import '../styles/UserInfo.css'
import { Avatar, Box, HStack, VStack } from '@chakra-ui/react'

const UserInfo = () => {
    return (
        <Box id='userinfo-container' w={'15%'}>
            <VStack >
                <Avatar id='avatar' size={'lg'} />
                <h1 className='heading'>{`${'Full Name'}`}</h1>
                <VStack className='bor-bot' w={'90%'} justifyContent={'center'}>
                    <p className={'heading'}>{`${'Bio'}`}</p>
                    <p id='details'>hi i am amit kumar from amritsar . i hope all of you good</p>
                </VStack>
                <VStack className='bor-bot' w={'90%'}>
                    <HStack justifyContent={'space-between'} w={'80%'}>
                        <p>Posts</p>
                        <p>Total{'>'}</p>
                    </HStack>
                    <HStack justifyContent={'space-between'} w={'80%'}>
                        <p>Saved</p>
                        <p>Total {'>'}</p>
                    </HStack>
                    <HStack justifyContent={'space-between'} w={'80%'}>
                        <p>Later</p>
                        <p>Total {'>'}</p>
                    </HStack>
                </VStack>
                <p>Reaction</p>
                <VStack w={'90%'}>
                    <HStack justifyContent={'space-between'} w={'80%'} >
                        <p>Liked    </p>
                        <p>{'>'}</p>
                    </HStack>
                    <HStack justifyContent={'space-between'} w={'80%'}>
                        <p>Commented</p>
                        <p>{'>'}</p>
                    </HStack>
                </VStack>


            </VStack>
        </Box>
    )
}

export default UserInfo