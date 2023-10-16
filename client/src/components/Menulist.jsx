import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Menulist = (props) => {
    const navigate = useNavigate();
    const { category, listOfCategory } = props;
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton w={'20%'} m={'2'}>
                        {isOpen ? `${category} <` : `${category} >`}
                    </MenuButton>
                    <MenuList>
                        {
                            listOfCategory.map((item, index) => (
                                <MenuItem key={index} value={item} onClick={() => navigate(`/category/${item}`)}>
                                    {item}
                                </MenuItem>
                            ))
                        }

                    </MenuList>
                </>
            )}
        </Menu>
    )
}

export default Menulist