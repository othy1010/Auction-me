import React from 'react';
import NavAdmin from '../../components/Admin/NavAdmin';
import '../../styles/admin_styles/UserDetails.css'
import user from '../../assets/user.png'

const UserDetails = () => {
    return (
        <div>
            <NavAdmin />
            <div className="UserDetails">
            <img src={user} alt="user" />
                <p><span>First Name :</span> Mark 
                <br /><br />
                <span>Last Name :</span> Otto
                <br /><br />
                <span>Approved :</span> No
                </p>
                <p className='bloc'><span>Username :</span> Mark
                <br /><br />
                <span>Address: </span>2972 Westheimer Rd. Santa Ana, Illinois 85486
                <br /><br />
                <span>Phone number:</span>(406) 555-0120
                <br /><br />
                <span>Email:</span>Mark@gmail.com
                <br /><br />
                <span>Admin:</span>No

                </p>
                <button id='approve'>Approve</button>
                <button id='refus'>Refus</button>
            </div>
        </div>
    );
};

export default UserDetails;