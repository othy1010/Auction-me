package org.sid.servicesImp;

import org.sid.dao.CategoryRepo;
import org.sid.entities.Category;
import org.sid.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@Service
@Transactional
@RestController
@RequestMapping("api/")
public class CategoryServiceImpl implements CategoryService {
   @Autowired
   private CategoryRepo categoryRepo;

   @Override
   @PostMapping("category")
   public Category saveCategory(@RequestBody Category category) {
      return categoryRepo.save(category);
   }

   @Override
   @PostMapping("category/categoryId/{categoryId}")
   public Category findCategoryByCategoryId(@PathVariable Long categoryId) {
      return categoryRepo.findByCategoryId(categoryId);
   }

}
