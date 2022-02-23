import React, { useEffect, useState } from 'react';
import CategoryService from '../Service/categoryService.js'

const Categories = () => {
    const [listCategories, setListCategories] = useState([])

    useEffect(() => 
    {
    CategoryService.getCategories().then((res) => setListCategories(res.data))
    }, []);

    const CreateCateg = () => {
        return (
            <ul>{listCategories.map((category) => (
                <li> <a href="\all-auctions"> {category.categoryName}</a> </li>
            ))}
            </ul>
        )
    }

    return (
        <div>
                  <CreateCateg/>
        </div>
    );
};

export default Categories;