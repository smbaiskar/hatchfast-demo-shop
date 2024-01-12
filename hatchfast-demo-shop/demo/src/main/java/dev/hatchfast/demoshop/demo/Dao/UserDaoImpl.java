package dev.hatchfast.demoshop.demo.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import dev.hatchfast.demoshop.demo.Entities.Customer;
import dev.hatchfast.demoshop.demo.Entities.Products;

@Repository
public class UserDaoImpl implements IUserDao{

	@Override
	public Customer authenticateUser(String UserName, String password) {
		
		String jpql = "select u from User u where u.userName = :Username and u.password = :password";

		return null;
	}

	@Override
	public List<Products> getAllProducts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Products getProductbyId(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

}
