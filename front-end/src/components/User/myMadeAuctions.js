import AuctionCard from "./AuctionCard";
import React, { useEffect, useState } from 'react';
import itemService from "../../Service/itemService";




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
                            <td><AuctionCard item={item} /></td>
                        ))}

                    </tr>
                </table>
                <button className="user_showHide">Show more / Hide</button>
            </div>
        )
    }

}


export default MyMadeAuctions;