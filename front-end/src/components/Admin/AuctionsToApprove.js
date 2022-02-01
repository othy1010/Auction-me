import React from 'react';
import AuctionCard2 from './AuctionCard2';

const AuctionsToApprove = () => {
    return (
        <div className='AuctionsToApprove'>
           <h3>Auctions waiting for an approval</h3>

            <table>
                <tr>
                    <td><AuctionCard2 /> </td>
                    <td><AuctionCard2 /> </td>
                </tr>
            </table> 
        </div>
    );
};

export default AuctionsToApprove;