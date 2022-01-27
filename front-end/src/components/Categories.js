import React from 'react';

const Categories = () => {
    const listCategories = [ "Games", "Electronic devices", "House",
        "Drinks", "Decoration", "Slave",  "Something" ];

    const CreateCateg = () => {
        return (
            <ul>
                <li> <a href="\home"> {listCategories[0]}  </a> </li>
                <li> <a href="\home"> {listCategories[1]}  </a> </li>
                <li> <a href="\home"> {listCategories[2]}  </a> </li>
                <li> <a href="\home"> {listCategories[3]}  </a> </li>
                <li> <a href="\home"> {listCategories[4]}  </a> </li>
                <li> <a href="\home"> {listCategories[5]}  </a> </li>
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