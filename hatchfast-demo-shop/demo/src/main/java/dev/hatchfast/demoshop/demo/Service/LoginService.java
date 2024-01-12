package dev.hatchfast.demoshop.demo.Service;

import dev.hatchfast.demoshop.demo.Entities.Customer;


public interface LoginService 
{
public Customer authenticateUser(String UserName,String password );

public void getAllProducts();

}

