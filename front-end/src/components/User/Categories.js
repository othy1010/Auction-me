import React from 'react';
import CategoryService from "../../Services/CategoryService";

export const Categories = () => {

    class Category extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                categories: [ ]
            };
            this.handleChange = this.handleChange.bind(this);
            this.initCategories = this.initCategories.binf(this);
        }
        handleChange = (e) => {
            let idx = e.target.selectedIndex;
            //console.log("changed category to :"+e.target.value);
        }
        initCategories=(e) => {
            let categories = CategoryService.findAllCategories();
            for(var i=0; i<categories.size; i++){
                let cat = {name: categories[i].categoryName, id: categories[i].categoryId};
                this.state.categories.push(cat);
            }
        }

        render() {
            let { categories } = this.state;
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
        <Category />
    );
};


export default Categories;
