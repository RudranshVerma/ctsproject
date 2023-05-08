package com.cts.login.service;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.cts.login.dbutil.DButil;

@Service
public class UserServiceImpl implements UserService{

	Connection connection;
	
	
	public UserServiceImpl() throws SQLException {
		connection = DButil.getConnection();
	}
	@Override
	public int loginValidation(String email, String password) {
		
		try {
			PreparedStatement statement = connection.prepareStatement("SELECT * FROM ANIME WHERE username= '"+email+"'");
			ResultSet rs =statement.executeQuery();
			
			while(rs.next())
			{
				
			}
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}
	

}
