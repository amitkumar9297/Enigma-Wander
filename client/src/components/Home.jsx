import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import UserInfo from './UserInfo'
import BlogCard from './BlogCard'

export const Home = () => {


    // <<<<<<<<<<<<<------- BELOW WE CALCULATE SCREEN WIDTH AND ADJUST HOME ------->>>>>>>>>>>>>

    const [screenWidth, setScreenWidth] = useState({
        winWidth: window.screen.width,
    });

    const detectScreenWidth = () => {
        setScreenWidth(
            {
                winWidth: window.screen.width,
            }
        )
    }
    useEffect(() => {
        window.addEventListener('resize', detectScreenWidth);
        return () => {
            window.removeEventListener('resize', detectScreenWidth);
        }
    }, [screenWidth]);

    // <<<<<<<<<<<<<------- ABOVE WE CALCULATE SCREEN WIDTH AND ADJUST HOME ------->>>>>>>>>>>>>


    return (
        <>
            {
                `${screenWidth.winWidth}` < 485 ?
                    (
                        <>
                            <Box display={'flex'} flexDirection={'row'} m={'auto'}>
                                <Box w={'100%'} m={'auto'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                                    <BlogCard />
                                    <BlogCard />
                                    <BlogCard />
                                    <BlogCard />
                                    <BlogCard />
                                    <BlogCard />
                                    <BlogCard />

                                </Box>
                            </Box>
                        </>

                    ) : (
                        <>
                            {
                                `${450 < screenWidth.winWidth}` < 600 ?
                                    (<>
                                        <Box display={'flex'} flexDirection={'row'} m={'auto'}>
                                            <UserInfo />
                                            <Box w={'60%'} m={'auto'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />

                                            </Box>
                                        </Box>
                                    </>
                                    ) : (
                                        <Box display={'flex'} flexDirection={'row'} m={'auto'}>
                                            <UserInfo />
                                            <Box w={'80%'} m={'auto'} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />
                                                <BlogCard />

                                            </Box>
                                        </Box>
                                    )
                            }
                        </>
                    )
            }
        </>
    )
}


