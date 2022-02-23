import axios from "axios";

const ITEMS_REST_API_URL = "http://localhost:8080/api/items";


class ItemService {
   
   getItems() {
      return axios.get(ITEMS_REST_API_URL);
   }
   getItemsByUserId(userId) {
      return axios.get(ITEMS_REST_API_URL + "/userId/" + userId);
   }
   getItemsByCategoryId(categoryId) {
      return axios.get(ITEMS_REST_API_URL + "/categoryId/" + categoryId);
   }
   createItem(item) {
      return axios.post(ITEMS_REST_API_URL, item);
   }

   getItemByItemId(itemId) {
      return axios.get(ITEMS_REST_API_URL + "/itemId/" + itemId);
   }
}

export default new ItemService();
