import React from 'react';
import NavAdmin from '../../components/Admin/NavAdmin';
import UserCard from '../../components/Admin/UserCard';
import '../../styles/admin_styles/UsersList.css'

const UsersList = () => {
    return (
        <>
        <NavAdmin />
        <div className='UsersList'>
            <div className="search-container">
            <form>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Submit</button>
            </form>
            </div>
            <br />
            <table>
                <tr>
                    <td><UserCard/></td>
                    <td><UserCard/></td>
                    <td><UserCard/></td>
                </tr>
                <tr>
                    <td><UserCard/></td>
                    <td><UserCard/></td>
                    <td><UserCard/></td>
                </tr>
            </table>
        </div>
        </>
    );
};

export default UsersList;