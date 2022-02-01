package org.sid.services;

import java.sql.Date;
import java.util.List;

import org.sid.entities.Payment;

public interface PaymentService {
   Payment savePayment(Payment payment);

   Payment findPaymentByBid(Long bidId);

   List<Payment> findAllByPaymentDate(Date paymentDate);

   List<Payment> findAllByUserId(Long userId);
}
