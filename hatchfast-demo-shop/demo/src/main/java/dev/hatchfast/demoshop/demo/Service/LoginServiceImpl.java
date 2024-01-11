package dev.hatchfast.demoshop.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

import dev.hatchfast.demoshop.demo.Dao.IUserDao;



@Service
public class LoginServiceImpl implements LoginService
{
	@Autowired
	private IUserDao userDao;
	
	@Override
	public String authenticateUser(String UserName, String password) {
		User user = null;
		try 
		{
			user = userDao.authenticateUser(UserName, password);
		}
		catch(Exception e) 
		{
			System.out.println(e.getMessage());
		}
		
		return "USERNAME"+UserName;
	}

	@Override
	public void getAllProducts() {
	
		
	}

	
	
	
}
