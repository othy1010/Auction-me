import React from 'react';
import UserCard from './UserCard';
import '../../styles/admin_styles/AdminProfil.css'

const UsersToApprove = () => {
    return (
        <div className='UsersToApprove'>
            <h3>Users waiting for an approval</h3>

            <table>
                <tr>
                    <td><UserCard /> </td>
                    <td><UserCard /> </td>
                </tr>
            </table>
        </div>
    );
};

export default UsersToApprove;