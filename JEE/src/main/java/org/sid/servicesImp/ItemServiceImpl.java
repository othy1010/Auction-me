package org.sid.servicesImp;

import javax.crypto.spec.SecretKeySpec;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.*;

import org.sid.dao.ItemRepo;
import org.sid.dao.PaymentRepo;
import org.sid.dao.Token;
import org.sid.dao.UserRepo;
import org.sid.entities.Bid;
import org.sid.entities.Item;
import org.sid.entities.Payment;
import org.sid.entities.User;
import org.sid.services.BidService;
import org.sid.services.ItemService;
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
public class ItemServiceImpl implements ItemService {
   @Autowired
   private ItemRepo itemRepo;


   @GetMapping("item/itemId/{itemId}")
   public Item findById(@PathVariable Long itemId) {
      return itemRepo.findByItemId(itemId);
   }
   
   @Override
   @GetMapping("item/categoryId/{categoryId}")
   public List<Item> findAllByCategoryId(@PathVariable Long categoryId) {
      return itemRepo.findAllByCategoryId(categoryId);
   }

   @Override
   @PostMapping("item")
   public Item saveItem(@RequestBody Item item) {
      return itemRepo.save(item);
   }


   public List<Item> findAllByCategoryId(long categoryId) {
      // TODO Auto-generated method stub
      return null;
   }

   @Override
   public Item findByItemId(long itemId) {
      // TODO Auto-generated method stub
      return null;
   }

}
