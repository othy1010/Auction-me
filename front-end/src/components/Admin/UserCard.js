import React from 'react';
import '../../styles/admin_styles/UsersList.css'
import user from '../../assets/user.png'

const UserCard = () => {
    return (
        <li>
            <div className="UserCard">
                <img src={user} alt="user" />
                <a href="/user-info">See more</a>
                <p><span>Name :</span> Mark Otto
                <br /><br />
                <span>Email :</span> Mark@gmail.com
                <br /><br />
                <span>Admin :</span> No
                <br /><br />
                <span>Approved :</span> NO
                </p>
            </div>
        </li>
    );
};

export default UserCard;