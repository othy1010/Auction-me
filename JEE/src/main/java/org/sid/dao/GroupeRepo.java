package org.sid.dao;

import org.sid.entities.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupeRepo extends JpaRepository<Groupe, Long>{
	Groupe findByGroupeName(String groupeName);
	Groupe findByIdG(Long idG);
}
