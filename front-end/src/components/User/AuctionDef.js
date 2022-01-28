import React from "react";

export const ImgUpload =({ onChange, src })=>
    <label htmlFor="photo-upload" className="user_custom-file-upload user_fas">
        <div className="user_img-wrap user_img-upload" >
            <img id="photo-upload" src={src} alt=""/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange}/>
    </label>

export const Title =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="title">
            Title:
        </label>
        <input
            id="title"
            type="text"
            onChange={onChange}
            maxLength={25}
            value={value}
            placeholder="Amazing Product"
            required/>
    </div>
export const Name =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="name">
            Product's Name:
        </label>
        <input
            id="name"
            type="text"
            onChange={onChange}
            maxLength={25}
            value={value}
            placeholder="Product x"
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

export const Price =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="price">
            Starting price:
        </label>
        <input
            id="marque"
            type="number"
            onChange={onChange}
            value={value}
        />
    </div>
export const Currency =()=> {
    class _Currency extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                currencies: [
                    {name: 'Choose a currency', id: 0},
                    {name: 'Dollar', id: 1},
                    {name: 'Euro', id: 2},
                    {name: 'Yen', id: 3},
                    {name: 'MAD', id: 4},
                ]
            };
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange = (e) => {
            let idx = e.target.selectedIndex;
            console.log("changed currency to :"+e.target.value);
        }

        render() {
            let {currencies} = this.state;
            let currencyList = currencies.length > 0
                && currencies.map((item, i) => {
                    return (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    )
                }, this);

            return (
                <div className="user_field">
                    <label htmlFor="category">
                        Currency:
                    </label>
                    <select id="category" required onChange={this.handleChange}>
                        {currencyList}
                    </select>
                </div>

            );
        }
    }

    return (
        <_Currency/>
    )
};


export const Brand =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="marque">
            Brand:
        </label>
        <input
            id="marque"
            type="text"
            onChange={onChange}
            value={value}
            placeholder="Samsung"
        />
    </div>
export const Stat =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="state">
            State of product:
        </label>
        <input
            id="marque"
            type="text"
            onChange={onChange}
            value={value}
            required
            placeholder="new, antique, choose from list"
        />
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
            required
        />
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
            required
        />
    </div>

export const PeriodStart =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="period_from">
           Auction from:
        </label>
        <input
            id="period_from"
            type="Date"
            onChange={onChange}
            value={value}
            required
            placeholder="Start date"
        />
    </div>
export const PeriodEnd =({ onChange, value })=>
    <div className="user_field">
        <label htmlFor="period_to">
            Auction to:
        </label>
        <input
            id="period_to"
            type="Date"
            onChange={onChange}
            value={value}
            required
            placeholder="End date"
        />
    </div>

export const OwnerProfil =({ nom, prenom, email, phone, description, country })=>
    <div className="user_field">
        <table className="user_owner">
            <tr>
                <td>
                    <tr>
                        <td><b>Full Name:</b></td> <td>{nom} {prenom}</td>
                    </tr>
                    <tr>
                        <td><b>Phone:</b> </td> <td>{phone}</td>
                    </tr>
                </td>
                <td>
                    <tr>
                        <td><b>Email:</b></td> <td>{email}</td>
                    </tr>
                   <tr>
                       <td><b>Country:</b></td> <td>{country}</td>
                   </tr>
                </td>
            </tr>
            <tr>
                <td colSpan={2}><b>About me:</b> "{description}"</td>
            </tr>
        </table>
    </div>
