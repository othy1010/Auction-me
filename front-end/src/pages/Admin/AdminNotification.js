import React from 'react';
import NavAdmin from '../../components/Admin/NavAdmin';
import AuctionCard2 from "../../components/Admin/AuctionCard2";
import UserCard from "../../components/Admin/UserCard";
import '../../styles/admin_styles/AdminNotification.css'

const AdminNotification = () => {
    return (
        <div>
            <NavAdmin />
            <table className="admin-notif">
                <tr>
                        <td className="admin-sep"><AuctionCard2 /></td>
                        <td className="admin-sep">This auction is waiting for your approval!!</td>
                </tr>
                <tr>
                    <td className="admin-sep"><UserCard /> </td>
                    <td className="admin-sep">Mark Otto is waiting for you approval!!</td>
                </tr>
                <tr>
                    <td className="admin-sep"><AuctionCard2/></td>
                    <td className="admin-sep">This auction is waiting for your approval!!</td>
                </tr>
            </table>
        </div>
    );
};

export default AdminNotification;