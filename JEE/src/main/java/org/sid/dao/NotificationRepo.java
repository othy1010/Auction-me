package org.sid.dao;

import java.util.List;

import org.sid.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepo extends JpaRepository<Notification, Long> {
	List<Notification> findAllByIdUOrderByIdNDesc(Long idU);
}
