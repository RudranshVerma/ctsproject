package com.cts.project.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.entity.User;
import com.cts.project.repository.UserRepository;
import com.cts.project.response.LoginRequest;
import com.cts.project.response.LoginResponse;
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
	public User updateUserById( User user,Long id) {
		User oldUser = userRepository.findById(id).get();

		if (oldUser.getUserName() != user.getUserName()) {
			oldUser.setUserName(user.getUserName());
		}
		if (oldUser.getPassword() != user.getPassword()) {
			oldUser.setPassword(user.getPassword());
		}
		if (oldUser.getEmailId() != user.getEmailId()) {
			oldUser.setEmailId(user.getEmailId());
		}
		if (oldUser.getRole() != user.getRole()) {
			oldUser.setRole(user.getRole());
		}
		
		
		return userRepository.save(oldUser);
	}

	@Override
    public LoginResponse loginUser(LoginRequest loginRequest) {
		String msg="";
        Optional<User> user1 = userRepository.findByEmailId(loginRequest.getEmail());
        if (user1 != null) {
            String password = loginRequest.getPassword();
            String encodedPassword = loginRequest.getPassword();
            
            if (password.equals(encodedPassword)) {
                Optional<User> user2 = userRepository.findOneByEmailIdAndPassword(loginRequest.getEmail(), encodedPassword);
                if (user2.isPresent()) {
                	System.out.println(user2.isPresent());
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
		
    }
}