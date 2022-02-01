package org.sid.dao;

import java.sql.Date;
import java.util.List;

import org.sid.entities.Category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo {
   Category findByCategoryId(Long categoryId);
}
