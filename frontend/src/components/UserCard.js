import React from 'react';
import '../styles/UsersList.css'
import user from '../assets/user.png'

const UserCard = () => {
    return (
        <li>
            <div className="UserCard">
                <img src={user} alt="user" />
                <p><span>Name :</span> Mark Otto
                <br /><br />
                <span>Email :</span> Mark@gmail.com
                <br /><br />
                <span>Admin :</span> No
                <br /><br />
                <span>Approved :</span> Yes
                </p>
            </div>
        </li>
    );
};

export default UserCard;