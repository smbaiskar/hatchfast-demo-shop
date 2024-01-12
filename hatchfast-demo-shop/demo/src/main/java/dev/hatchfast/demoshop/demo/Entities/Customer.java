package dev.hatchfast.demoshop.demo.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;



@Entity
@jakarta.persistence.Table(name="Iuser")
public class Customer {
	
	@jakarta.persistence.Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	@Column(name="USERNAME",length= 25,nullable = false)
	private String userName;
	
	@Column(name="Password",length=25,nullable = false)
	private String password;
	
	@Column(name="firstname",length=15,nullable = false)
	private String fname;
	
	@Column(name="lastname",length=15,nullable = false)
	private String lname;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		password = password;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public Customer(int id, String userName, String password, String fname, String lname) {
		super();
		Id = id;
		userName = userName;
		password = password;
		this.fname = fname;
		this.lname = lname;
	}

	public Customer() {
		super();
	}

	@Override
	public String toString() {
		return "Customer [Id=" + Id + ", UserName=" + userName + ", Password=" + password + ", fname=" + fname + ", lname="
				+ lname + "]";
	}
	
	
	
	
	
	
}
	
