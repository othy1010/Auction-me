package org.sid.services;

import java.util.List;

import org.sid.entities.Groupe;
import org.sid.entities.Notification;
import org.sid.entities.Planning;
/*import org.sid.entities.Group;*/
import org.sid.entities.User;


public interface UserService {
	/*user*/
	User saveUser(User user);
	User findByEmail(String email);
	List<User> findAllByIdG(Long idG);
	User findByCin(String cin);
	User findByIdU(Long idU);
	User findByToken(String token);
	User updateUser(Long idU,User user);
	void deleteUser(Long idU);
	List<User> findAllByIdGNotOrIdGNullOrderByidU(Long idG);
	
	/*groupe*/
	Groupe saveGroupe(Groupe groupe);
	Groupe findByGroupeName(String groupeName);
	void addUserToGroupe(Long idG, User user);
	void deleteGroupe(Long idG);
	Groupe findByIdG(Long idG);
	Groupe updateGroupe(Long idG,Groupe groupe);
	List<User> removeUserFromGroupe(Long idG, User user);
	
	/*planning*/
	Planning savePlanning(Planning planning);
	List <Planning> findPlanningByIdG(Long idG);
	//public void addPlanningToGroupe( Long idG, Planning planning);
	public Planning updatePlanning( Long idP, Planning planning);
	public void deletePlanning( Long idP);
	
	/*email*/
	public void sendEmailToResetPassword(User user);
	
	/*notifications*/
	List<Notification> findAllByIdU(Long idU);
	public void deleteNotification(Long idN);
}
