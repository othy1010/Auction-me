package org.sid.services;

import org.sid.entities.Category;

import java.util.List;


public interface CategoryService {

   Category saveCategory(Category category);

   List<Category> findByAllCategories();
   Category findByCategoryId(Long categoryId);
   Category updateCategory( Long categoryId,  Category category);
}
