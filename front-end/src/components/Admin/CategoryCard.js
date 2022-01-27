import React from 'react';
import '../../styles/admin_styles/CategList.css'
const CategoryCard = () => {
    return (
        <li className='CategCard'>
            <button id='edit'>Edit</button>
            <button id='delete'>Delete</button>
            <h3><span>Category name :</span> general</h3>
            <h3><span>Sub-category :</span> general</h3>
        </li>
    );
};

export default CategoryCard;