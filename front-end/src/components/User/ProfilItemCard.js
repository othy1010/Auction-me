import React from 'react';
import "../../styles/user_styles/user_AuctionForm.scss"
import AuctionDetails from './AuctionDetails';

class ProfileCard extends React.Component {
   state = this.props;
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
      const { imagePreviewUrl, category, title, name, price, currency,
         brand, stat, city, country, periodStart, periodEnd,
         owner, description } = this.state;

      return (
         <div>
            <AuctionDetails
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


export default ProfileCard;
