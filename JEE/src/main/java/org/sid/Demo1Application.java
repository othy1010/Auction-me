package org.sid;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.sid.dao.ItemRepo;
import org.sid.dao.Token;
import org.sid.entities.Bid;
import org.sid.entities.Payment;
import org.sid.entities.Item;
import org.sid.entities.User;
import org.sid.servicesImp.BidServiceImpl;
import org.sid.servicesImp.ItemServiceImpl;
import org.sid.servicesImp.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo1Application implements CommandLineRunner {
	@Autowired
	private UserServiceImpl userServiceImpl ;
	@Autowired
	private ItemRepo itemRepo ;
	@Autowired
	private ItemServiceImpl itemServiceImpl;
	@Autowired
	private BidServiceImpl bidServiceImpl;

	/*private UserRepo userRepo ;
	@Autowired
		private PlanningRepo planningRepo ;*/

	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class,args);
	}

	@SuppressWarnings("deprecation")
	@Override
	public void run(String... args) throws Exception {
		userServiceImpl.saveUser(new User(null,"anass",new Token().nextString(),"Anass","EL JAZOULY",1,
				"MAROC","CASA","AIN CHOK",new Date(2000/04/04),"TEMARA",0652052654,
				"anass.eljazouly@gmail.com","1234",true,true,"bdfs4444",null,null));
		itemServiceImpl.saveItem(new Item(null,"item1",(float)180.40,1L,1L,true,"MAROC","blablalblalalba" ));
		bidServiceImpl.saveBid(new Bid(null,1L,1L,(float)400.20,true));
		/*userServiceImpl.saveUser(new User(null,new Token().nextString(),"AGENT","1",1,"MAROC","RABAT","HAY RIAD",new Date(1995/01/15),"CASA"
				,"XXXX2",0652552675,"agent@gmail.com","1234","AGENT",null));
		userServiceImpl.saveUser(new User(null,new Token().nextString(),"RESPO","1",1,"MAROC","SALE","XXXXX",new Date(1980/10/05),"FES"
				,"XXXX3",0652052656,"respo@gmail.com","1234","RESPONSABLE",null));*/
		/*User user1 = userRepo.getById(1L);
		//User user2 = userRepo.getById(2L);
		
		userServiceImpl.saveGroupe(new Groupe(null,"G1",0,null,null));
		userServiceImpl.addUserToGroupe(1L,user1);
		userServiceImpl.saveGroupe(new Groupe(null,"G2",0,null,null));
		//userServiceImpl.addUserToGroupe(1L,user2);
		
		userServiceImpl.savePlanning(new Planning(null,new SimpleDateFormat("yyyy-MM-dd").parse("2021-08-08"),new SimpleDateFormat("yyyy-MM-dd").parse("2021-08-10"),null));
		Planning planning1 = planningRepo.findByIdP(1L);
		userServiceImpl.addPlanningToGroupe(1L, planning1);
		userServiceImpl.savePlanning(new Planning(null,new SimpleDateFormat("yyyy-MM-dd").parse("2021-09-08"),new SimpleDateFormat("yyyy-MM-dd").parse("2021-09-10"),1L));
		/*Planning planning2 = planningRepo.findByIdP(2L);
		userServiceImpl.addPlanningToGroupe(1L, planning2);*/
		/*User user = userServiceImpl.findByIdU(1L);
		user.setIdG(null);
		userRepo.save(user);
		System.out.println(user);
		System.out.println(userServiceImpl.findByIdG(1L));*/
		/*userServiceImpl.deleteGroupe(1L);
		System.out.println(userServiceImpl.getUsers());*/
	}
}
