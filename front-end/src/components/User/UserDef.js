import React from 'react';

    export const ImgUpload =({ onChange, src })=>
        <label htmlFor="photo-upload" className="user_custom-file-upload user_fas">
            <div className="user_img-wrap user_img-upload" >
                <img id="photo-upload" src={src} alt=""/>
            </div>
            <input id="photo-upload" type="file" onChange={onChange}/>
        </label>
    export const Nom =({ onChange, value })=>
        <div className="user_field">
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
export const Prenom =({ onChange, value })=>
        <div className="user_field">
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
export const Description =({ onChange, value })=>
        <div className="user_field">
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
export const Phone =({ onChange, value })=>
        <div className="user_field">
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
    export const Adress =({ onChange, value })=>
        <div className="user_field">
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
export const Postal =({ onChange, value })=>
        <div className="user_field">
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
export const City =({ onChange, value })=>
        <div className="user_field">
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
export const Country =({ onChange, value })=>
        <div className="user_field">
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
export const Email =({ onChange, value })=>
        <div className="user_field">
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
export const Password =({ onChange, value })=>
        <div className="user_field">
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
export const ConfPassword =({ onChange, value })=>
        <div className="user_field">
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
export const CardNumber =({ onChange, value })=>
        <div className="user_field">
            <label htmlFor="cardNum">
                Card Number:
            </label>
            <input
                id="cardNumber"
                type="number"
                onChange={onChange}
                minLength={8}
                maxLength={19}
                value={value}
                placeholder="xxxx xxxx xxxx xxxx"
                required/>
        </div>
export const ExpireDate =({ onChange, value })=>
        <div className="user_field">
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
export const CVV =({ onChange, value })=>
        <div className="user_field">
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {ImgUpload, Nom, Prenom, Description, Phone, Adress, Postal, City,
                Country, CardNumber, ExpireDate, CVV, Email, Password, ConfPassword};