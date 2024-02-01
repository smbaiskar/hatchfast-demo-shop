package dev.hatchfast.demoshop.demo.Service;

import dev.hatchfast.demoshop.demo.Entities.Customer;

public class LoginResponse {

	private Customer customer;
	private String message;
	private Boolean error = false;
	
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Boolean getError() {
		return error;
	}
	public void setError(Boolean error) {
		this.error = error;
	}

}
