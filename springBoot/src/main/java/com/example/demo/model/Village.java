package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity //for creating table for village in database
@Data //getter setter (for set and get value)
@NoArgsConstructor //default constructor to intilze the object property
@AllArgsConstructor //parameterized constructor
@ToString //to print object as it as format
public class Village {
	@Id
	@GeneratedValue
	int id;
	String villageName;
	int pincode;
	
  
}
