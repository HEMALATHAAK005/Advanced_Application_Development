package com.boat.boathouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boat.boathouse.entity.UserInfo;

import java.util.List;
import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

    List<UserInfo> findAll();
}