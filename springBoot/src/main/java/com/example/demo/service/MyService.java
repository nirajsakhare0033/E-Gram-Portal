package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Scheme;
import com.example.demo.model.User;
import com.example.demo.model.Village;

@Service
public interface MyService {
	//login
	// boolean storeUserInDatabase(User user, Object object); 
	 //login
	 int loginUser(String UIusername, String UIpassword);
	 
	 //village
	 
	 List<User> getunverifieduser();
	 
	 boolean addVillageDataInDatabase(Village village);
	 
	 List<Village> getAllVillage();
	 
	 //schema 
	 boolean addSchemeInVillage(Scheme scheme, String selectVillage);
	boolean storeUserInDatabase(User user, String selectedVillage);
		
		
	
	
}
