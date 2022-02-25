import React from 'react';
import NavUser from "../../components/User/NavUser"
import MenuUser from "../../components/User/MenuUser";
import UserFooter from "../../components/User/UserFooter";
import AuctionProfile from "../../components/User/AuctionProfile";
import ProfileCard from '../../components/User/ProfilItemCard';
import AuctionDetails from '../../components/User/AuctionDetails';
import { useMatch } from "react-router-dom";


export default class AuctionInfo extends React.Component {
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
    constructor(props) {
        super(props);
        const queryParams = new URLSearchParams(window.location.search);
        const itemId = queryParams.get('itemId');
        this.state = {
            item: this.props.item,
            itemId: this.itemId
        };
        console.log(queryParams);
        console.log(itemId);

    }


    render() {
        // const { imagePreviewUrl, category, title, name, price, currency,
        //     brand, stat, city, country, periodStart, periodEnd,
        //     owner, description } = this.state;

        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('itemId');
        const name = queryParams.get('name');
        const type = queryParams.get('type');
        // console.log(id, "thisistheID");

        return (
            <div>
                <NavUser />
                <MenuUser />
                <br />
                <div className="user_auctionForm">
                    <div>
                        <AuctionDetails
                            src={"imagePreviewUrl"}
                            category={"category"}
                            title={"title"}
                            name={"name"}

                            description={"description"}
                            price={"price"}
                            currency={"currency"}
                            brand={"brand"}
                            stat={"stat"}
                            city={"city"}
                            country={"country"}
                            periodStart={"periodStart"}
                            periodEnd={"periodEnd"}
                            owner={"owner"}
                        />
                    </div>
                </div>
                <UserFooter />
            </div>
        );
    }

};
