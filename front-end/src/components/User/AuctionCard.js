import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/user_styles/auctionsProfil.scss"

class AuctionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: this.props.item
        }
        console.log(this.state.item);
    }

    componentDidMount() {
        // console.log(itemName);


    }


    render() {
        // const { item } = ;

        // window.name = this.props.item.itemName;
        // console.log(window);

        return (
            <div>
                <Link to={{
                    pathname: "/auction-info/",
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
                                        <td><b>Title:</b></td><td>{this.state.item.itemName}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Top bid:</b></td><td>{this.state.item.initialPrice}</td>
                                    </tr>
                                </td>
                            </tr>
                        </table>
                    </button>

                </Link>
            </div>
        )
    }

}


export default AuctionCard;