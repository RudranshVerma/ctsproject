package com.cts.project.controller;

import java.util.List;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.entity.User;
import com.cts.project.exception.UserNotCreatedException;
import com.cts.project.exception.UserNotFoundException;
import com.cts.project.service.UserService;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {

	public static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

//	@Autowired
//	private UserRepository userRepository;

	@PostMapping("/createUser")
	public User createUser(@RequestBody User user) throws UserNotCreatedException {
		logger.info("Creating user");
		User checkUser = userService.createUser(user);
		if (checkUser.getUserId() <= 0) {
			logger.error("User not created");
			throw new UserNotCreatedException("Entered User Couldn't be Created");
		}
		return checkUser;
	}

	@GetMapping("/getAllUsers")
	public ResponseEntity<List<User>> getAllUser() {
		logger.info("Getting all users");
		List<User> userList = userService.getAllUsers();
		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
	}

	@GetMapping("/getUserById/{id}")
	public User getUserById(@PathVariable Long id) throws UserNotFoundException {
		logger.info("Getting user by id");
		User checkUser = userService.getUserById(id);
		if (checkUser == null) {
			logger.error("User cannot be found");
			throw new UserNotFoundException("Entered User doesn't exist");
		}
		logger.info("Getting user by id");
		return checkUser;
	}

	@PutMapping("/updateUserById/{id}")
	public User updateUserById(@RequestBody User user, @PathVariable Long id) {
		logger.info("Updating user");
		return userService.updateUserById(user, id);
	}

	@DeleteMapping("/deleteUserById/{id}")
	public void deleteUserById(@PathVariable Long id) {
		logger.info("Deleting user");
		userService.deleteUserById(id);
	}
}