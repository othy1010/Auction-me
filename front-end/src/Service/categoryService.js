import axios from "axios";

const CATEGORIES_REST_API_URL = "http://localhost:8080/api/categorys";


class CategoryService {
   getCategories() {
      return axios.get(CATEGORIES_REST_API_URL);
   }
}

export default new CategoryService();
