package org.sid.dao;

import java.util.List;

import org.sid.entities.Planning;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanningRepo extends JpaRepository<Planning, Long>{
	List <Planning> findAllByIdG(Long idG);
	Planning findByIdP(Long idP);
	void deleteByIdP(Long idP);
}
