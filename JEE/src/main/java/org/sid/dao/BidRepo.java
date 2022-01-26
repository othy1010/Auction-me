package org.sid.dao;

import java.util.List;

import org.sid.entities.Bid;
import org.sid.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BidRepo extends JpaRepository<Bid , Long> {
	Bid findTopByItemIdOrderByPrice(Long itemId);
	List<Bid> findAllByUserId(Long userId);
}

