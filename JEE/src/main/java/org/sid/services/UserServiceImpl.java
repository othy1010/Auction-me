package org.sid.services;

import java.util.List;

import javax.crypto.spec.SecretKeySpec;

import java.text.SimpleDateFormat;
import java.util.*;


import org.sid.dao.GroupeRepo;
import org.sid.dao.NotificationRepo;
import org.sid.dao.PlanningRepo;
import org.sid.dao.Token;
import org.sid.dao.UserRepo;
import org.sid.entities.Groupe;
import org.sid.entities.Notification;
import org.sid.entities.Planning;
import org.sid.entities.User;
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

@CrossOrigin(origins ="http://localhost:3000/")
@Service
@Transactional
@RestController
@RequestMapping("api/")
public class UserServiceImpl implements UserService {
	@Autowired
	private GroupeRepo groupeRepo ;
	
	@Autowired
	private UserRepo userRepo ;
	
	@Autowired
	private PlanningRepo planningRepo;
	
	@Autowired
	private NotificationRepo notificationRepo;
	
	@Override
	@PostMapping("users")
	public User saveUser(@RequestBody User user) {
		user.setToken(new Token().nextString());
		String title="Email";
		String text ="Accedez à votre boite email afin de consulter vos informations de connexion";
		User userN = userRepo.save(user);
		notificationRepo.save(new Notification(null,title,text,userN.getIdU()));
		String sub = "Creation du compte";
		String html="<h1>Creation de votre compte</h1><p>Vous trouvez ci-joint les informations"
				+ " necessaires pour vous connectez</p><ul><li>email : "+user.getEmail()+"</li><li>mot de passe : "
				+user.getPassword()+"</li></ul>";
		/*SendEmail.sendMail(user.getEmail(),sub,html);*/
		return  userN;
	}

	@Override
	@PostMapping("groupes")
	public Groupe saveGroupe(@RequestBody Groupe groupe) {
		return groupeRepo.save(groupe);
	}

	@Override
	@PostMapping("groupes/addUser/{idG}")
	public void addUserToGroupe(@PathVariable Long idG,@RequestBody User user) {
		Groupe groupe = groupeRepo.findByIdG(idG);
		User userR = userRepo.findByIdU(user.getIdU());
		Long userIdG = userR.getIdG();
		groupe.getUsers().add(userR);
		groupe.setNumberOfU(groupe.getUsers().size());
		groupeRepo.save(groupe);
		if(userIdG!=null) {
			Groupe groupe2 = groupeRepo.findByIdG(userR.getIdG());
			groupe2.setNumberOfU(groupe2.getUsers().size());
			groupeRepo.save(groupe2);
		}
		String title ="Groupe";
		String text ="Vous etes ajouté au groupe "+groupe.getGroupeName();
		notificationRepo.save(new Notification(null,title,text,user.getIdU()));
		/*String sub = "Ajout au groupe "+groupe.getGroupeName();
		String html="<h1 class='text-center'>Ajout au groupe</h1><p>Vous avez été ajouté au groupe "+groupe.getGroupeName()
				+ " clickez sur le lien afin de consulter votre planning du teletravail</p></br><p>http://localhost:3000/monPlanning</p>";
		SendEmail.sendMail(userR.getEmail(),sub,html);*/
	}
	

	@Override
	@GetMapping("groupes/groupeName/{groupeName}")
	public Groupe findByGroupeName(@PathVariable String groupeName) {
		return groupeRepo.findByGroupeName(groupeName);
	}
	
	@GetMapping("users")
	public List<User> getUsers(){
		return this.userRepo.findAll();
	}
	
	@GetMapping("groupes")
	public List<Groupe> getGroupes(){
		return this.groupeRepo.findAll();
	}
	
	@GetMapping("plannings")
	public List<Planning> getPlannings(){
		return this.planningRepo.findAll();
	}

	@Override
	@GetMapping("users/email/{email}")
	public User findByEmail(@PathVariable String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	@GetMapping("users/idG/{idG}")
	public List<User> findAllByIdG(@PathVariable Long idG) {
		return userRepo.findAllByIdG(idG);
	}
	
	@Override
	@GetMapping("users/!idG/{idG}")
	public List<User> findAllByIdGNotOrIdGNullOrderByidU(@PathVariable Long idG) {
		return userRepo.findAllByIdGNotOrIdGNullOrderByIdUAsc(idG);
	}

	@Override
	@GetMapping("users/cin/{cin}")
	public User findByCin(@PathVariable String cin) {
		return userRepo.findByCin(cin);
	}

	@Override
	@GetMapping("users/idU/{idU}")
	public User findByIdU(@PathVariable Long idU) {
		return userRepo.findByIdU(idU);
	}
	@Override
	@GetMapping("users/{token}")
	public User findByToken(@PathVariable String token) {
		System.out.print(token);
		return userRepo.findByToken(token);
	}
	

	@Override
	@PutMapping("users/idU/{idU}")
	public User updateUser(@PathVariable Long idU,@RequestBody User user) {
		User userU = userRepo.findByIdU(idU);
		userU.setAddress(user.getAddress());
		userU.setBirthday(user.getBirthday());
		userU.setBirthplace(user.getBirthplace());
		userU.setCin(user.getCin());
		userU.setCity(user.getCity());
		userU.setCountry(user.getCountry());
		userU.setEmail(user.getEmail());
		userU.setFirstName(user.getFirstName());
		userU.setSecondName(user.getSecondName());
		userU.setPassword(user.getPassword());
		userU.setPhone(user.getPhone());
		userU.setProfil(user.getProfil());
		userU.setSexe(user.getSexe());
		userRepo.save(userU);
		String title="Compte";
		String text ="Vos informations sont changés";
		notificationRepo.save(new Notification(null,title,text,idU));
		/*String sub = "Modification du compte";
		String html="<h1 class='text-center'>Modification des informations</h1><p>Vous trouvez ci-joint les informations"
				+ " necessaires pour vous connectez</p><ul><li>email :"+user.getEmail()+"</li><li>mot de passe : "
				+user.getPassword()+"</li></ul><p>Clickez sur le lien pour consultez vos informations personnellles :</p><p> http://localhost:3000/profil";
		SendEmail.sendMail(userU.getEmail(),sub,html);*/
		return userU;
	}

	@Override
	@DeleteMapping("users/idU/{idU}")
	public void deleteUser(@PathVariable Long idU) {
		Long idG = userRepo.findByIdU(idU).getIdG();
		Groupe groupe = groupeRepo.findByIdG(idG);
		String sub = "Suppression du compte";
		String html="<h1 class='text-center'>Suppression de votre compte</h1><p>Votre compte a été supprimé";
		SendEmail.sendMail(userRepo.findByIdU(idU).getEmail(),sub,html);
		System.out.println(idG);
		if(idG != null) {
			System.out.println(idG);
			groupe.getUsers().remove(userRepo.findByIdU(idU));
			groupe.setNumberOfU(groupe.getUsers().size());
			groupeRepo.save(groupe);
		}
		userRepo.deleteById(idU);
	}
	
	@Override
	@DeleteMapping("groupes/idG/{idG}")
	public void deleteGroupe(@PathVariable Long idG) {
		List <User> users= userRepo.findAllByIdG(idG);  
		for (User user : users) {
			user.setIdG(null);
			userRepo.save(user);
		}
		users= userRepo.findAllByIdG(idG); 
		Groupe groupe = groupeRepo.findByIdG(idG);
		groupe.setUsers(users);
		groupeRepo.save(groupe);
		groupeRepo.deleteById(idG);
	}

	@Override
	@GetMapping("groupes/idG/{idG}")
	public Groupe findByIdG(@PathVariable Long idG) {
		return groupeRepo.findByIdG(idG);
	}

	@Override
	@PutMapping("groupes/idG/{idG}")
	public Groupe updateGroupe(@PathVariable Long idG,@RequestBody Groupe groupe) {
		Groupe groupeU = groupeRepo.findByIdG(idG);
		groupeU.setGroupeName(groupe.getGroupeName());
		groupeRepo.save(groupeU);
		return groupeU;
	}

	@Override
	@PostMapping("groupes/removeUser/{idG}")
	public List<User> removeUserFromGroupe(@PathVariable Long idG,@RequestBody User user) {
		Groupe groupe = groupeRepo.findByIdG(idG);
		User userR = userRepo.findByIdU(user.getIdU());
		groupe.getUsers().remove(userR);
		groupe.setNumberOfU(groupe.getUsers().size());
		groupeRepo.save(groupe);
		String title ="Groupe";
		String text ="Vous avez été retiré de votre groupe"+groupe.getGroupeName();
		notificationRepo.save(new Notification(null,title,text,user.getIdU()));
		/*String sub = "Retire du groupe"+groupe.getGroupeName();
		String html="<h1 class='text-center'>Retire du groupe</h1><p>Vous avez été retiré de votre groupe"
				+ "contactez votre responsable afin de vous ajouter à un autre groupe</p>";
		SendEmail.sendMail(userR.getEmail(),sub,html);*/
		return groupe.getUsers();
	}

	@Override
	@GetMapping("plannings/{idG}")
	public List<Planning> findPlanningByIdG(@PathVariable Long idG) {
		return planningRepo.findAllByIdG(idG);
	}
	
	/******not used********/
	/*@Override
	@PostMapping("groupes/addPlanning/{idG}")
	public void addPlanningToGroupe(@PathVariable Long idG,@RequestBody Planning planning) {
		Groupe groupe = groupeRepo.findByIdG(idG);
		Planning planningR = planningRepo.findByIdP(planning.getIdP());
		groupe.getPlannings().add(planningR);
		List <User> users = groupe.getUsers();
		System.out.println(users);
		for (int i=0 ; i< users.size() ; i++) {
			System.out.println(users.get(i));
			String title ="Planning";
			String text ="<p>Un nouveau planning vous a été affécté</p>"
					+ "<ul><li>Date début : "+planning.getStartDate()+"</li><li>Date fin : "+planning.getEndDate()
					+"</li></ul>";
			notificationRepo.save(new Notification(null,title,text,users.get(i).getIdU()));
			/*String sub = "Nouveau planning";
			String html="<h1 class='text-center'>Nouveau planning</h1><p>Un nouveau planning vous a été affécté</p>"
					+ "<ul><li>Date début : "+planning.getStartDate()+"</li><li>Date fin : "+planning.getEndDate()
					+"</li></ul><p>consultez le sur</p><p> http://localhost:3000/monPlanning</p>";
			SendEmail.sendMail(users.get(i).getEmail(),sub,html);
		}
		groupeRepo.save(groupe);
	}*/

	@Override
	@PostMapping("plannings")
	public Planning savePlanning(@RequestBody Planning planning) {
		Groupe groupe = groupeRepo.findByIdG(planning.getIdG());
		List <User> users = groupe.getUsers();
		Planning planningS = planningRepo.save(planning);
		for (int i=0 ; i< users.size() ; i++) {
			String title ="Planning";
			String text ="<p>Un nouveau planning vous a été affécté</p>"
					+ "<ul><li>Date début : "+new SimpleDateFormat("yyyy-MM-dd").format(planningS.getStartDate())+"</li><li>Date fin : "
					+new SimpleDateFormat("yyyy-MM-dd").format(planningS.getEndDate())
					+"</li></ul>";
			notificationRepo.save(new Notification(null,title,text,users.get(i).getIdU()));
		}
		return planningS;
	}
	
	@Override
	@PutMapping("plannings/{idP}")
	public Planning updatePlanning(@PathVariable Long idP,@RequestBody Planning planning) {
		Planning planningU = planningRepo.findByIdP(idP);
		Date previousStartDate = planningU.getStartDate();
		Date previousEndDate= planningU.getEndDate();
		planningU.setStartDate(planning.getStartDate());
		planningU.setEndDate(planning.getEndDate());
		planningRepo.save(planningU);
		List <User> users = groupeRepo.findByIdG(planningU.getIdG()).getUsers();
		for (int i=0 ; i< users.size() ; i++) {
			String title ="Planning";
			String text ="<p>votre planning a été changé</p>"
					+ "<ul><li>Date début (avant) : "+previousStartDate+"</li><li>Date debut (apres) : "
					+new SimpleDateFormat("yyyy-MM-dd").format(planningU.getStartDate())+"</li><li>Date fin (avant) : "
					+previousEndDate+"</li><li>Date fin (apres) : "+new SimpleDateFormat("yyyy-MM-dd").format(planningU.getEndDate())+"</li></ul>";
			notificationRepo.save(new Notification(null,title,text,users.get(i).getIdU()));
			/*String sub = "Changement de planning";
			String html="<h1 class='text-center'>Changement de planning</h1>"
					+ "<p>votre planning a été changé</p>"
					+ "<ul><li>Date début (avant) : "+previousStartDate+"</li><li>Date debut (apres) : "
					+planningU.getStartDate()+"</li><li>Date fin (avant) : "
					+previousEndDate+"</li><li>Date fin (apres) : "+planningU.getEndDate()+"</li></ul>"
							+ "<p>consultez le sur</p><p> http://localhost:3000/monPlanning</p>";
			SendEmail.sendMail(users.get(i).getEmail(),sub,html);*/
		}
		return planningU;
	}
	
	@Override
	@DeleteMapping("plannings/{idP}")
	public void deletePlanning(@PathVariable Long idP) {
		Planning planning = planningRepo.findByIdP(idP) ;
		Groupe groupe = groupeRepo.findByIdG(planning.getIdG());
		List <User> users = groupe.getUsers();
		System.out.println(users);
		for (int i=0 ; i< users.size() ; i++) {
			String title ="Planning";
			String text = "<p>Le planning suivant a été annulé</p>"
					+ "<ul><li>Date début : "+planningRepo.findByIdP(idP).getStartDate()
					+"</li><li>Date fin : "+planningRepo.findByIdP(idP).getEndDate()+"</li></ul>";
			notificationRepo.save(new Notification(null,title,text,users.get(i).getIdU()));
			/*String sub = "Annulation de planning";
			String html="<h1 class='text-center'>Annulation de planning</h1>"
					+ "<p>Le planning suivant a été annulé</p>"
					+ "<ul><li>Date début : "+planningRepo.findByIdP(idP).getStartDate()
					+"</li><li>Date fin : "+planningRepo.findByIdP(idP).getEndDate()+"</li></ul>"
							+ "<p>consultez le sur</p><p> http://localhost:3000/monPlanning</p>";
			SendEmail.sendMail(users.get(i).getEmail(),sub,html);*/
			
		}
		groupe.getPlannings().remove(planning);
		groupeRepo.save(groupe);
		planningRepo.deleteByIdP(idP);
		System.out.println(groupe);
	}

	@Override
	@PostMapping("email")
	public void sendEmailToResetPassword(@RequestBody User user) {
		String sub = "Renitialisation du mot de passe";
		String html="<h1 class='text-center'>Renitialisation du mot de passe</h1>"
				+ "<p>Clickez sur lien pour renitialiser votre mot de passe</p>"
				+ "<p>http://localhost:3000/resetPassword/"+user.getToken()+"</p>";
		SendEmail.sendMail(user.getEmail(),sub,html);
	}

	@Override
	@GetMapping("notifications/{idU}")
	public List<Notification> findAllByIdU(@PathVariable Long idU) {
		return notificationRepo.findAllByIdUOrderByIdNDesc(idU);
	}

	@Override
	@DeleteMapping("notifications/{idN}")
	public void deleteNotification(@PathVariable Long idN) {
		notificationRepo.deleteById(idN);
	}
	
}
