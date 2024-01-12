package dev.hatchfast.demoshop.demo.Dao;

import java.util.List;

import dev.hatchfast.demoshop.demo.Entities.Customer;
import dev.hatchfast.demoshop.demo.Entities.Products;

public interface IUserDao {
	public Customer authenticateUser(String UserName, String password);

	public List<Products> getAllProducts();

	public Products getProductbyId(Integer id);
}
