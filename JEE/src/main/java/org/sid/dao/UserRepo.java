package org.sid.dao;

import java.util.List;

import org.sid.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
	List<User> findAll();

	User findByIdU(Long idU);

	User findByCountry(String country);

	User findByToken(String token);

	List<User> findAllByIsConfirmed(Boolean isConfirmed);

}
