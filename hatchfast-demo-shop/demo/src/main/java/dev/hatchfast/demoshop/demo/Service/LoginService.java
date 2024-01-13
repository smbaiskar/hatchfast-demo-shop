package dev.hatchfast.demoshop.demo.Service;

import dev.hatchfast.demoshop.demo.Entities.Customer;


public interface LoginService 
{
	Customer authenticateUser(String UserName,String password );

 void getAllProducts();

}

