package com.example.demo.serviceImplementation;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.MyService;

@Component
public class MyServiceImplementation implements MyService {

	@Autowired
	UserRepo userRepo;

	@Override
	public boolean storeUserInDatabase(User user) {
		// TODO Auto-generated method stub

		try {
			user.setRegistrationDate(new Date());
			user.setUserRole(3);
			userRepo.save(user);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

}
