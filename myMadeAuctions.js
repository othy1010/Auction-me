import React from 'react';
import AuctionCard from "./AuctionCard";

const MyMadeAuctions = () => {
    return (
        <div  className="user_card">
                <h3>Auctions I started</h3>

                <table id="myMadeAuctions">
                    <tr>
                        <td><AuctionCard /></td>
                        <td><AuctionCard /></td>
                        <td><AuctionCard /></td>
                    </tr>
                </table>
                <button className="user_showHide">Show more / Hide</button>
        </div>
    );
};

export default MyMadeAuctions;