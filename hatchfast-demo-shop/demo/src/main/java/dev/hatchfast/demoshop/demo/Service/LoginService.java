package dev.hatchfast.demoshop.demo.Service;

import java.util.List;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;


public interface LoginService 
{
public default String authenticateUser(String UserName,String password )
{
	return "Welcome User"+UserName;
	

}

public void getAllProducts();

}

