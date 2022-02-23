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
        return "signIn";
    }
    @PostMapping(value = "/signIn")
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




    }
