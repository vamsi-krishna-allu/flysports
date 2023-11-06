package com.flysports.register.services;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

public interface UserDetailService {

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
    public void registerNewUser(UserDto userDto); 
}