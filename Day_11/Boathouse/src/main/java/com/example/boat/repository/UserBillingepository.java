package com.example.boat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat.entity.UserBilling;


public interface UserBillingepository extends JpaRepository<UserBilling,Integer> {
    
}
