import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/user_styles/user_AuctionForm.scss"
import UserService from '../../Service/UserService';

import {
   ImgUpload, Title, Name, Description,
   Price, Currency, Brand, Stat, City, Country,
   PeriodStart, PeriodEnd, OwnerProfil
} from "./AuctionDef";
import { Categories } from "./Categories";

const NewAuctionForm = () => {

   function createAuction(src, category, title, name, price, currency, description,
      brand, stat, city, country, periodStart, periodEnd,
      owner) {
      const auctionProfil = {
         "src": src,
         "name": name,
         "title": title,
         "price": price,
         "currency": currency,
         "brand": brand,
         "description": description,
         "stat": stat,
         "city": city,
         "country": country,
         "periodStart": periodStart,
         "periodEnd": periodEnd,
         "owner": owner
      };
      localStorage.setItem("auctionProfil", auctionProfil);
      alert("New Auction demand will be sent to the administrator");
   }


   const AuctionProfile = ({ onSubmit, src, category, title, name, price, currency,
      brand, stat, city, country, periodStart, periodEnd,
      owner, description
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
                     onClick={createAuction({ src }, { currency }, { title },
                        { name }, { price }, { currency }, { description },
                        { brand }, { stat }, { city }, { country }, { periodStart },
                        { periodEnd }, { owner })}>Validate my auction</button>
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


      state = {
         file: '',
         imagePreviewUrl: '/images/Bid.jpg', description: '',
         category: '', title: '', name: '', price: '', currency: '',
         brand: '', stat: '', city: '', country: '', periodStart: '', periodEnd: '',
         owner: {
            firstName: '',
            secondName: '',
            email: '',
            phone: '',
            description: "",
            country: ''
         },
         active: 'edit',
         errors: {}
      }

      componentDidMount() {
         UserService.getUserById(1).then((res) => {

            console.log(this.state.owner);
            this.setState({
               owner: res.data
            });
            console.log(this.state.owner);

         });

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
      editName = e => { const name = e.target.value; this.setState({ name, }) }
      editTitle = e => { const title = e.target.value; this.setState({ title, }) }
      editDescription = e => { const description = e.target.value; this.setState({ description, }) }
      editPrice = e => { const price = e.target.value; this.setState({ price, }) }
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
         const { imagePreviewUrl, category, title, name, price, currency,
            brand, stat, city, country, periodStart, periodEnd,
            owner, description,
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
                              <Name onChange={this.editName} value={name} />
                              <Categories />
                              <Description onChange={this.editDescription} value={description} />
                              <Brand onChange={this.editBrand} value={brand} />
                              <Stat onChange={this.editStat} value={stat} />
                           </td>
                           <td><pre>           </pre></td>
                           <td>
                              <h2>Auction Information</h2>
                              <div className="user_row">
                                 <Price onChange={this.editPrice} value={price} />
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