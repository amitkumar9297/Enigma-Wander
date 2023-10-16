import '../styles/Header.css';
import React from 'react';
import { Avatar, Box, Button, HStack, Image, Input } from '@chakra-ui/react';
import brand_logo from '../assets/brand_logo.png'
import Menulist from './Menulist';
import { Link } from 'react-router-dom';


const Header = () => {
    const blogCategories = ['Business & Entrepreneurship', 'Technology', 'Entertainment', 'Finance', 'Lifestyle', 'Fitness', 'Travel', 'Food & Cooking', 'Art & creativity', 'Education', 'Parenting', 'Home & Garden', 'Personal Stories & Memories', 'Others -->>'];

    const newsCategories = ['World News', 'National News', 'Local News', 'Politics', 'Business & Economy', 'Technology', 'Science', 'Health', 'Enviroment', 'Sports', 'Fashion & LifeStyle', 'Crime & Justice', 'Weather', 'Sports', 'Others']

    return (
        <HStack id={'headerContainer'} w={'100%'} zIndex={'1'}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} w={'30%'} ml={'2%'} mr={'2%'}>
                <Link to={'/'}>
                    <Image src={brand_logo}
                        h={'50px'}
                        w={'50px'}
                    />
                </Link>
                <Input type='search' id='searchButton' value={'🔍 Search'} />
            </Box>
            <Box w={'20%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Button w={'90%'} mb={'5px'}>Write A Blog / Article</Button>
            </Box>
            <Box display={'flex'} flexDirection={'row'} w={'40%'}>
                <Menulist category='Blog' listOfCategory={blogCategories} />
                <Menulist category='News' listOfCategory={newsCategories} />
                <Box id='aboutus'>
                    <Link to={'/aboutus'}>AboutUs</Link>
                </Box>
                <Box id='help'>
                    <Link to={'/Help'}>Help</Link>
                </Box>

                <Link to={'/userprofile'}>
                    <Avatar id="avatar" />
                </Link>
            </Box>
        </HStack>
    )
}

export default Header