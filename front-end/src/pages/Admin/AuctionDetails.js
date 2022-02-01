import React from 'react';
import NavAdmin from '../../components/Admin/NavAdmin';
import '../../styles/admin_styles/AuctionDetails.css'
import image from '../../assets/Bid.jpg'

const AuctionDetails = () => {
    return (
        <div>
            <NavAdmin />
            <table className="auction-details">
                    <tr>
                        <td>
                            <div className="image">
                                <img src={image} alt=""/>
                            </div>
                        </td>
                        <td>
                            <tr>
                                <td><h2>General Information</h2></td>

                            </tr>
                            <tr>
                                <td><b>Category:</b></td>
                                <td><div className="product_category">Computer</div></td>
                            </tr>
                            <tr>
                                <td><b>Name of the product:</b></td>
                                <td><div className="product_name">Macbook Pro 16 inch (2020)</div></td>
                            </tr>
                            <tr>
                                <td><b>About the product:</b></td>
                                <td><div className="product_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nisi eveniet enim modi qui nihil omnis debitis accusantium ad totam 
                                magni quis doloremque cum ut quae voluptatum inventore eius, repellat corporis!</div></td>
                            </tr>
                            <tr>
                                <td><b>Brand:</b></td>
                                <td><div className="product_brand">XXX</div></td>
                            </tr>
                            <tr>
                                <td><b>Stat of the product:</b></td>
                                <td><div className="product_state">New</div></td>
                            </tr>
                            
                        </td>
                    </tr>
                    <tr>
                        <td/>
                        <td>
                            <tr>
                                <td><h2>Auction Details</h2></td>
                            </tr>
                            <tr>
                                <td><b>Location:</b></td>
                                <td><div className="product_location">4140 Parker Rd. Allentown, New Mexico 31134</div></td>
                            </tr>
                            <tr>
                                <td><b>Minimum price:</b></td>
                                <td><div className="product_price">900$</div></td>
                            </tr>
                            <tr>
                                <td rowSpan="2"><b>Auction Period:</b> </td>
                                <td>
                                    <tr>
                                        <td><b>From:</b></td>
                                        <td><div className="product_period">1/1/22</div></td>
                                    </tr>
                                    <tr>
                                        <td><b>To:</b></td>
                                        <td><div className="product_period">1/3/22</div></td>
                                    </tr>
                                </td>
                            </tr>
                        </td>
                    </tr>

                    <tr>
                        <td/>
                        <td>
                            <tr>
                                <td><h2>Seller information</h2></td>
                            </tr>
                            <tr>
                                <td><b>Name:</b></td>
                                <td><div className="seller_name">Jane Cooper</div></td>
                            </tr>
                            <tr>
                                <td><b>Phone Number:</b></td>
                                <td><div className="seller_number">(406) 555-0120</div></td>
                            </tr>
                            <tr>
                                <td><b>Email:</b></td>
                                <td><div className="seller_email">Jone@gmail.com</div></td>
                            </tr>
                            
                        </td>
                    </tr>
                    <tr>
                        <button id='approve'>APPROVE</button>
                        <button id='refus'>REFUS</button>
                    </tr>
                </table>
        </div>
    );
};

export default AuctionDetails;