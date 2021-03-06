import React from 'react';
import "../../styles/user_styles/myProfil.scss"
import UserService from "../../Service/UserService";

const UserProfil = () => {
    const Profile = ({ src, nom, prenom, description, adress, postal,
        city, country, phone, cardNumber, expireDate, cvv,
        email
    }) =>
        <div className="user_profil">
            <table className="user_profilCard">
                <tr>
                    <td id="user_img">
                        <tr>
                            <td colSpan={2}>
                                <div className="user_img-wrap">
                                    <img src={src} alt="" />
                                </div>
                            </td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    {/*General info*/}
                    <td>
                        <tr>
                            <td colSpan={2}><h2>General Information</h2></td>
                        </tr>
                        <tr>
                            <td><b>Full Name:</b></td>
                            <td><div className="user_nom">{nom} {prenom}</div></td>
                        </tr>
                        <tr>
                            <td><b>Desciption:</b></td>
                            <td><div className="user_description">" {description} "</div>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Email:</b></td>
                            <td><div className="user_email">{email}</div></td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    {/*Personal info*/}
                    <td>
                        <tr>
                            <td colSpan={2}><h2>Personal Information</h2></td>
                        </tr>
                        <tr>
                            <td><b>Phone Number:</b> </td>
                            <td> <div className="user_phone">{phone}</div></td>
                        </tr>
                        <tr>
                            <td><b>Adress:</b> </td>
                            <td>
                                <div className="user_adress">
                                    {postal}, {adress}, {city}</div>
                            </td>
                        </tr>

                        <tr>
                            <td><b>Country:</b></td> <
                                td><div className="user_country">{country}</div></td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    {/*Card  info*/}
                    <td>
                        <tr>
                            <td colSpan={2}><h2>Payment Details</h2></td>
                        </tr>
                        <tr>
                            <td><b>Card Number:</b> </td>
                            <td><div className="user_cardNumber">{cardNumber}</div></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <tr>
                                    <td><b>Expire Date:</b> </td>
                                    <td><div className="user_expireDate">{expireDate}</div></td>
                                    <td><b>CVV:</b> </td>
                                    <td><div className="user_cvv">{cvv}</div></td>
                                </tr>
                            </td>

                        </tr>
                    </td>
                </tr>

            </table>
        </div>

    class CardProfile extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                user: "",
            };
        }
        componentDidMount() {
            UserService.getUsers(1).then((response) => {


                //console.log(response.data);

                this.setState({
                    user: response.data.filter(
                        user => user.userId == 1

                    )[0],
                });
                //console.log(this.state.user);

            });

        }

        render() {

            const { user } = this.state;

            return (
                <div>
                    <Profile
                        onSubmit={this.handleSubmit}
                        src={"/images/Bid.jpg"}
                        nom={user.firstName}
                        prenom={user.lastName}
                        description={"description"}
                        adress={user.address}
                        postal={"postal"}
                        city={user.city}
                        country={user.country}
                        phone={user.phone}
                        cardNumber={user.paymentAccount}
                        expireDate={"expireDate"}
                        cvv={"cvv"}
                        email={"email"}
                    />
                </div>
            )
        }
    }

    return (

        <div>
            <br />
            <CardProfile />
        </div>

    );
};

export default UserProfil;