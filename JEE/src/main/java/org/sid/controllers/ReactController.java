package org.sid.controllers;

import org.sid.entities.User;
import org.sid.servicesImp.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@CrossOrigin("http://localhost:3000")
public class ReactController {
    @Autowired
    private BidServiceImpl bidService;
    @Autowired
    private CategoryServiceImpl categoryServiceImpl;
    @Autowired
    private ItemServiceImpl itemService;
    @Autowired
    private PaymentServiceImpl paymentService;
    @Autowired
    private UserServiceImpl userService;


    /**       log in and sign up pages      **/

    @GetMapping(value="/login")
    public String loginPage(Model model){
        User user = new User();
        model.addAttribute("user",user);
        return "login";
    }
    @PostMapping(value = "/login")
    public String loginUser(Model model,@ModelAttribute("person")User user)
    {
        //System.out.println(person);
        User userSearch = userService.findByEmail(user.getEmail());
        if(userSearch !=null)
        {
            if(userSearch.getIsAdmin())
                return "AdminHome" ;
            else
                return"HomeUser";
        }
        else{
            System.out.println("Erreur d'authentification.");
            return "login";
        }
    }

    @GetMapping(value = "/signIn")
    public String signForm(Model model)
    {
        User user= new User();
        model.addAttribute("user", user);
        return "sign-up";
    }
    @PostMapping(value = "/sign-up")
    public String submitForm(Model model, @ModelAttribute("user") User user) {
        User checkExist = userService.findByEmail(user.getEmail());
        if(checkExist == null) {
            userService.saveUser(user);
            return "HomeUser";
        }
        else{
            System.out.println("User already exists");
            return "login" ;
        }

    }

    @RequestMapping("/")
    public String home(){
        return "Home";
    }

    /** Admin Home **/
   /* @RequestMapping("/AdminHome")
     public String adminHome(){
         return "AdminHome";
     }  */
    @RequestMapping("/admin-profil/{admin}")
    public String adminProfil(@PathVariable String admin){
        return "admin-profil";
    }
    @RequestMapping("/admin-notifications")
    public String adminNotifs(){
        return "admin-notifications";
    }


    @RequestMapping("/UsersList")    //
    public String usersList(){
        return "UsersList";
    }
    @RequestMapping("/user-info/{login}")   //
    public String userInfo(@PathVariable String login){
        return "unser-info";
    }
    @RequestMapping("/categories")  //
    public String categories(){
        return "categories";
    }
    @RequestMapping("/auctions")  //
    public String auctions(){
        return "auctions";
    }
    @RequestMapping("/auction-details/{id}")
    public String auctionDetails(@PathVariable int id){
        return "auction-details";
    }





    /** User Home */

   /* @RequestMapping("/HomeUser")
    public String userHome(){
        return "HomeUser";
    }   */

    @RequestMapping("/my-profil/{username}")
     public String myProfil(@PathVariable String username){
        return "my-profil";
     }
    @RequestMapping("/notifications")
    public String myNotifs(){
        return "notifications";
    }

    @RequestMapping("/all-auctions")
    public String allAuctions(){
        return "all-auctions";
    }
    @RequestMapping("/search/{id}")
    public String searchAuction(@PathVariable int id){
        return "auction-info";
    }
    @RequestMapping("/auction-info/{id}")
    public String auctionInfo(@PathVariable int id){
        return "auction-info";
    }
    @RequestMapping("/{username}/new-auction")
    public String newAuction(@PathVariable String username){
        return "new-auction";
    }
    @RequestMapping("/all-ended-auctions")
    public String allDoneAuctions(){
        return "all-ended-auctions";
    }

    @RequestMapping("/contact-us")
    public String userContactUS(){
        return "contact-us";
    }






}
