import React from 'react';
import CategoryCard from '../../components/Admin/CategoryCard';
import NavAdmin from '../../components/Admin/NavAdmin';
import '../../styles/admin_styles/CategList.css'

const CategList = () => {
    return (
        <div>
            <NavAdmin />
            <div className='CategList'>
                <div className="forms">
                <form className='search-categ'>
                    <input type="text" placeholder='Search..'/>
                    <input type="submit" value="submit" />
                </form>
                <form className='add-categ'>
                    <input type="text" placeholder='Category name'/>
                    <input type="text" placeholder='Sub-category'/>
                    <input type="submit" value="Add" />
                </form>
                </div>
                <ul>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                </ul>
            </div>
        </div>
    );
};

export default CategList;