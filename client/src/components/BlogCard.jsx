import React from 'react'
import { BiLike } from 'react-icons/bi'
import { AiOutlineComment } from 'react-icons/ai'
import { GiPentagramRose } from 'react-icons/gi'


import { Avatar, Box, HStack, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import im from '../assets/logo.png'

const BlogCard = () => {
    return (
        <Box
            minW={'30%'}
            maxW={'30%'}
            p={'2%'}
            // border={'1px solid gray'}
            borderRadius={'1.3rem'}
            // bgColor={'gray.100'}
            // opacity={'0.8'}
            // color={'blackAlpha.800'}
            display={'flex'}
            flexDirection={'column'}
            m={'1%'}
        >
            <Box
                w={'100%'}
                borderBottom={'1px solid gray'}
                pb={'2%'}
            >
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
            <Link>
                <Box fontSize={'lg'}>
                    <p><b>{`${'title'}`}</b></p>
                </Box>
                <Box fontSize={'xs'}>
                    <p><b>Category:</b>{`${'category'}`}</p>
                </Box>
                <Image
                    src={'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'}
                    w={'100%'}
                    h={'175px'}
                    objectFit={'cover'}
                    borderRadius={'1rem'}
                />
                <Box
                    fontSize={'xs'}
                    w={'100%'}
                    maxH={'100px'}
                    borderBottom={'1px solid gray'}
                >
                    <p>{`${'Discription nvfjkfi djinvf ijndnjf joifdnv oninfin oindin onivfnb jnvidsndf jifinbgiigngn bfnibn   nibnldsmfjofgio ninfggob ovioofjsogfsa oinbfofoinlqoifoirr'}`}</p>
                </Box>
            </Link>
            <HStack w={'100%'} justifyContent={'space-around'} mt={'2%'}>
                <span>
                    <BiLike />
                </span>
                <span>
                    <AiOutlineComment />
                </span>
                <span>
                    <GiPentagramRose />
                </span>
            </HStack>
        </Box >
    )
}

export default BlogCard