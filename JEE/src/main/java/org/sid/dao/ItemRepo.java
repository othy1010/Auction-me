package org.sid.dao;

import java.sql.Date;
import java.util.List;

import org.sid.entities.Item;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepo extends JpaRepository<Item, Long>{
   Item findByItemId(Long itemId);

   List<Item> findAllByCategoryId(Long categoryId);
}
