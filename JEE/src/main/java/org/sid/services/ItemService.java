package org.sid.services;

import java.util.List;

import org.sid.entities.Item;

public interface ItemService {

   Item saveItem(Item item);

   List<Item> findAllByCategoryId(Long categoryId);

   Item findByItemId(Long itemId);
}
