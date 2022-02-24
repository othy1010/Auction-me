
import AuctionCard from "./AuctionCard";
import React, { useEffect, useState } from 'react';
import itemService from "../../Service/itemService";
import bidService from "../../Service/bidService";

const MySubscribedAuctions = () => {
    // const [listItems, setListItems] = useState([])
    // const [listBids, setListBids] = useState([])

    // useEffect(() => {

    //     bidService.getbidsByUserId(1).then((res) => setListBids(res.data));


    //     listBids.map((Bid) => (
    //         listItems.push(itemService.getItemByItemId(Bid.itemId))

    //     ));
    //     console.log("listItems");
    //     console.log(listItems);
    //     //TODO userid


    // }, []);



    // console.log(listItems)
    return (
        <div className="user_card">
            <h3>Auctions i'm participating in</h3>

            <table id="mySubAuctions">
                <tr>
                    {/* <td>{listItems.map((item) => (
                        <AuctionCard dataFromParent={item} />
                    ))}
                    </td> */}
                </tr>
            </table>
            <button className="user_showHide" >
                Show more / Hide
            </button>
        </div>
    );
};
/*onClick={ }*/
export default MySubscribedAuctions;