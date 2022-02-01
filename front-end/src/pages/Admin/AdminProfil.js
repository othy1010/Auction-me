import React from 'react';
import AuctionsToApprove from '../../components/Admin/AuctionsToApprove';
import NavAdmin from '../../components/Admin/NavAdmin';
import UsersToApprove from '../../components/Admin/UsersToApprove';
import UserProfil from '../../components/User/UserProfil';
import '../../styles/admin_styles/AdminProfil.css'

const AdminProfil = () => {
    return (
        <div>
            <NavAdmin />

            <table className='admin-profil'>
                <tr>
                    <td rowSpan={2}>
                        <UserProfil />
                    </td>
                    <td>
                        <UsersToApprove />
                    </td>
                </tr>
                <tr>
                   <td>
                       <AuctionsToApprove />
                   </td>
                </tr>
            </table>
        </div>
    );
};

export default AdminProfil;