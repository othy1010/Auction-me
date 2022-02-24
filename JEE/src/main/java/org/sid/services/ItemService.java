package org.sid.services;

import java.util.List;


import org.sid.entities.Item;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


public interface ItemService {

   Item saveItem(Item item);

   List<Item> findAllByCategoryId(Long categoryId);
   List<Item> findAllByUserId( Long userId);


   Item findByItemId(Long itemId);
   List<Item> findAllByItemNameLike(String inItemName);


    List<Item> findAllByUserIdAndBidId(Long userId);

    Item updateItem(Long itemId, Item item);
   void deleteUser( Long itemId);
   
   
}
