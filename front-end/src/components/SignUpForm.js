import React from 'react';
import { Link } from "react-router-dom";
import "../styles/user_styles/signup.scss"
import {
    ImgUpload, Nom, Prenom, Description, Phone,
    Adress, Postal, City, Country, CardNumber, ExpireDate,
    CVV, Email, Password, ConfPassword
} from "./User/UserDef"

const SignUpForm = () => {
    const AgreeToTerms = ({ onChange, value }) =>
        <div className="user_field">
            <label htmlFor="terms">
                <input id="terms" onChange={onChange} type="checkbox" value={value} required />
                I read the privacy policy and I agree to the use terms.
            </label>
        </div>

    function createAcc(src, nom, prenom, description, adress, postal,
        city, country, phone, cardNumber, expireDate, cvv,
        email, password) {
        const profil = {
            "src": src,
            "nom": nom,
            "prenom": prenom,
            "description": description,
            "adress": adress,
            "postal": postal,
            "city": city,
            "country": country,
            "phone": phone,
            "cardNumber": cardNumber,
            "expireDate": expireDate,
            "cvv": cvv,
            "email": email,
            "password": password
        };
        localStorage.setItem("profil", profil);
        alert("Your account will be shortly created.");
    }


    const Profile = ({ onSubmit, src,
        nom, prenom, description, adress, postal, city, country, phone, cardNumber, expireDate, cvv,
        email, password,
    }) =>
        <div className="user_form">
            <form onSubmit={onSubmit}>
                <h1>Your Profil - Preview</h1>
                <table>
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
                                <td><b>Last Name:</b></td> <td><div className="user_nom">{nom}</div></td>
                            </tr>
                            <tr>
                                <td><b>First Name:</b></td> <td><div className="user_prenom">{prenom}</div></td>
                            </tr>
                            <tr>
                                <td><b>Desciption:</b></td><td><div className="user_description">{description}</div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Email:</b></td>
                                <td><div className="user_email">{email}</div></td>
                            </tr>
                        </td>
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
                                <td><div className="user_adress">{adress}</div></td>
                            </tr>
                            <tr>
                                <td><b>Postal Code:</b> </td>
                                <td><div className="user_postal">{postal}</div></td>
                            </tr>
                            <tr>
                                <td><b>City:</b> </td>
                                <td><div className="user_city">{city}</div></td>
                            </tr>
                            <tr>
                                <td><b>Country:</b></td> <
                                    td><div className="user_country">{country}</div></td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                            <tr>
                                <td colSpan={2}><h2>Payment Details</h2></td>
                            </tr>
                            <tr>
                                <td><b>Card Number:</b> </td>
                                <td><div className="user_cardNumber">{cardNumber}</div></td>
                            </tr>
                            <tr>
                                <td><b>Expire Date:</b> </td>
                                <td><div className="user_expireDate">{expireDate}</div></td>
                            </tr>
                            <tr>
                                <td><b>CVV:</b> </td>
                                <td><div className="user_cvv">{cvv}</div></td>
                            </tr>
                        </td>
                        <td />
                    </tr>

                </table>
                <div className="user_buttons">
                    <button type="submit" className="user_edit">Edit Profile </button>
                    <Link to="/login">
                        <button type="button" className="user_confirm"
                            onClick={createAcc({ src }, { nom }, { prenom }, { description }, { adress },
                                { postal }, { city }, { country }, { phone }, { cardNumber }, { expireDate }, { cvv },
                                { email }, { password })}>Create my account</button>
                    </Link>

                </div>
            </form>
        </div>


    const Edit = ({ onSubmit, children, }) =>
        <div className="user_form">
            <h1>Sign up Form</h1>
            <form onSubmit={onSubmit}>
                {children}
                <div className="user_row">
                    <button type="submit" id="submitBtn"
                        className="user_save">Save</button>
                    <Link to="/login">
                        <button type="cancel" className="user_cancel">Cancel</button>
                    </Link>
                </div>
            </form>
        </div>

    class CardProfile extends React.Component {
        state = {
            file: '',
            imagePreviewUrl: '/images/profile.jpg',
            nom: '', prenom: '', description: '-', postal: '', adress: '', city: '', country: '', phone: '',
            cardNumber: '', expireDate: '', cvv: '', email: '', password: '', confPassword: '',
            active: 'edit', agree: 'false',
            errors: {}
        }

        photoUpload = e => {
            e.preventDefault();
            const reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file);
        }
        editNom = e => {
            const nom = e.target.value;
            this.setState({ nom, });
        }
        editPrenom = e => {
            const prenom = e.target.value;
            this.setState({ prenom, });
        }
        editDesc = e => {
            const desc = e.target.value;
            this.setState({ desc, });
        }
        editPostal = e => {
            const postal = e.target.value;
            this.setState({ postal, });
        }
        editAdress = e => {
            const adress = e.target.value;
            this.setState({ adress, });
        }
        editCity = e => {
            const city = e.target.value;
            this.setState({ city, });
        }
        editCountry = e => {
            const country = e.target.value;
            this.setState({ country, });
        }
        editPhone = e => {
            const phone = e.target.value;
            this.setState({ phone, });
        }
        editEmail = e => {
            const email = e.target.value;
            this.setState({ email, });
        }
        editPwd = e => {
            const password = e.target.value;
            this.setState({ password, });
        }
        editConfPwd = e => {
            const confPassword = e.target.value;
            this.setState({ confPassword, });
        }
        editCard = e => {
            const cardNumber = e.target.value;
            this.setState({ cardNumber, });
        }
        editExpireDate = e => {
            const expireDate = e.target.value;
            this.setState({ expireDate, });
        }
        editCVV = e => {
            const cvv = e.target.value;
            this.setState({ cvv, });
        }
        editAgree = e => {
            const agree = e.target.checked;
            this.setState({ agree, });
        }

        handleSubmit = e => {
            e.preventDefault();
            if (this.validate()) {
                let activeP = (this.state.active === 'edit') ? 'profile' : 'edit';
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
            if (typeof state.phone !== "undefined") {
                var pattern = new RegExp(/^[0-9\b]+$/);
                if (!pattern.test(state.phone)) {
                    isValid = false;
                    errors["phone"] = "Please enter your country's id number (without +) followed by yours.";
                }
            }

            if (typeof state.password !== "undefined" && typeof state.confPassword !== "undefined") {
                if (state.password !== state.confPassword) {
                    isValid = false;
                    errors["confPassword"] = "The two passwords don't match.";
                }
            }
            if (state.agree !== true) {
                isValid = false;
                errors["agree"] = "You must agree to the use terms first.";
            }
            if (typeof state.expireDate !== "undefined") {
                let expire = new Date(state.expireDate);
                let now = Date.now();
                if (expire - now <= 0) {
                    errors["expireDate"] = "Unvalid card expire date.";
                    isValid = false;
                }
            }
            if (typeof state.cardNumber !== "undefined") {
                let cardN = state.cardNumber.toString();
                if (cardN.length < 8 || cardN.length > 19) {
                    isValid = false;
                    errors["cardNumber"] = "The card number must contain 8 to 19 numbers.";
                }
            }
            if (typeof state.cvv !== "undefined") {
                let cvv = state.cvv.toString();
                if (cvv.length !== 3) {
                    isValid = false;
                    errors["cvv"] = "CVV must contain 3 numbers.";
                }
            }

            this.setState({
                errors: errors
            });

            return isValid;
        }

        render() {
            const { imagePreviewUrl, nom, prenom, description,
                postal, adress, city, country, phone, password, confPassword,
                cardNumber, expireDate, cvv, email,
                active } = this.state;
            return (
                <div>
                    {(active === 'edit') ? (
                        <Edit onSubmit={this.handleSubmit}>
                            <table>
                                <tr>
                                    <td>
                                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                                    </td>
                                    <td>
                                        <h2>General Information</h2>
                                        <div className="user_row">
                                            <Nom onChange={this.editNom} value={nom} />
                                            <Prenom onChange={this.editPrenom} value={prenom} />
                                        </div>
                                        <Description onChange={this.editDesc} value={description} />
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <h2>Personal Information</h2>
                                        <Adress onChange={this.editAdress} value={adress} />
                                        <div className="user_row">
                                            <City onChange={this.editCity} value={city} />
                                            <Country onChange={this.editCountry} value={country} />
                                        </div>
                                        <div className="user_row">
                                            <Postal onChange={this.editPostal} value={postal} />
                                            <Phone onChange={this.editPhone} value={phone} />
                                        </div>
                                        <div className="user_text-danger">{this.state.errors.phone}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <h2>Payment Details</h2>
                                        <CardNumber onChange={this.editCard} value={cardNumber} />
                                        <div className="user_text-danger">{this.state.errors.cardNumber}</div>
                                        <div className="user_row">
                                            <ExpireDate onChange={this.editExpireDate} value={expireDate} />
                                            <CVV onChange={this.editCVV} value={cvv} />
                                        </div>
                                        <div className="user_text-danger">{this.state.errors.expireDate}</div>
                                        <div className="user_text-danger">{this.state.errors.cvv}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <h2>Account Credentials</h2>
                                        <Email onChange={this.editEmail} value={email} />
                                        <Password onChange={this.editPwd} value={password} />
                                        <ConfPassword onChange={this.editConfPwd} value={confPassword} />
                                        <div className="user_text-danger">{this.state.errors.confPassword}</div>
                                        <AgreeToTerms onChange={this.editAgree} />
                                        <div className="user_text-danger">{this.state.errors.agree}</div>
                                    </td>
                                </tr>
                            </table>
                        </Edit>
                    ) :
                        (
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
                                password={password}
                            />)}

                </div>
            )
        }
    }

    return (
        <div>
            <div className="user_top" />
            <CardProfile />
        </div>

    );
};

export default SignUpForm;
