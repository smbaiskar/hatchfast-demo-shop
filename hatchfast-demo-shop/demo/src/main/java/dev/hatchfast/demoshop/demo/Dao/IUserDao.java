package dev.hatchfast.demoshop.demo.Dao;

import java.util.List;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

import dev.hatchfast.demoshop.demo.Entities.Products;



public interface IUserDao 
{
public User authenticateUser(String UserName, String password);
	
	public List<Products> getAllProducts();
	public Products getProductbyId(Integer id);
}
