package org.sid.services;

import java.util.List;


import org.sid.entities.Item;



public interface ItemService {

   Item saveItem(Item item);

   List<Item> findAllByCategoryId(Long categoryId);
   List<Item> findAllByUserId( Long userId);


   Item findByItemId(Long itemId);
   List<Item> findAllByItemNameLike(String inItemName);
   
   Item updateItem( Long itemId,  Item item);
   void deleteUser( Long itemId);
   
   
}
