import AuctionCard from "./AuctionCard";
import React, { useEffect, useState } from 'react';
import itemService from "../../Service/itemService";
import { Link } from "react-router-dom";




class MyMadeAuctions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

    }

    componentDidMount() {
        itemService.getItemsByUserId(1).then((response) => {


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
                <h3>Auctions I started</h3>

                <table id="myMadeAuctions">
                    <tr>
                        {this.state.items.map((item) => (
                            <td><div>
                                <Link to={{
                                    pathname: `/auction-info/${item.itemId}`,
                                    // state: { itemname },
                                    // itemId: this.state.item.itemId
                                }}
                                >
                                    <button className="auctionCard">
                                        <table>
                                            <tr>
                                                <td>
                                                    <div className="user_img-wrap">
                                                        <img src={"/images/Bid.jpg"} alt="auction" />
                                                    </div></td>
                                                <td>
                                                    <tr>
                                                        <td><b>Title:</b></td><td>{item.itemName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Top bid:</b></td><td>{item.initialPrice}</td>
                                                    </tr>
                                                </td>
                                            </tr>
                                        </table>
                                    </button>

                                </Link>
                            </div>
                            </td>
                        ))}

                    </tr>
                </table>
                <button className="user_showHide">Show more / Hide</button>
            </div>
        )
    }

}


export default MyMadeAuctions;