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
import org.sid.services.UserService;
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

public class UserServiceImpl implements UserService {
   @Autowired
   private UserRepo userRepo;

   @Override
   public User saveUser(User user) {
      // TODO Auto-generated method stub
      return null;
   }

   @Override
   public User findByEmail(String email) {
      return userRepo.findByEmail(email);
   }

   @Override
   public User findByUserId(Long idU) {
      // TODO Auto-generated method stub
      return userRepo.findByEmail(email);;
   }

   @Override
   public List<User> findByFirstAndLastName(String firstName, String lastName) {
      // TODO Auto-generated method stub
      return userRepo.findByEmail(email);
   }

   @Override
   public User findByToken(String token) {
      // TODO Auto-generated method stub
      return userRepo.findByEmail(email);
   }

   @Override
   public User updateUser(Long idU, User user) {
      // TODO Auto-generated method stub
      return userRepo.findByEmail(email);
   }

   @Override
   public User findBybidID(long bidId) {
      // TODO Auto-generated method stub
      return null;
   }

   @Override
   public User findByItemId(long itemId) {
      // TODO Auto-generated method stub
      return null;
   }

   @Override
   public void deleteUser(Long idU) {
      // TODO Auto-generated method stub
      
   }

  
   @Override
   @PostMapping("users")
 
}