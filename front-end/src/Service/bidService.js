import axios from "axios";

const BIDS_REST_API_URL = "http://localhost:8080/api/bids";


class BidService {

   getBids() {
      return axios.get(BIDS_REST_API_URL);
   }
   getbidsByUserId(userId) {
      return axios.get(BIDS_REST_API_URL + "/userId/" + userId);
   }
   getBidsByItemId(itemId) {
      return axios.get(BIDS_REST_API_URL + "/itemId/" + itemId);
   }
   createBid(bid) {
      return axios.post(BIDS_REST_API_URL, bid);
   }


}

export default new BidService();
