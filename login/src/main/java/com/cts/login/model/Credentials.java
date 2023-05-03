package com.cts.login.model;

public class Credentials {

	int id;

	@Override
	public String toString() {
		return "Credentials [id=" + id + ", email=" + email + ", password=" + password + "]";
	}

	public Credentials() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Credentials(Integer id, String email, String password) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	String email;
	String password;

}
