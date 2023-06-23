package com.cts.project.service;

import org.springframework.stereotype.Service;

import com.cts.project.entity.User;
import com.cts.project.response.LoginRequest;
import com.cts.project.response.LoginResponse;

import java.util.List;

@Service
public interface UserService {
	List<User> getAllUsers();

	User getUserById(Long userId);

	User createUser(User user);

	void deleteUserById(Long userId);

	User updateUserById(User user,Long userId);

	LoginResponse loginUser(LoginRequest loginRequest);

}