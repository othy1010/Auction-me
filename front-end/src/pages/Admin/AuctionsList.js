import React from 'react';
import AuctionCard2 from '../../components/Admin/AuctionCard2';
import NavAdmin from '../../components/Admin/NavAdmin';
import '../../styles/admin_styles/AuctionsList.css'

const AuctionsList = () => {
    return (
        <div className='auctions-list'>
            <NavAdmin />
            <form>
                <input type="text" placeholder='Search..'/>
                <input type="submit" value="Submit" />
            </form>
            <table className='list'>
                <tr>
                    <td><AuctionCard2 /></td>
                    <td><AuctionCard2 /></td>
                    <td><AuctionCard2 /></td>
                </tr>
                <tr>
                    <td><AuctionCard2 /></td>
                    <td><AuctionCard2 /></td>
                    <td><AuctionCard2 /></td>
                </tr>
            </table>
        </div>
    );
};

export default AuctionsList;