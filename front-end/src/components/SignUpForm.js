import React from 'react';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../styles/user_styles/signup.scss"
import { ImgUpload, Nom, Prenom, Description, Phone, Birthday, Birthplace, Sexe,
    Address, Postal, City, Country, CardNumber, ExpireDate,
    CVV, Email, Password, ConfPassword } from "./User/UserDef"
import UserService from "../Service/UserService";
import toast from "react-hot-toast";
import ReactDOM from "react-dom";
import AppAdmin from "../AppAdmin";
import AppUser from "../AppUser";
import Login from "../pages/Login";

const SignUpForm = () => {
    const AgreeToTerms =({ onChange, value}) =>
        <div className="user_field">
            <label htmlFor="terms">
            <input id="terms" onChange={onChange} type="checkbox" value={value} required/>
                I read the <Link to="/privacy">privacy policy</Link> and I agree to the use terms.
            </label>
        </div>

    function userSexe(sexe){
        if(sexe === 1)
            return "Male";
        else if(sexe === 0)
            return "Female";
        else
            return "Not Specified";
    }

    const Profile =({ onSubmit, src, createAcc,
                        nom, prenom, description, address, postal, city, country, phone, cardNumber, expireDate, cvv,
                        email, password, birthday, birthplace, sexe
                    })=>
        <div className="user_form">
            <form onSubmit={onSubmit}>
                <h1>Your Profil - Preview</h1>
                <table>
                    <tr>
                        <td>
                            <div className="user_img-wrap">
                                <img src={src} alt=""/>
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
                                <td><b>Sexe:</b></td>
                                <td><div className="user_sexe">{userSexe(sexe)}
                                </div></td>
                            </tr>
                            <tr>
                                <td><b>Birthday:</b></td> <td><div className="user_birthday">{birthday}</div></td>
                            </tr>
                            <tr>
                                <td><b>Birth Place:</b></td> <td><div className="user_prenom">{birthplace}</div></td>
                            </tr>
                            <tr>
                                <td><b>Description:</b></td><td><div className="user_description">{description}</div>
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
                                <td><b>Address:</b> </td>
                                <td><div className="user_address">{address}</div></td>
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
                        <td/>
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
                        <td/>
                    </tr>

                </table>
               <div className="user_buttons">
                    <button type="submit" className="user_edit">Edit Profile </button>

                       <button type="button" className="user_confirm"
                               onClick={createAcc}>Create my account</button>
                   
                </div>
            </form>
        </div>


    const Edit =({ onSubmit,  children, })=>
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
        constructor(props) {
            super(props);
            this.state = {
                file: '',
                imagePreviewUrl: '/images/profile.jpg',
                nom:'', prenom:'', description:'-', postal:'', address:'', city:'', country:'',  phone:'',
                cardNumber:'', expireDate:'', cvv:'', email:'', password:'', confPassword:'',
                active: 'edit', agree:'false', birthday:'', birthplace:'',sexe:'',
                errors:{}
            };
            this.photoUpload = this.photoUpload.bind(this);
            this.editNom = this.editNom.bind(this);
            this.editPrenom = this.editPrenom.bind(this);
            this.editDesc = this.editDesc.bind(this);
            this.editPostal = this.editPostal.bind(this);
            this.editAddress = this.editAddress.bind(this);
            this.editBirthday = this.editBirthday.bind(this);
            this.editBirthPlace = this.editBirthPlace.bind(this);
            this.editSexe = this.editSexe.bind(this);
            this.editCity = this.editCity.bind(this);
            this.editCountry = this.editCountry.bind(this);
            this.editPhone = this.editPhone.bind(this);
            this.editEmail = this.editEmail.bind(this);
            this.editPwd = this.editPwd.bind(this);
            this.editConfPwd = this.editConfPwd.bind(this);
            this.editCard = this.editCard.bind(this);
            this.editExpireDate = this.editExpireDate.bind(this);
            this.editCVV = this.editCVV.bind(this);
            this.editAgree = this.editAgree.bind(this);
        }


        photoUpload = e =>{
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
        editNom = e =>{
            const nom = e.target.value;
            this.setState({ nom, });
        }
        editPrenom = e =>{
            const prenom = e.target.value;
            this.setState({ prenom, });
        }
        editDesc = e =>{
            const desc = e.target.value;
            this.setState({ desc, });
        }
        editPostal = e =>{
            const postal = e.target.value;
            this.setState({ postal, });
        }
        editAddress = e =>{
            const address = e.target.value;
            this.setState({ address, });
        }
        editBirthday = e =>{
            const birthday = e.target.value;
            this.setState({ birthday, });
        }
        editBirthPlace = e =>{
            const birthPlace = e.target.value;
            this.setState({ birthPlace, });
        }
        editSexe = e =>{
            const sexe = e.target.value;
            this.setState({ sexe, });
        }
        editCity = e =>{
            const city = e.target.value;
            this.setState({ city, });
        }
        editCountry = e =>{
            const country = e.target.value;
            this.setState({ country, });
        }
        editPhone = e =>{
            const phone = e.target.value;
            this.setState({ phone, });
        }
        editEmail = e =>{
            const email = e.target.value;
            this.setState({ email, });
        }
        editPwd = e =>{
            const password = e.target.value;
            this.setState({ password, });
        }
        editConfPwd = e =>{
            const confPassword = e.target.value;
            this.setState({ confPassword, });
        }
        editCard = e =>{
            const cardNumber = e.target.value;
            this.setState({ cardNumber, });
        }
        editExpireDate = e =>{
            const expireDate = e.target.value;
            this.setState({ expireDate, });
        }
        editCVV = e =>{
            const cvv = e.target.value;
            this.setState({ cvv, });
        }
        editAgree = e =>{
            const agree = e.target.checked;
            this.setState({ agree, });
        }

        handleSubmit= e =>{
            e.preventDefault();
            if(this.validate()) {
                let activeP = (this.state.active === 'edit' )? 'profile' : 'edit';
                console.log(this.state);
                this.setState({
                    active: activeP,
                })
            }
            console.log(this.state.errors);
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
            if(typeof state.email !=="undefined"){
                var exist =0;
                UserService.findByEmail(this.state.email).then((response) => {
                    if (response.data != "") {
                        exist = 1;
                    }
                });
                if(exist == 1){
                    isValid = false;
                    errors["email"] = "This email already exists.";
                }
            }

            if (typeof state.password !== "undefined" && typeof state.confPassword !== "undefined") {
                if (state.password !== state.confPassword) {
                    isValid = false;
                    errors["confPassword"] = "The two passwords don't match.";
                }
            }
            if( state.agree !== true){
                isValid = false;
                errors["agree"] = "You must agree to the use terms first.";
            }
            if(typeof state.expireDate !== "undefined")
            {
                let expire = new Date(state.expireDate);
                let now = Date.now();
                if(expire - now <= 0){
                    errors["expireDate"] = "Unvalid card expire date.";
                    isValid = false;
                }
            }
            if (typeof state.cardNumber !== "undefined") {
                let cardN = state.cardNumber.toString();
                if(cardN.length< 8 || cardN.length > 19){
                    isValid = false;
                    errors["cardNumber"] = "The card number must contain 8 to 19 numbers.";
                }
            }
            if (typeof state.cvv !== "undefined") {
                let cvv = state.cvv.toString();
                if(cvv.length !== 3){
                    isValid = false;
                    errors["cvv"] = "CVV must contain 3 numbers.";
                }
            }

            this.setState({
                errors: errors
            });

            return isValid;
        }

        createAcc = (e) => {
            e.preventDefault();
            let user = {
                userId: null,
                username: this.state.nom + ' ' + this.state.prenom,
                token: null,
                firstName: this.state.nom,
                secondName: this.state.prenom,
                sexe: this.state.sexe,
                country: this.state.country,
                city: this.state.city,
                address: this.state.address,
                birthday: this.state.birthday,
                birthplace: this.state.birthplace,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password,
                isAdmin: 0,
                isConfirmed: 0,
                paymentAccount: this.state.cardNumber
            }
            UserService.createUser(user).then(r => {
                //this.props.history.push("/login");
                toast.success("Account successfully created");
                ReactDOM.render(
                    <React.StrictMode>
                        <Router>
                            <Route>
                                <Login/>
                            </Route>
                        </Router>
                    </React.StrictMode>,
                    document.getElementById("root")
                );
            }) 
        };

        render() {
            const { imagePreviewUrl, nom, prenom, description,
                postal, address, city, country,  phone, password, confPassword,
                cardNumber, expireDate, cvv, email, birthday, birthplace, sexe,
                active} = this.state;
            return (
                <div>
                    {(active === 'edit')?(
                        <Edit onSubmit={this.handleSubmit}>
                            <table>
                                <tr>
                                    <td>
                                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
                                    </td>
                                    <td>
                                        <h2>General Information</h2>
                                        <div className="user_row">
                                            <Nom onChange={this.editNom} value={nom}/>
                                            <Prenom onChange={this.editPrenom} value={prenom}/>
                                        </div>
                                        <div className="user_row">
                                            <Birthday onChange={this.editBirthday} value={birthday}/>
                                            <Birthplace onChange={this.editBirthPlace} value={birthplace}/>
                                        </div>
                                        <Sexe onChange={this.editSexe} value={sexe}/>
                                        <Description onChange={this.editDesc} value={description}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td/>
                                    <td>
                                        <h2>Personal Information</h2>
                                        <Address onChange={this.editAddress} value={address}/>
                                        <div className="user_row">
                                            <City onChange={this.editCity} value={city}/>
                                            <Country onChange={this.editCountry} value={country}/>
                                        </div>
                                       <div className="user_row">
                                            <Postal onChange={this.editPostal} value={postal}/>
                                            <Phone onChange={this.editPhone} value={phone}/>
                                        </div>
                                        <div className="user_text-danger">{this.state.errors.phone}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td/>
                                    <td>
                                        <h2>Payment Details</h2>
                                        <CardNumber onChange={this.editCard} value={cardNumber}/>
                                        <div className="user_text-danger">{this.state.errors.cardNumber}</div>
                                        <div className="user_row">
                                            <ExpireDate onChange={this.editExpireDate} value={expireDate}/>
                                            <CVV onChange={this.editCVV} value={cvv}/>
                                        </div>
                                        <div className="user_text-danger">{this.state.errors.expireDate}</div>
                                        <div className="user_text-danger">{this.state.errors.cvv}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td/>
                                    <td>
                                        <h2>Account Credentials</h2>
                                        <Email onChange={this.editEmail} value={email}/>
                                        <div className="user_text-danger">{this.state.errors.email}</div>
                                        <Password onChange={this.editPwd} value={password}/>
                                        <ConfPassword onChange={this.editConfPwd} value={confPassword}/>
                                        <div className="user_text-danger">{this.state.errors.confPassword}</div>
                                        <AgreeToTerms onChange={this.editAgree}/>
                                        <div className="user_text-danger">{this.state.errors.agree}</div>
                                    </td>
                                </tr>
                            </table>
                        </Edit>
                    ):
                        (
                        <Profile
                            onSubmit={this.handleSubmit}
                            createAcc={this.createAcc}
                            src={imagePreviewUrl}
                            nom={nom}
                            prenom={prenom}
                            description={description}
                            address={address}
                            sexe={sexe}
                            birthday={birthday}
                            birthplace={birthplace}
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
            <div className="user_top"/>
            <CardProfile/>
        </div>

    );
};

export default SignUpForm;
