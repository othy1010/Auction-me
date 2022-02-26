import React from 'react';
import '../../styles/admin_styles/MenuAdmin.css'
import user from '../../assets/userPfp.png'
import auction from '../../assets/auction.png'
import category from '../../assets/categories.png'

const MenuAdmin = () => {
    return (
        <div className='MenuAdmin'>
            <div className="MenuElement" id="viewUsers">
                <img src={user} alt="user" />
                <a href='/UsersList'>View users</a>
                <p>Here you can view informations about all registerd users.
                    Also from here you are able to approve them.
                </p>
            </div>
            <div className="MenuElement" id="viewAuctions">
                <img src={auction} alt="auction" />
                <a href='/auctions'>View auctions</a>
                <p>From here you get a small previw for each auction.
                    You can also approve them.
                </p>
            </div>
            <div className="MenuElement" id="viewCateg">
            <img src={category} alt="caegory" />
                <a href='/categories'>View categories</a>
                <p>Here you can view all categories. You can also add a new categorie or delete an existed one</p>
            </div>
        </div>
    );
};

export default MenuAdmin;