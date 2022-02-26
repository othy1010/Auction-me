package org.sid.servicesImp;

import java.util.List;

import org.sid.dao.CategoryRepo;
import org.sid.entities.Category;
import org.sid.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
   @PostMapping("categories")
   public Category saveCategory(@RequestBody Category category) {
      return categoryRepo.save(category);
   }
   

	@GetMapping("categories")
	public List<Category> findByAllCategories() {
		// TODO Auto-generated method stub
		return categoryRepo.findAll();
	}

	@Override
	@GetMapping("categories/categoryId/{categoryId}")
	public Category findByCategoryId(@PathVariable Long categoryId) {
		// TODO Auto-generated method stub
		return categoryRepo.findByCategoryId(categoryId);
	}
	
	
	 	@Override
	   @PutMapping("categories/categoryId/{categoryId}")
	   public Category updateCategory(@PathVariable Long categoryId, @RequestBody Category category) {
	      Category categoryUpdated = categoryRepo.findByCategoryId(categoryId);

	      categoryUpdated.setCategoryName(category.getCategoryName());
	      categoryUpdated.setSuperCategoryId(category.getSuperCategoryId());

	      categoryRepo.save(categoryUpdated);
	      return categoryUpdated;
	   }
	 
	 
	   @DeleteMapping("categories/categoryId/{categoryId}")
	   public void deleteCategory(@PathVariable Long categoryId) {
	      categoryRepo.deleteById(categoryId);
	   }

	
	

}
