import React from 'react';
import "../../styles/user_styles/user_AuctionForm.scss"

const AuctionProfile = () => {
    const AuctionProfile = ({ onSubmit, src, category, title, name, price, currency,
        brand, stat, city, country, periodStart, periodEnd,
        owner, description
    }) =>
        <div >
            <h1>{title}</h1>
            <div className="user_bid">
                <form onSubmit={onSubmit}>
                    Current bid: <b>{price} {currency}</b>
                    <label htmlFor="placeBid">
                        <input id="placeBid" type="number" placeholder={price} />
                        <button className="bid" type="submit">Place a higher bid</button>
                    </label>
                </form>
            </div>
            <table className="user_form user_auctionProfile">
                <tr>
                    <td>
                        <div className="user_img-wrap">
                            <img src={src} alt="" />
                        </div>
                    </td>
                    <td>
                        <tr>
                            <td colSpan={2}><h2>General Information</h2></td>

                        </tr>
                        <tr>
                            <td><b>Category:</b></td>
                            <td><div className="user_prenom">{category}</div></td>
                        </tr>
                        <tr>
                            <td><b>Name of the product:</b></td>
                            <td><div className="user_description">{name}</div></td>
                        </tr>
                        <tr>
                            <td><b>About the product:</b></td>
                            <td><div className="user_description">{description}</div></td>
                        </tr>
                        <tr>
                            <td><b>Brand:</b></td>
                            <td><div className="user_description">{brand}</div></td>
                        </tr>
                        <tr>
                            <td><b>Stat of the product:</b></td>
                            <td><div className="user_description">{stat}</div></td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <tr>
                            <td colSpan={2}><h2>Auction Details</h2></td>
                        </tr>
                        <tr>
                            <td><b>Location:</b></td>
                            <td><div className="user_description">{city}, {country}</div></td>
                        </tr>
                        <tr>
                            <td rowSpan="2"><b>Auction Period:</b> </td>
                            <td>
                                <tr>
                                    <td><b>From:</b></td>
                                    <td><div className="user_description">{periodStart}</div></td>
                                </tr>
                                <tr>
                                    <td><b>To:</b></td>
                                    <td><div className="user_description">{periodEnd}</div></td>
                                </tr>
                            </td>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
    class ProfileCard extends React.Component {
        state = this.props;

        // {
        //     imagePreviewUrl: '/images/Bid.jpg',description:'Buy me now',
        //     category:'Slave' , title:'SOS Come forth!', name:'Product X',
        //     price:'1000', currency:'dollar',
        //     brand:'SSS', stat:'New',
        //     city:'X', country:'XX',
        //     periodStart:'1/12/22', periodEnd:'1/12/23',
        //     owner: {
        //         nom:'ALEXUS',
        //         prenom:'Alex',
        //         email:'alex@gmail.com',
        //         phone:'1234567890',
        //         description:'Hello',
        //         country:'X'
        //     },
        //     active: 'bid', bid:'' , errors:{}
        // }
        handleSubmit = e => {
            e.preventDefault();
            if (this.validate()) {
                let activeP = (this.state.active === 'bid') ? 'bidDone' : 'bid';
                //console.log(this.state);
                this.setState({
                    active: activeP,
                })
            }
            //console.log(this.state.errors);
        }
        validate() {
            let state = this.state;
            let errors = {};
            let isValid = true;

            if (typeof state.bid !== "undefined") {
                if (state.bid <= state.price) {
                    errors["bid"] = "Please choose a higher bid";
                    isValid = false;
                }
            }

            this.setState({
                errors: errors
            });

            return isValid;
        }
        render() {
            //console.log(this.state);
            const { imagePreviewUrl, category, title, name, price, currency,
                brand, stat, city, country, periodStart, periodEnd,
                owner, description } = this.state;

            return (
                <div>
                    <AuctionProfile
                        src={imagePreviewUrl}
                        category={category}
                        title={title}
                        name={name}
                        description={description}
                        price={price}
                        currency={currency}
                        brand={brand}
                        stat={stat}
                        city={city}
                        country={country}
                        periodStart={periodStart}
                        periodEnd={periodEnd}
                        owner={owner}
                    />
                </div>
            )
        }
    }

    return (
        <div className="user_auctionForm">
            <ProfileCard />
        </div>

    );
};

export default AuctionProfile;