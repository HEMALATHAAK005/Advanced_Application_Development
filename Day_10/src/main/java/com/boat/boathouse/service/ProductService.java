package com.boat.boathouse.service;

import com.boat.boathouse.dto.Product;
import com.boat.boathouse.entity.Products;
import com.boat.boathouse.entity.UserInfo;
import com.boat.boathouse.repository.ProductRepository;
import com.boat.boathouse.repository.UserInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Products addProducts(Product product) {
        Products products = new Products();
        products.setName(product.getName());
        products.setPrice(product.getPrice());
        products.setQty(product.getQty());
        productRepository.save(products);
        return products;
    }

    public List<Products> getProducts() {
        return productRepository.findAll();
    }

    public Products getProduct(int id) {
        return productRepository.findById(id).get();
    }

    public String addUser(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repository.save(userInfo);
        return "user added to system ";
    }

    public List<UserInfo> getalluUserInfos() {
        return repository.findAll();
    }
}
