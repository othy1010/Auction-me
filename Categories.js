import React from 'react';

export const Categories = () => {

    class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                categories: [
                    { name: 'Choose a category', id: 0 },
                    { name: 'something', id: 1 },
                    { name: 'slave', id: 2 },
                    { name: 'electronics', id: 3 },
                    { name: 'food', id: 4 },
                    { name: 'antics', id: 5 }
                ]
            };
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange = (e) => {
            let idx = e.target.selectedIndex;
            console.log("changed category to :"+e.target.value);
        }

        render() {
            let {categories} = this.state;
            let optionTemplate = categories.length > 0
                && categories.map((item, i) => {
                    return (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    )
                }, this);

            return (
                <div className="user_field">
                    <label htmlFor="category">
                        Category:
                    </label>
                    <select id="category" required onChange={this.handleChange}>
                        {optionTemplate}
                    </select>
                </div>

            );
        }
    }
    return (
        <Category/>
    );
};


export default Categories;