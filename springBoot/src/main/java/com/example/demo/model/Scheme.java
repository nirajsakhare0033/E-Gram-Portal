package com.example.demo.model;

import java.util.Date;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity 
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
//to adding scheme in the user and village
public class Scheme {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	Date schemeStartDate;
	Date expDate;
	String schemeShortName;
	String schemeDese;
	
	
	@ManyToMany(cascade = CascadeType.ALL)
	List<Village> villge;
}
