import React from 'react';
import AuctionCard from "./AuctionCard";

const MySubscribedAuctions = () => {
    const showHide= event => {
        console.log("i'm showing");
    };
    return (
            <div className="user_card">
                <h3>Auctions i'm participating in</h3>

                <table id="mySubAuctions">
                    <tr>
                        <td><AuctionCard /></td>
                        <td><AuctionCard /></td>
                        <td><AuctionCard /></td>
                    </tr>
                </table>
                 <button className="user_showHide" onClick={showHide}>
                     Show more / Hide
                 </button>
            </div>
    );
};

export default MySubscribedAuctions;