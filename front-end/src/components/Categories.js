import React, { useEffect, useState } from 'react';
import CategoryService from '../Service/categoryService.js'
import { Link } from 'react-router-dom';

const Categories = () => {
    const [listCategories, setListCategories] = useState([])

    useEffect(() => 
    {
    CategoryService.getCategories().then((res) => setListCategories(res.data))
    }, []);

    const CreateCateg = () => {
        return (
            <ul>{listCategories.map((category) => (
                <li>
                    <Link to={{
                         pathname: `/auctions/${category.categoryName}`,
                        state: {
                            categId: category.categoryId
                        }}}
                    >{category.categoryName}</Link>
                </li>
                /*
                <li> <a href="\all-auctions" > {category.categoryName}</a> </li>
                */
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