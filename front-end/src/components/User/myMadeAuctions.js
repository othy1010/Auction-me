import AuctionCard from "./AuctionCard";
import React, { useEffect, useState } from 'react';
import itemService from "../../Service/itemService";

const MyMadeAuctions = () => {
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        itemService.getItemsByUserId(1).then((res) => setListItems(res.data))//TODO userid
    }, []);
    return (
        <div className="user_card">
            <h3>Auctions I started</h3>

            <table id="myMadeAuctions">
                <tr>
                    {listItems.map((item) => (
                        <td><AuctionCard parentToChild={item} /></td>
                    ))}

                </tr>
            </table>
            <button className="user_showHide">Show more / Hide</button>
        </div>
    );
};

export default MyMadeAuctions;
