import React from 'react';
import axios from 'axios';

const SPRING_SERVER = 'http://localhost:8080/api'
const PAYMENT_API_URL = `${SPRING_SERVER}/payment`
const PAYMENT_BIDID_API_URL = `${SPRING_SERVER}/Payment/bidId`
const PAYMENT_USERID_API_URL = `${SPRING_SERVER}/Payment/userId`
const PAYMENT_DATE_API_URL = `${SPRING_SERVER}/Payment/paymentDate`

class PaymentService {
    getPayments() {
        return axios.get(PAYMENT_API_URL);
    }

    savePayment(payment) {
        return axios.post(PAYMENT_API_URL, payment);
    }

    findPaymentByBid(bidId) {
        return axios.get(PAYMENT_BIDID_API_URL + '/' + bidId);
    }

    findAllByPaymentDate(paymentDate) {
        return axios.get(PAYMENT_DATE_API_URL + '/' + paymentDate);
    }

    findAllByUserId(userId) {
        return axios.get(PAYMENT_USERID_API_URL + '/' + userId);
    }
}
export default new PaymentService();
