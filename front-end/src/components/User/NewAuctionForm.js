import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../../styles/user_styles/user_AuctionForm.scss"
import UserService from '../../Service/UserService';
import toast from "react-hot-toast";
import ReactDOM from "react-dom";
import MyProfil from "../../pages/User/MyProfil";


import {
    ImgUpload, Title, Name, Description,
    Price, Currency, Brand, Stat, City, Country,
    PeriodStart, PeriodEnd, OwnerProfil
} from "./AuctionDef";
import { Categories } from "./Categories";
import itemService from "../../Service/itemService";
import Login from "../../pages/Login";

const NewAuctionForm = () => {

    const AuctionProfile = ({ onSubmit,createAuc, src, category, title, name, price, currency,
                                brand, stat, city, country, periodStart, periodEnd,
                                owner, description, createAuction
                            }) =>
        <div className="user_form">
            <form onSubmit={onSubmit}>
                <h1>Your Auction - Preview</h1>
                <table>
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
                                <td><b>Title of the auction:</b></td>
                                <td><div className="user_nom">{title}</div></td>
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
                        <td><pre>           </pre></td>
                        <td>
                            <tr>
                                <td colSpan={2}><h2>Auction Details</h2></td>
                            </tr>
                            <tr>
                                <td><b>Location:</b></td>
                                <td><div className="user_description">{city}, {country}</div></td>
                            </tr>
                            <tr>
                                <td><b>Starting Bid:</b></td>
                                <td><div className="user_description">{price}</div></td>
                            </tr>
                            <tr>
                                <td><b>Currency:</b></td>
                                <td><div className="user_description">{currency}</div></td>
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
                <table>
                    <tr>
                        <td colSpan={2}><h2>Owner Information</h2></td>
                    </tr>
                    <tr>
                        <td>
                            <OwnerProfil nom={owner.firstName} prenom={owner.secondName}
                                         email={owner.email} phone={owner.phone}
                                         description={owner.description} country={owner.country} />
                        </td>
                    </tr>
                </table>
                <div className="user_buttons">
                    <button type="submit" className="user_edit">Edit Auction </button>
                    <Link to="/home">
                        <button type="button" className="user_confirm"
                                onClick={createAuc}>Validate my auction</button>
                    </Link>

                </div>
            </form>
        </div>


    const Edit = ({ onSubmit, children, }) =>
        <div className="user_form">
            <h1>New Auction Form</h1>
            <form onSubmit={onSubmit}>
                {children}
                <div className="user_row">
                    <button type="submit" id="submitBtn"
                            className="user_save">Save</button>
                    <Link to="/home">
                        <button type="cancel" className="user_cancel">Cancel</button>
                    </Link>
                </div>
            </form>
        </div>

    class AuctionProfileCard extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                file: '',
                imagePreviewUrl: '/images/Bid.jpg', text: '',
                category: '', title: '', itemName: '', initialPrice: '', currency: '',
                brand: '', stat: '', city: '', country: '', periodStart: '', periodEnd: '',
                owner: {
                    firstName: '',
                    secondName: '',
                    email: '',
                    phone: '',
                    description: "",
                    country: ''
                },
                isApprooved: false,
                active: 'edit',
                errors: {}
            }
        }

        photoUpload = e => {
            e.preventDefault();
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file);
        }
        editName = e => { const itemName = e.target.value; this.setState({ itemName, }) }
        editTitle = e => { const title = e.target.value; this.setState({ title, }) }
        editDescription = e => { const text = e.target.value; this.setState({ text, }) }
        editPrice = e => { const initialPrice = e.target.value; this.setState({ initialPrice, }) }
        // editCurrency= e =>{ const currency= e.target.value; this.setState({currency ,}) }
        editBrand = e => { const brand = e.target.value; this.setState({ brand, }) }
        editStat = e => { const stat = e.target.value; this.setState({ stat, }) }
        editCity = e => { const city = e.target.value; this.setState({ city, }) }
        editCountry = e => { const country = e.target.value; this.setState({ country, }) }
        editPeriodStart = e => { const periodStart = e.target.value; this.setState({ periodStart, }) }
        editPeriodEnd = e => { const periodEnd = e.target.value; this.setState({ periodEnd, }) }

        handleSubmit = e => {
            e.preventDefault();
            if (this.validate()) {
                let activeP = (this.state.active === 'edit') ? 'profile' : 'edit';
                console.log(this.state);
                this.setState({
                    active: activeP,
                })
            }
            console.log(this.state.errors);
        }
        createAuc = (e) => {
            const auctionProfil = {
                itemName: this.state.itemName,
                title: this.state.title,
                initialPrice: this.state.initialPrice,
                currency: this.state.currency,
                brand: this.state.brand,
                text: this.state.text,
                stat: this.state.stat,
                city: this.state.city,
                country: this.state.country,
                periodStart: this.state.periodStart,
                periodEnd: this.state.periodEnd,
                owner: this.state.owner,
                isApprooved: this.state.isApprooved

            };
            
            itemService.createItem(auctionProfil).then(r => {
                //this.props.history.push("/login");
                toast.success("Auction successfully created");
                ReactDOM.render(
                    <React.StrictMode>
                        <Router>
                            <Route>
                                <MyProfil/>
                            </Route>
                        </Router>
                    </React.StrictMode>,
                    document.getElementById("root")
                );
            })
        };


            validate() {
            let state = this.state;
            let errors = {};
            let isValid = true;

            if (typeof state.periodStart !== "undefined") {
                let start = new Date(state.periodStart);
                let now = Date.now();
                if (start - now <= 0) {
                    errors["periodStart"] = "Please choose a valid start date";
                    isValid = false;
                }
            }
            if (typeof state.periodEnd !== "undefined") {
                if (typeof state.periodStart == "undefined") {
                    errors["periodStart"] = "Please choose a start date.";
                    isValid = false;
                }
                else {
                    let end = new Date(state.periodEnd);
                    let start = new Date(state.periodStart);
                    if (end - start <= 0) {
                        errors["periodEnd"] = "Please choose a valid end date.";
                        isValid = false;
                    }
                }

            }

            this.setState({
                errors: errors
            });

            return isValid;
        }

        render() {


            this.state.category = localStorage.getItem('auctionCategory');;
            const { imagePreviewUrl, category, title, itemName, initialPrice, currency,
                brand, stat, city, country, periodStart, periodEnd,
                owner, text, isAprooved,
                active } = this.state;
            return (
                <div>
                    {(active === 'edit') ? (
                            <Edit onSubmit={this.handleSubmit}>
                                <table>
                                    <tr>
                                        <td>
                                            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                                        </td>
                                        <td>
                                            <h2>General Information</h2>
                                            <Title onChange={this.editTitle} value={title} />
                                            <Name onChange={this.editName} value={itemName} />
                                            <Categories />
                                            <Description onChange={this.editDescription} value={text} />
                                            <Brand onChange={this.editBrand} value={brand} />
                                            <Stat onChange={this.editStat} value={stat} />
                                        </td>
                                        <td><pre>           </pre></td>
                                        <td>
                                            <h2>Auction Information</h2>
                                            <div className="user_row">
                                                <Price onChange={this.editPrice} value={initialPrice} />
                                                <Currency />
                                            </div>
                                            <br />
                                            <div><label>Auction Period:</label></div>
                                            <div className="user_row">
                                                <PeriodStart onChange={this.editPeriodStart} value={periodStart} />
                                                <PeriodEnd onChange={this.editPeriodEnd} value={periodEnd} />
                                            </div>
                                            <div className="user_text-danger">{this.state.errors.periodStart}</div>
                                            <div className="user_text-danger">{this.state.errors.periodEnd}</div>

                                            <br />
                                            <div><label>Address:</label></div>
                                            <div className="user_row">
                                                <City onChange={this.editCity} value={city} />
                                                <Country onChange={this.editCountry} value={country} />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <br />
                                <table className="user_owner">
                                    <tr>
                                        <td><h3>Your Information:</h3></td>
                                        <td>
                                            <OwnerProfil nom={owner.firstName} prenom={owner.secondName}
                                                         email={owner.email} phone={owner.phone}
                                                         description={owner.description} country={owner.country} />
                                        </td>
                                    </tr>
                                </table>
                            </Edit>
                        ) :
                        (
                            <AuctionProfile
                                onSubmit={this.handleSubmit}
                                createAuc={this.createAuc()}
                                src={imagePreviewUrl}
                                category={category}
                                title={title}
                                name={itemName}
                                description={text}
                                price={initialPrice}
                                currency={currency}
                                brand={brand}
                                stat={stat}
                                city={city}
                                country={country}
                                periodStart={periodStart}
                                periodEnd={periodEnd}
                                owner={owner}
                            />)}

                </div>
            )
        }
    }

    return (
        <div className="user_auctionForm">
            <AuctionProfileCard />
        </div>

    );
};

export default NewAuctionForm;
