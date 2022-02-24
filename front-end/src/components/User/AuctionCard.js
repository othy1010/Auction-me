import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/user_styles/auctionsProfil.scss"

class AuctionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ""
        }
        console.log(props);
    }

    componentDidMount() {
        // console.log(itemName);
        this.state.item = this.props.item;

    }


    render() {
        // const { item } = ;
        //console.log(this.state.item);
        return (
            <div>
                <Link to={{
                    pathname: "/auction-info",
                    state: this.props
                }}>
                    <button className="auctionCard">
                        <table>
                            <tr>
                                <td>
                                    <div className="user_img-wrap">
                                        <img src={"/images/Bid.jpg"} alt="auction" />
                                    </div></td>
                                <td>
                                    <tr>
                                        <td><b>Title:</b></td><td>{this.props.item.itemName}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Top bid:</b></td><td>{this.props.item.initialPrice}</td>
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