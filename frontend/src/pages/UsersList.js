import React from 'react';
import NavAdmin from '../components/NavAdmin';
import UserCard from '../components/UserCard';
import '../styles/UsersList.css'

const UsersList = () => {
    return (
        <>
        <NavAdmin />
        <div className='UsersList'>
            <div class="search-container">
            <form>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Submit</button>
            </form>
            </div>
            <br />
            <ul>
                <UserCard />
                <br />
                <UserCard />
                <br />
                <UserCard />
            </ul>
        </div>
        </>
    );
};

export default UsersList;