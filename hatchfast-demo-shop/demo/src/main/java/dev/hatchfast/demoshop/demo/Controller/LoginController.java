package dev.hatchfast.demoshop.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import dev.hatchfast.demoshop.demo.Entities.Customer;
import dev.hatchfast.demoshop.demo.Entities.User;
import dev.hatchfast.demoshop.demo.Service.LoginResponse;
import dev.hatchfast.demoshop.demo.Service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	private LoginService loginService;
	private Gson gson = new GsonBuilder().setPrettyPrinting().create();

	public LoginController() {
		System.out.println("in default constr of : " + getClass().getName());
	}

	@PostMapping("/validate")
	public void validateUser(@RequestParam(name = "userName") String userName,
			@RequestParam(name = "password") String pwd) {
		System.out.println("in validateUser() of : " + getClass().getName());

		System.out.println("userName : " + userName + ", password : " + pwd);

		var user = loginService.authenticateUser(userName, pwd);

	}

	@PostMapping("/test")
	public ResponseEntity<LoginResponse> test(@RequestBody String jsonRequest) {
		User xUser = null;
		System.out.println("in validateUser() of : " + getClass().getName());
		System.out.println(jsonRequest);
		JsonObject json = gson.fromJson(jsonRequest, JsonObject.class);
		System.out.println(json);
		String userName = json.get("userName").getAsString();
		String pwd = json.get("password").getAsString();
		System.out.println("userName : " + userName + ", password : " + pwd);

		System.out.println(xUser);
		
		Customer user = loginService.authenticateUser(userName, pwd);
		System.out.println(user);

		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setCustomer(user);
		
		if(user == null) {
			loginResponse.setMessage("CUSTOMER NOT FOUND");
		}
		
		ResponseEntity<LoginResponse> response = new ResponseEntity<LoginResponse>(loginResponse, HttpStatus.OK);
		return response;

	}
	
	 @GetMapping("/test1")
	    public ResponseEntity<?> getById() {

		 
	      
	            return new ResponseEntity<String>("WORKING FINE", HttpStatus.OK);

	        
	    }
	 
	 @GetMapping("/gettest")
	    public ResponseEntity<?> gettest() {

	      System.out.println("test");
	            return new ResponseEntity<String>("WORKING FINE", HttpStatus.OK);

	        
	    }
}
