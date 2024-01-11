package dev.hatchfast.demoshop.demo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import dev.hatchfast.demoshop.demo.Service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController
{
@Autowired
private LoginService loginService; 
private Gson gson = new GsonBuilder().setPrettyPrinting().create();


public LoginController() {
	System.out.println("in default constr of : "+getClass().getName());
}

@PostMapping("/validate")
public void validateUser(@RequestParam(name="userName") String userName, @RequestParam(name="password") String pwd)
{
	System.out.println("in validateUser() of : "+getClass().getName());
	
	
	System.out.println("userName : "+userName+", password : "+pwd);

	var user = loginService.authenticateUser(userName, pwd);
	
	
}
@PostMapping("/test")
public void test(@RequestBody String jsonRequest )
{
	System.out.println("in validateUser() of : "+getClass().getName());
	System.out.println(jsonRequest);
	JsonObject json = gson.fromJson(jsonRequest, JsonObject.class);
	System.out.println(json);
	String userName=json.get("userName").getAsString();
	String pwd=json.get("password").getAsString();
	System.out.println("userName : "+userName+", password : "+pwd);

	var user = loginService.authenticateUser(userName, pwd);
	System.out.println(user);
	
	
	
	
}
}
