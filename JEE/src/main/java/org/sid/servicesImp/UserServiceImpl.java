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
      user.setToken(new Token().nextString());

      return userRepo.save(user);
   }

   @Override
   public User findByEmail(String email) {
      return userRepo.findByEmail(email);
   }

   @Override
   public User findByUserId(Long userId) {
      return userRepo.findByUserId(userId);
   }

   @Override
   public List<User> findByUsername(String username) {
      return userRepo.findByUsername(username);

   }

   @Override
   public User findByToken(String token) {
      return userRepo.findByToken(token);
   }

   @Override
   @PutMapping("users/userId/{userId}")
   public User updateUser(@PathVariable Long userId, @RequestBody User user) {
      User userUpdated = userRepo.findByUserId(userId);

      userUpdated.setUsername(user.getUsername());
      userUpdated.setFirstName(user.getFirstName());
      userUpdated.setSecondName(user.getSecondName());
      userUpdated.setSexe(user.getSexe());
      userUpdated.setEmail(user.getEmail());
      userUpdated.setPassword(user.getPassword());
      userUpdated.setCountry(user.getCountry());
      userUpdated.setCity(user.getCity());
      userUpdated.setAddress(user.getAddress());
      userUpdated.setPhone(user.getPhone());
      userUpdated.setPaymentAccount(user.getPaymentAccount());
      userRepo.save(userUpdated);
      return userUpdated;
   }

   // @Override
   // public User findBybidID(long bidId) {
   // }

   // @Override
   // public User findByItemId(long itemId) {

   // }

   @Override
   @DeleteMapping("users/userId/{userId}")
   public void deleteUser(@PathVariable Long userId) {
      userRepo.deleteById(userId);
   }

}