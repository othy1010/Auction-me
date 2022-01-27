import React from 'react';
import "../../styles/user_styles/myProfil.scss"

const UserProfil = () => {
    const Profile =({ src, nom, prenom, description, adress, postal,
                    city, country, phone, cardNumber, expireDate, cvv,
                    email
                })=>
    <div  className="user_profil">
        <table className="user_profilCard">
            <tr>
                <td id="user_img">
                    <tr>
                        <td colSpan={2}>
                            <div className="user_img-wrap">
                                <img src={src} alt=""/>
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
            state = {
                imagePreviewUrl: '/images/profile.jpg',
                nom:'Alexus', prenom:'Alex', description:'-',
                postal:'12000', adress:'XXXX', city:'X City', country:'XX',
                phone:'212123456789', cardNumber:'1234 5678 1234',
                expireDate:'12/12/12', cvv:'123', email:'alex@gmail.com'
            }
            render() {
                const { imagePreviewUrl, nom, prenom, description,
                    postal, adress, city, country,  phone,
                    cardNumber, expireDate, cvv, email} = this.state;
                return (
                    <div>
                        <Profile
                            onSubmit={this.handleSubmit}
                            src={imagePreviewUrl}
                            nom={nom}
                            prenom={prenom}
                            description={description}
                            adress={adress}
                            postal={postal}
                            city={city}
                            country={country}
                            phone={phone}
                            cardNumber={cardNumber}
                            expireDate={expireDate}
                            cvv={cvv}
                            email={email}
                        />  
                    </div>
                )
            }
     }

        return (
           
            <div>
                <br/>
                <CardProfile/>
            </div>

        );
    };

    export default UserProfil;
