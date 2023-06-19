package com.cts.project.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.entity.User;
import com.cts.project.repository.UserRepository;
import com.cts.project.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(Long id) {
		return userRepository.findById(id).get();
	}

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public void deleteUserById(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public User updateUserById(User user, Long id) {
		User oldUser = userRepository.findById(id).get();
		if (oldUser.getRole() != user.getRole()) {
			oldUser.setRole(user.getRole());
		}
		if (oldUser.getUserName() != user.getUserName()) {
			oldUser.setUserName(user.getUserName());
		}
		if (oldUser.getPassword() != user.getPassword()) {
			oldUser.setPassword(user.getPassword());
		}
		if (oldUser.getEmailId() != user.getEmailId()) {
			oldUser.setEmailId(user.getEmailId());
		}
		return userRepository.save(oldUser);
	}
}