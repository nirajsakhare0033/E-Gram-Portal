package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.model.Village;

@Service
public interface MyService {
	//login
	 boolean storeUserInDatabase(User user); 
	 //login
	 int loginUser(String UIusername, String UIpassword);
	 
	 //village
	 boolean addVillageDataInDatabase(Village village);
	 
		
		
	
	
}
