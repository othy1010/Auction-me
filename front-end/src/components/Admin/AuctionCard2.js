import React from 'react';
import image from '../../assets/Bid.jpg'
import '../../styles/admin_styles/AuctionsList.css'
const AuctionCard2 = () => {
    return (
        <div className='auction-card2'>
            <table>
                <tr>
                    <td>
                        <div className="auction-img">
                            <img src={image} alt="auction"/>
                        </div></td>
                    <td>
                        <tr>
                            <td><b>Title:</b></td><td>the best auction</td>
                        </tr>
                        <tr>
                            <td><b>Approved:</b></td><td>Not yet</td>
                        </tr>
                        <tr>
                            <td><a href="/auction-details">See more</a></td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AuctionCard2;