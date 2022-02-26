import React from 'react';
import axios from 'axios';
const SPRING_SERVER = 'http://localhost:8080/api' ;
const CATEGORY_API_URL = `${SPRING_SERVER}/categories`;
const CATEGORY_ID_URL = `${CATEGORY_API_URL}/categoryId`  ;

class CategoryService{
    saveCategory(category){
        return axios.post(CATEGORY_API_URL, category);
    }
    findByAllCategories(){
        return axios.get(CATEGORY_API_URL);
    }
    findByCategoryId(categoryId){
        return axios.get(CATEGORY_ID_URL+'/'+ categoryId);
    }
    updateCategory(  categoryId,   category){
        return axios.put(CATEGORY_ID_URL+'/'+ categoryId, category);
    }
}
export default new CategoryService();


