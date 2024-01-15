package dev.hatchfast.demoshop.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dev.hatchfast.demoshop.demo.Entities.Customer;
import dev.hatchfast.demoshop.demo.repository.CustomerRepository;



@Repository
public class LoginServiceImpl implements LoginService
{
	@Autowired
	private CustomerRepository cRepository;
	
	@Override
	public Customer authenticateUser(String UserName, String password) {
		Customer user = null;
		try 
		{
			user = cRepository.authenticateUser(UserName, password);
			
		}
		catch(Exception e) 
		{
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		
		return user;
	}

	@Override
	public void getAllProducts() {
	
		
	}

	
	
	
}
