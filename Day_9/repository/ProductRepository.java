package com.boat.boathouse.repository;



import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boat.boathouse.entity.Products;

public interface ProductRepository extends JpaRepository<Products, Integer> {
    // return all products
    List<Products> findAll();

    Optional<Products> findByProductId(int productId);
}