package org.sid.servicesImp;

import java.util.List;

import javax.crypto.spec.SecretKeySpec;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.*;

import org.sid.dao.PaymentRepo;
import org.sid.dao.Token;
import org.sid.dao.UserRepo;
import org.sid.entities.Bid;
import org.sid.entities.Payment;
import org.sid.entities.User;
import org.sid.services.BidService;
import org.sid.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.util.SendEmail;

@CrossOrigin(origins = "http://localhost:3000/")
@Service
@Transactional
@RestController
@RequestMapping("api/")
public class PaymentServiceImpl implements PaymentService {
   @Autowired
   private PaymentRepo paymentRepo;

   
   @GetMapping("payment")
   public List<Payment> getPayments() {
      return this.paymentRepo.findAll();
   }

   @Override
   @PostMapping("payment")
   public Payment savePayment(@RequestBody Payment payment) {
      return paymentRepo.save(payment);

   }

   @Override
   @GetMapping("Payment/bidId/{bidId}")
   public Payment findPaymentByBid(@PathVariable Long bidId) {
      return paymentRepo.findTopByBidId(bidId);
   }

   @Override
   @GetMapping("Payment/paymentDate/{paymentDate}")
   public List<Payment> findAllByPaymentDate(@PathVariable Date paymentDate) {
      return paymentRepo.findAllByPaymentDate(paymentDate);
   }

   @Override
   @GetMapping("Payment/userId/{userId}")
   public List<Payment> findAllByUserId(Long userId) {
      return paymentRepo.findAllByUserIdOrderByPaymentDate(userId);

   }

}
