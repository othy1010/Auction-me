package org.sid.dao;

import java.sql.Date;
import java.util.List;

import org.sid.entities.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

public interface ItemRepo extends JpaRepository<Item, Long>{
   Item findByItemId(Long itemId);
   List<Item> findAllByItemNameLike(String inItemName);
   List<Item> findAllByUserId(Long userId);
   List<Item> findAllByCategoryId(Long categoryId);
}
