import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter";
import UserProfil from "../../components/User/UserProfil";
import MyMadeAuctions from "../../components/User/myMadeAuctions";
import MySubscribedAuctions from "../../components/User/MySubscribedAuctions";
import '../../styles/user_styles/myProfilAuctions.scss';


const MyProfil = () => {
    return (
        <div>
            <NavUser />

            <table>
                <tr>
                    <td rowSpan={2}>
                        <UserProfil/>
                    </td>
                    <td>
                        <MySubscribedAuctions />
                    </td>
                </tr>
                <tr>
                   <td>
                       <MyMadeAuctions />
                   </td>
                </tr>
            </table>
            <UserFooter />
        </div>
    );
};

export default MyProfil;