import React from 'react';
import NavUser from "../../components/User/NavUser"
import MenuUser from "../../components/User/MenuUser";
import UserFooter from "../../components/User/UserFooter";
import AuctionCard from "../../components/User/AuctionCard";

const Results = () => {
    //contain category fiilter + display result
    return (
        <div>
            <NavUser />
            <br/><br/>
            <MenuUser />
            <p>
                Result of Search and Displat all auctions / recently ended auctions.
                <br/><br/>
                Display result here in <b>div id="user_result"</b>
            </p>
            <div id="user_result">
                <table>
                    <tr>
                        <td><AuctionCard/></td>
                        <td><AuctionCard/></td>
                        <td><AuctionCard/></td>
                        <td><AuctionCard/></td>
                    </tr>
                </table>
            </div>
            <UserFooter />
        </div>
    );
};

export default Results;