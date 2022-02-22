package org.sid.servicesImp;

import java.util.List;

import org.sid.dao.Token;
import org.sid.dao.UserRepo;
import org.sid.entities.User;
import org.sid.services.UserService;
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
import org.util.SendEmail;

@CrossOrigin(origins = "http://localhost:3000/")
@Service
@Transactional
@RestController
@RequestMapping("api/")

public class UserServiceImpl implements UserService {
   @Autowired
   private UserRepo userRepo;

   @Override
   @PostMapping("users")
   public User saveUser(@PathVariable User user) {
      user.setToken(new Token().nextString());
		User userN = userRepo.save(user);
		String sub = "Creation du compte";
		String html="<h1>Creation de votre compte</h1><p>Vous trouvez ci-joint les informations"
				+ " necessaires pour vous connectez</p><ul><li>email : "+user.getEmail()+"</li><li>mot de passe : "
				+user.getPassword()+"</li></ul>";
		//SendEmail.sendMail(user.getEmail(),sub,html);
		return  userN;
   }
   
   @GetMapping("users")
	public List<User> getUsers(){
		return this.userRepo.findAll();
	}

   @Override
   @GetMapping("users/email/{email}")
   public User findByEmail(@PathVariable String email) {
      return userRepo.findByEmail(email);
   }

   @Override
   @GetMapping("users/userId/{userId}")
   public User findByUserId(@PathVariable Long userId) {
      return userRepo.findByUserId(userId);
   }

   @Override
   @GetMapping("users/username/{username}")
   public List<User> findByUsername(@PathVariable String username) {
      return userRepo.findByUsername(username);

   }

   @Override
   @GetMapping("users/token/{token}")
   public User findByToken(@PathVariable String token) {
      return userRepo.findByToken(token);
   }

   @Override
   @PutMapping("users/userId/{userId}")
   public User updateUser(@PathVariable Long userId, @RequestBody User user) {
      User userUpdated = userRepo.findByUserId(userId);

      userUpdated.setUsername(user.getUsername());
      userUpdated.setFirstName(user.getFirstName());
      userUpdated.setSecondName(user.getSecondName());
      userUpdated.setSexe(user.getSexe());
      userUpdated.setEmail(user.getEmail());
      userUpdated.setPassword(user.getPassword());
      userUpdated.setCountry(user.getCountry());
      userUpdated.setCity(user.getCity());
      userUpdated.setAddress(user.getAddress());
      userUpdated.setPhone(user.getPhone());
      userUpdated.setPaymentAccount(user.getPaymentAccount());
      userRepo.save(userUpdated);
      return userUpdated;
   }

   // @Override
   // public User findBybidID(long bidId) {
   // }

   // @Override
   // public User findByItemId(long itemId) {

   // }

   @Override
   @DeleteMapping("users/userId/{userId}")
   public void deleteUser(@PathVariable Long userId) {
      userRepo.deleteById(userId);
   }

}