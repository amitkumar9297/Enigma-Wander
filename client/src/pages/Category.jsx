import React from 'react'
import { useParams } from 'react-router-dom';

const Category = () => {
    const item = useParams().items;
    return (
        <div>{item}</div>
    )
}

export default Category