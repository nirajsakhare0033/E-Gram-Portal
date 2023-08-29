package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	int countByUsername(String UIusername);
	@Query(value="select * from user where username=?1", nativeQuery = true)
	User getUserFromUsername(String UIusername);
	

}
