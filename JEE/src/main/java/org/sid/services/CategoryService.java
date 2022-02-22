package org.sid.services;

import org.sid.entities.Category;


public interface CategoryService {

   Category saveCategory(Category category);

   Category findByCategoryId(Long categoryId);
   Category updateCategory( Long categoryId,  Category category);
}
