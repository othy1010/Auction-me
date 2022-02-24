import React, { useEffect, useState } from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter"
import UserHeader from "../../components/User/UserHeader"
import MenuUser from "../../components/User/MenuUser";
import Categories from "../../components/Categories";
import "../../styles/user_styles/style_Template.scss"
import AuctionCard from "../../components/User/AuctionCard";
import itemService from "../../Service/itemService";


class HomeUser extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            listItems: []
        }

    }
    componentDidMount() {
        itemService.getItems().then((response) => {


            console.log(response.data);

            this.setState({
                listItems: response.data,
            });
            //console.log("items");
            //console.log(this.state.item);

        });

    }
        render(){
       return (
           <div>
               <NavUser />
               <br/><br/>
               <UserHeader />
               <MenuUser />
               <br/>
               <div className="user_affichage">
               <div className="user_leftcolumn">
                       <div className="user_card">
                           <h3>Recently added auctions:</h3>
                           <table>
                               <tr>
                               {this.state.listItems.map((item) => (
                               <td><AuctionCard item={item} /></td>
                               ))}
                               </tr>
                               {/*
                               <tr>
                                   <td><AuctionCard /></td>
                                   <td><AuctionCard /></td>
                                   <td><AuctionCard /></td>
                               </tr>
                               */}
                           </table>

                       </div>
                   </div>
                   <div className="user_rightcolumn">
                       <Categories />
                   </div>
               </div>
               <UserFooter />
           </div>
       );
    }
};

export default HomeUser;
