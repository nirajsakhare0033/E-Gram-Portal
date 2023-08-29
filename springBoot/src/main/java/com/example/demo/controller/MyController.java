package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.MyService;



@CrossOrigin("http://localhost:4200")
@RestController
public class MyController {
	
	@Autowired
	MyService service;
	
	
	@PostMapping("login")
	public boolean login(@RequestBody User user) {
		return service.storeUserInDatabase(user);
	}
	
	
	

}
