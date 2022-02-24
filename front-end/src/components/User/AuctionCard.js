import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/user_styles/auctionsProfil.scss"

const AuctionCard = ({ parentToChild }) => {

    const Card = ({ src, nom, price }) =>
        <button className="auctionCard">
            <table>
                <tr>
                    <td>
                        <div className="user_img-wrap">
                            <img src={src} alt="auction" />
                        </div></td>
                    <td>
                        <tr>
                            <td><b>Title:</b></td><td>{nom}</td>
                        </tr>
                        <tr>
                            <td><b>Top bid:</b></td><td>{price}</td>
                        </tr>
                    </td>
                </tr>
            </table>
        </button>

    class Auction extends React.Component {
        state = {
            imagePreviewUrl: '/images/Bid.jpg',
            nom: 'Amazing item', price: '1000$',
        }
        render() {
            const { imagePreviewUrl, nom, price } = this.state;
            return (
                <div>
                    <Card
                        src={imagePreviewUrl}
                        nom={parentToChild.itemName}
                        price={parentToChild.initialPrice}//TODO bid price
                    />
                </div>
            )
        }
    }

    return (
        <div>
            <Link to="/auction-info">
                <Auction />
            </Link>
        </div>
    );
};

export default AuctionCard;