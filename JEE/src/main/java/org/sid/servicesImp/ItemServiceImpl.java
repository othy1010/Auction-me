package org.sid.servicesImp;


import java.util.*;

import org.sid.dao.ItemRepo;
import org.sid.entities.Item;
import org.sid.entities.User;
import org.sid.services.ItemService;
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

@CrossOrigin(origins = "http://localhost:3000/")
@Service
@Transactional
@RestController
@RequestMapping("api/")
public class ItemServiceImpl implements ItemService {
   @Autowired
   private ItemRepo itemRepo;

   @Override
   @PostMapping("items")
   public Item saveItem(@RequestBody Item item) {
      return itemRepo.save(item);
   }
   
   @GetMapping("items")
	public List<Item> getItems(){
		return this.itemRepo.findAll();
	}
   
   @Override
   @GetMapping("items/userId/{userId}")
   public List<Item> findAllByUserId(@PathVariable Long userId) {
      return itemRepo.findAllByUserId(userId);
   }


   @Override
   @GetMapping("items/categoryId/{categoryId}")
   public List<Item> findAllByCategoryId(@PathVariable Long categoryId) {
      return itemRepo.findAllByCategoryId(categoryId);
   }

   @Override
   @GetMapping("items/itemId/{itemId}")
   public Item findByItemId(@PathVariable Long itemId) {
      return itemRepo.findByItemId(itemId);
   }

	@Override
	@GetMapping("items/inItemName/{inItemName}")
	public List<Item> findAllByItemNameLike(@PathVariable String inItemName) {
		List<Item> items = itemRepo.findAllByItemNameLike(inItemName);
		return items;
	}
	
	 @Override
	   @PutMapping("items/itemId/{itemId}")
	   public Item updateItem(@PathVariable Long itemId, @RequestBody Item item) {
	      Item itemUpdated = itemRepo.findByItemId(itemId);

	      itemUpdated.setItemName(item.getItemName());
	      itemUpdated.setInitialPrice(item.getInitialPrice());
	      itemUpdated.setCategoryId(item.getCategoryId());
	      itemUpdated.setIsApprooved(item.getIsApprooved());
	      itemUpdated.setTitle(item.getTitle());
	      itemUpdated.setText(item.getText());

	      itemRepo.save(itemUpdated);
	      return itemUpdated;
	   }
	 
	 @Override
	   @DeleteMapping("items/itemId/{itemId}")
	   public void deleteUser(@PathVariable Long itemId) {
	      itemRepo.deleteById(itemId);
	   }


}
