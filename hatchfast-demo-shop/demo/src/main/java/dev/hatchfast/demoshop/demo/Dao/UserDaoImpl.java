//package dev.hatchfast.demoshop.demo.Dao;
//
//import java.util.List;
//
//import org.springframework.stereotype.Repository;
//
//import dev.hatchfast.demoshop.demo.Entities.Customer;
//import dev.hatchfast.demoshop.demo.Entities.Products;
//import dev.hatchfast.demoshop.demo.repository.CustomerRepository;
//
//@Repository
//public class UserDaoImpl implements IUserDao{
//	
//	 @Override
//	public  Customer authenticateUser(String UserName, String password) {
//		
//		try {
//        
//            return CustomerRepository.findByUserNameAndPassword(UserName, password)
//                    .orElse(null);
//        } catch (Exception e) {
//          
//            System.out.println(e.getMessage());
//            return null;
//        }
//	}
//
//	@Override
//	public List<Products> getAllProducts() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Products getProductbyId(Integer id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//}
