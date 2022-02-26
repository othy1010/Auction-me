import AuctionCard from "./AuctionCard";
import React, { useEffect, useState } from 'react';
import itemService from "../../Service/itemService";
import UserInfo from "../../configs/UserInfo";




class MySubscribedAuctions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

    }

    componentDidMount() {
        itemService.getBidedItemByItemId(UserInfo.userInfos.userId).then((response) => {


            //console.log(response.data);

            this.setState({
                items: response.data,
            });
            //console.log("items");
            //console.log(this.state.item);

        });

    }

    render() {
        // const { item } = ;
        // console.log(this.state.items);
        //console.log("hadi");

        return (
            <div className="user_card">
                <h3>Auctions i'm participating in</h3>

                <table id="mySubAuctions">
                    <tr>
                        {this.state.items.map((item) => (
                            <td><AuctionCard item={item} /></td>
                        ))}

                    </tr>
                </table>
                <button className="user_showHide">Show more / Hide</button>
            </div>
        )
    }

}


export default MySubscribedAuctions;

