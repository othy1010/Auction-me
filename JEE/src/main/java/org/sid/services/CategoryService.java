package org.sid.services;

import org.sid.entities.Category;

public interface CategoryService {

   Category saveCategory(Category category);

   Category findCategoryByCategoryId(Long categoryId);

}
