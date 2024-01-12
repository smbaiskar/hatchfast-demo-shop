package dev.hatchfast.demoshop.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.hatchfast.demoshop.demo.Dao.IUserDao;
import dev.hatchfast.demoshop.demo.Entities.Customer;



@Service
public class LoginServiceImpl implements LoginService
{
	@Autowired
	private IUserDao userDao;
	
	@Override
	public Customer authenticateUser(String UserName, String password) {
		Customer user = null;
		try 
		{
			user = userDao.authenticateUser(UserName, password);
		}
		catch(Exception e) 
		{
			System.out.println(e.getMessage());
		}
		
		return user;
	}

	@Override
	public void getAllProducts() {
	
		
	}

	
	
	
}
