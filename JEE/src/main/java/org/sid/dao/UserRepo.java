package org.sid.dao;

import java.util.List;

import org.sid.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User , Long> {
	List<User> findAllByIdG(Long idG);
	User findByEmail(String email);
	User findByCin(String cin);
	User findByIdU(Long idU);
	User findByToken(String token);
	List<User> findAllByIdGNotOrIdGNullOrderByIdUAsc(Long idG);
}

