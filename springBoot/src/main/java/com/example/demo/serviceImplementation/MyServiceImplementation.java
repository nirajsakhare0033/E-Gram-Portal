package com.example.demo.serviceImplementation;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.model.Scheme;
import com.example.demo.model.User;
import com.example.demo.model.Village;
import com.example.demo.repository.SchemeRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.repository.VillageRepo;
import com.example.demo.service.MyService;

@Component
public class MyServiceImplementation implements MyService {


	@Autowired
	UserRepo userRepo;
    //for login implementaion
	@Override
	public int loginUser(String UIusername, String UIpassword) {

		int cnt = userRepo.countByUsername(UIusername);

		if(cnt == 1) {
			User user = userRepo.getUserFromUsername(UIusername);
			if(user.getUsername().equals(UIusername) && user.getUsername().equals(UIpassword)) {
				return user.getUserRole();
			}
			else {
				return -1;
			}
		}
		return -1;
	}
    
	@Override
	public boolean storeUserInDatabase(User user, String selectedVillage) {


		try {
			user.setRegistrationDate(new Date());
			user.setUserRole(3);
			
			user.setUserverified(1);
			userRepo.save(user);
			
			//for village store data
			Village village = villageRepo.findByVillageName(selectedVillage);
			List<User> users = village.getUser();
			User  dbUser = userRepo.getUserFromUsername(user.getUsername());
			users.add(dbUser);
			villageRepo.save(village);
			
			
			
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}
	// for village data method implemented
	
	@Autowired
	VillageRepo villageRepo;
	
	@Override
	public boolean addVillageDataInDatabase(Village village) {
	 try {
		 villageRepo.save(village);
		 
		 return true;
	 }
	 catch(Exception e) {
		 e.printStackTrace();
	 }
		return false;
	}

	@Override
	public List<User> getunverifieduser() {
		
		try {
			List<User> userData = userRepo.getDataOfUnverifiedUser();
			return userData;
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
		
	}

	@Override
	public List<Village> getAllVillage() {
		
		try {
			List<Village> allData = villageRepo.findAll();
			return allData;
		}
		catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}

	@Autowired
	SchemeRepo schemeRepo;
	
	//scheme 
	@Override
	public boolean addSchemeInVillage(Scheme scheme, String selectVillage) {
		try {
			schemeRepo.save(scheme);
			Village village = villageRepo.findByVillageName(selectVillage);
			Scheme dbScheme =schemeRepo.findBySchemeShortName(scheme.getSchemeShortName());
			List<Village> villages = dbScheme.getVillge();
			schemeRepo.save(dbScheme);
			return true;
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
			
		}
		
	}



}
