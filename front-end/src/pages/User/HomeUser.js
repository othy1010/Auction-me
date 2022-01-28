import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter"
import UserHeader from "../../components/User/UserHeader"
import MenuUser from "../../components/User/MenuUser";
import Categories from "../../components/Categories";
import "../../styles/user_styles/style_Template.scss"
import AuctionCard from "../../components/User/AuctionCard";

const HomeUser = () => {
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
                                   <td><AuctionCard /></td>
                                   <td><AuctionCard /></td>
                                   <td><AuctionCard /></td>
                               </tr>
                               <tr>
                                   <td><AuctionCard /></td>
                                   <td><AuctionCard /></td>
                                   <td><AuctionCard /></td>
                               </tr>
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
};

export default HomeUser;
