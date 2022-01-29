package org.sid.services;

import java.util.List;

import org.sid.entities.User;

public interface UserService {

   User saveUser(User user);

   User findByEmail(String email);

   User findByUserId(Long idU);

   List<User> findByFirstAndLastName(String firstName, String lastName);

   User findByToken(String token);

   User updateUser(Long idU, User user);

   User findBybidID(long bidId);

   User findByItemId(long itemId);

   void deleteUser(Long idU);

}
