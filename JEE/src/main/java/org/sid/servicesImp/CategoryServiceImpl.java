package org.sid.servicesImp;

import org.sid.dao.CategoryRepo;
import org.sid.entities.Category;
import org.sid.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

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
public class CategoryServiceImpl implements CategoryService  {
   @Autowired
   private CategoryRepo categoryRepo;


   @Override
   @PostMapping("category")
   public Category saveCategory(@RequestBody Category category) {
      return categoryRepo.save(category);
   }

   @Override
   public Category findCategoryByBid(Long bidId) {
      // TODO Auto-generated method stub
      return null;
   }



}
