import React from 'react';
import "../../styles/user_styles/user_AuctionForm.scss"

export default class AuctionDetails extends React.Component {

   render() {
      const { onSubmit, src, category, title, name, price, currency,
         brand, stat, city, country, periodStart, periodEnd,
         owner, description
      } = this.state;

      return (

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
      )
   }
}







// ) =>
