import React, { useEffect, useState } from 'react';
import NavUser from "../../components/User/NavUser"
import MenuUser from "../../components/User/MenuUser";
import UserFooter from "../../components/User/UserFooter";
import AuctionCard from "../../components/User/AuctionCard";
import { useLocation, useParams } from 'react-router-dom';
import itemService from "../../Service/itemService";


const ResultsByCategory = () => {
    const categId = useLocation().state.categId;
    const [itemsBycateg, setItemsByCateg] = useState([])

    useEffect(() => {
        itemService.getItemsByCategoryId(categId).then((res) => setItemsByCateg(res.data))
    }, []);

    return (
        <div>
            <div>
            <NavUser />
            <br/><br/>
            <MenuUser />
            <div id="user_result">
                <table>
                    <tr>
                    {itemsBycateg.map((item) => (
                               <td><AuctionCard item={item} /></td>
                               ))}
                        {/*
                        <td><AuctionCard/></td>
                        <td><AuctionCard/></td>
                        <td><AuctionCard/></td>
                        <td><AuctionCard/></td>
                        */}
                    </tr>
                </table>
            </div>
            <UserFooter />
        </div>
        </div>
    );
};

export default ResultsByCategory;