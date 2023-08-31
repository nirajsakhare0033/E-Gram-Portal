package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Scheme;
import com.example.demo.model.User;
import com.example.demo.model.Village;
import com.example.demo.service.MyService;



@CrossOrigin("http://localhost:4200")
@RestController
public class MyController {
	
	@Autowired
	MyService service;
	
	//register
	@PostMapping("register{selectedVillage}")
	public boolean register(@RequestBody User user, @PathVariable String selectedVillage) {
		return service.storeUserInDatabase(user, selectedVillage);
	}
	//login
	@GetMapping("login{UIusername}/{UIpassword}")
	public int login(@PathVariable String UIusername, @PathVariable String UIpassword ) {
		return service.loginUser(UIusername, UIpassword);
	}
	
	//village
	@PostMapping("addVillageData")
	public boolean addVillageData(@RequestBody Village village) {
		return service.addVillageDataInDatabase(village);
	}
	
	@GetMapping("getVillageData")
	public List<Village> getVillageData(){
		return service.getAllVillage();
	}
	
	@GetMapping("getunverifieduserData")
	public List<User> getunverifieduserData(){
		return service.getunverifieduser();
	}
	
	//addscheme
	@PostMapping("addScheme{selectScheme}")
	public boolean addScheme (@RequestBody Scheme scheme, @PathVariable String selectVillage) {
		
		return service.addSchemeInVillage(scheme, selectVillage);
		
	}
	
	
	
	
	

}
