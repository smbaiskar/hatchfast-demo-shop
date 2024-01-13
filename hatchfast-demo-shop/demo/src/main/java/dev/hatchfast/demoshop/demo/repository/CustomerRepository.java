package dev.hatchfast.demoshop.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import dev.hatchfast.demoshop.demo.Entities.Customer;
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query(value="SELECT * FROM customer WHERE user_name =:userName AND password =:pass ",nativeQuery=true)
    Customer authenticateUser(@Param("userName") String userName ,@Param("pass") String Password);
		// TODO Auto-generated method stub
}	
	

