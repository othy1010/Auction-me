package org.sid.dao;

import java.sql.Date;
import java.util.List;

import org.sid.entities.Payment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment, Long> {
   List<Payment> findAllByUserIdOrderByPaymentDate(Long userId);

   List<Payment> findAllByPaymentDate(Date paymentDate);

   Payment findTopByBidId(Long bidId);

   Payment findTopByPaymentId(Long paymentId);

   List<Payment> findAllByUserId(Long userId);
}
