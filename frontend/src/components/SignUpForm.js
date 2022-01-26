import React from 'react';
import {Link} from "react-router-dom";

const SignUpForm = () => {
    const ImgUpload =({ onChange, src })=>
        <label htmlFor="photo-upload" className="custom-file-upload fas">
            <div className="img-wrap img-upload" >
                <img for="photo-upload" src={src} alt=""/>
            </div>
            <input id="photo-upload" type="file" onChange={onChange}/>
        </label>

    const Nom =({ onChange, value })=>
        <div className="field">
            <label htmlFor="nom">
                Last Name:
            </label>
            <input
                id="nom"
                type="text"
                onChange={onChange}
                maxLength={25}
                value={value}
                placeholder="Bright"
                required/>
        </div>
    const Prenom =({ onChange, value })=>
        <div className="field">
            <label htmlFor="prenom">
                First Name:
            </label>
            <input
                id="prenom"
                type="text"
                onChange={onChange}
                maxLength={25}
                value={value}
                placeholder="Alexa"
                required/>
        </div>
    const Description =({ onChange, value })=>
        <div className="field">
            <label htmlFor="desc">
                Description:
            </label>
            <input
                id="desc"
                type="text"
                onChange={onChange}
                value={value}
                placeholder="I like selling paintings."
                />
        </div>
    const Phone =({ onChange, value })=>
        <div className="field">
            <label htmlFor="phone">
                Phone Number:
            </label>
            <input
                id="phone"
                type="text"
                onChange={onChange}
                minLength={10}
                maxLength={14}
                value={value}
                required/>
        </div>
    const Adress =({ onChange, value })=>
        <div className="field">
            <label htmlFor="adress">
                Adress:
            </label>
            <input
                id="adress"
                type="text"
                onChange={onChange}
                value={value}
                required/>
        </div>
    const Postal =({ onChange, value })=>
        <div className="field">
            <label htmlFor="postal">
                Postal Code:
            </label>
            <input
                id="postal"
                type="text"
                onChange={onChange}
                minLength={4}
                maxLength={10}
                value={value}
                required/>
        </div>
    const City =({ onChange, value })=>
        <div className="field">
            <label htmlFor="city">
                City:
            </label>
            <input
                id="city"
                type="text"
                onChange={onChange}
                value={value}
                required/>
        </div>
    const Country =({ onChange, value })=>
        <div className="field">
            <label htmlFor="country">
                Country:
            </label>
            <input
                id="country"
                type="text"
                onChange={onChange}
                value={value}
                required/>
        </div>
    const Email =({ onChange, value })=>
        <div className="field">
            <label htmlFor="email">
                Email:
            </label>
            <input
                id="email"
                type="email"
                onChange={onChange}
                value={value}
                required/>
        </div>
    const Password =({ onChange, value })=>
        <div className="field">
            <label htmlFor="password">
                Password:
            </label>
            <input
                id="password"
                type="password"
                onChange={onChange}
                value={value}
                required/>
        </div>
    const ConfPassword =({ onChange, value })=>
        <div className="field">
            <label htmlFor="confPassword">
                Confirm Password:
            </label>
            <input
                id="confPassword"
                type="password"
                onChange={onChange}
                value={value}
                required/>
        </div>
    const CardNumber =({ onChange, value })=>
        <div className="field">
            <label htmlFor="cardNum">
                Card Number:
            </label>
            <input
                id="nom"
                type="number"
                onChange={onChange}
                minLength={8}
                maxLength={19}
                value={value}
                placeholder="xxxx xxxx xxxx xxxx"
                required/>
        </div>
    const ExpireDate =({ onChange, value })=>
        <div className="field">
            <label htmlFor="expireDate">
                Expire Date:
            </label>
            <input
                id="expireDate"
                type="date"
                onChange={onChange}
                value={value}
                placeholder="01/01/2030"
                required/>
        </div>
    const CVV =({ onChange, value })=>
        <div className="field">
            <label htmlFor="cvv">
                CVV:
            </label>
            <input
                id="cvv"
                type="number"
                onChange={onChange}
                minLength={3}
                maxLength={3}
                value={value}
                placeholder="xxx"
                required/>
        </div>


    const createAcc= (src, nom, prenom, description, adress, postal,
                   city, country, phone, cardNumber, expireDate, cvv,
                   email, password) => {
            const profil= {
                "src":src,
                "nom": nom,
                "prenom": prenom,
                "description":description,
                "adress": adress,
                "postal":postal,
                "city":city,
                "country":country,
                "phone":phone,
                "cardNumber":cardNumber,
                "expireDate": expireDate,
                "cvv": cvv,
                "email": email,
                "password": password
            };
        localStorage.setItem("profil", profil);
        alert("Your account will be shortly created.");
    }


    const Profile =({ onSubmit, src,
                        nom, prenom, description, adress, postal, city, country, phone, cardNumber, expireDate, cvv,
                        email, password,
                    })=>
        <div className="form">
            <form onSubmit={onSubmit}>
                <h1>Your Profil - Preview</h1>
                <table>
                    <tr>
                        <td>
                            <div className="img-wrap">
                                <img src={src} alt=""/>
                            </div>
                        </td>
                        <td>
                            <tr>
                                <td colSpan={2}><h2>General Information</h2></td>
                            </tr>
                            <tr>
                                <td><b>Last Name:</b></td> <td><div className="nom">{nom}</div></td>
                            </tr>
                            <tr>
                                <td><b>First Name:</b></td> <td><div className="prenom">{prenom}</div></td>
                            </tr>
                            <tr>
                                <td><b>Desciption:</b></td><td><div className="description">{description}</div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Email:</b></td>
                                <td><div className="email">{email}</div></td>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <td colSpan={2}><h2>Personal Information</h2></td>
                            </tr>
                            <tr>
                                <td><b>Phone Number:</b> </td>
                                <td> <div className="phone">{phone}</div></td>
                            </tr>
                            <tr>
                                <td><b>Adress:</b> </td>
                                <td><div className="adress">{adress}</div></td>
                            </tr>
                            <tr>
                                <td><b>Postal Code:</b> </td>
                                <td><div className="postal">{postal}</div></td>
                            </tr>
                            <tr>
                                <td><b>City:</b> </td>
                                <td><div className="city">{city}</div></td>
                            </tr>
                            <tr>
                                <td><b>Country:</b></td> <
                                td><div className="country">{country}</div></td>
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
                                <td><div className="cardNumber">{cardNumber}</div></td>
                            </tr>
                            <tr>
                                <td><b>Expire Date:</b> </td>
                                <td><div className="expireDate">{expireDate}</div></td>
                            </tr>
                            <tr>
                                <td><b>CVV:</b> </td>
                                <td><div className="cvv">{cvv}</div></td>
                            </tr>
                        </td>
                        <td/>
                    </tr>

                </table>
               <div className="buttons">
                    <button type="submit" className="edit">Edit Profile </button>
                   <Link to="/login">
                       <button type="submit" className="confirm"
                               onClick={createAcc({src}, {nom}, {prenom}, {description}, {adress},
                               {postal}, {city}, {country}, {phone}, {cardNumber}, {expireDate}, {cvv},
                               {email}, {password})}>Create my account</button>
                   </Link>

                </div>
            </form>
        </div>


    const Edit =({ onSubmit,  children, })=>
        <div className="form">
            <h1>Sign up Form</h1>
            <form onSubmit={onSubmit}>
                {children}
                <button type="submit"className="save">Save</button>
            </form>
        </div>

    class CardProfile extends React.Component {
        state = {
            file: '',
            imagePreviewUrl: '/images/profile.jpg',
            nom:'', prenom:'', description:'-', postal:'', adress:'', city:'', country:'',  phone:'',
            cardNumber:'', expireDate:'', cvv:'', email:'', password:'', confPassword:'',
            active: 'edit',
            errors:{}
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
        editAdress = e =>{
            const adress = e.target.value;
            this.setState({ adress, });
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

            if (typeof state.password !== "undefined" && typeof state.confPassword !== "undefined") {
                if (state.password !== state.confPassword) {
                    isValid = false;
                    errors["confPassword"] = "The two passwords don't match.";
                }
            }

            this.setState({
                errors: errors
            });

            return isValid;
        }

        render() {
            const { file, imagePreviewUrl, nom, prenom, description,
                postal, adress, city, country,  phone,
                cardNumber, expireDate, cvv, email, password, confPassword,
                active, errors} = this.state;
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
                                        <div className="row">
                                            <Nom onChange={this.editNom} value={nom}/>
                                            <Prenom onChange={this.editPrenom} value={prenom}/>
                                        </div>
                                        <Description onChange={this.editDesc} value={description}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td/>
                                    <td>
                                        <h2>Personal Information</h2>
                                        <Adress onChange={this.editAdress} value={adress}/>
                                        <div className="row">
                                            <City onChange={this.editCity} value={city}/>
                                            <Country onChange={this.editCountry} value={country}/>
                                        </div>
                                       <div className="row">
                                            <Postal onChange={this.editPostal} value={postal}/>
                                            <Phone onChange={this.editPhone} value={phone}/>
                                        </div>
                                        <div className="text-danger">{this.state.errors.phone}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td/>
                                    <td>
                                        <h2>Payment Details</h2>
                                        <CardNumber onChange={this.editCard} value={cardNumber}/>
                                        <div className="row">
                                            <ExpireDate onChange={this.editExpireDate} value={expireDate}/>
                                            <CVV onChange={this.editCVV} value={cvv}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td/>
                                    <td>
                                        <h2>Account Credentials</h2>
                                        <Email onChange={this.editEmail} value={email}/>
                                        <Password onChange={this.editPwd} value={password}/>
                                        <ConfPassword onChange={this.editConfPwd} value={confPassword}/>
                                        <div className="text-danger">{this.state.errors.confPassword}</div>

                                    </td>
                                </tr>
                            </table>
                        </Edit>
                    ):
                        (
                        <Profile
                            onSubmit={this.handleSubmit}
                            src={imagePreviewUrl}
                            nom={nom}
                            prenom={prenom}
                            description={description}
                            adress={adress}
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
            <div className="top"/>
            <CardProfile/>
        </div>

    );
};

export default SignUpForm;
