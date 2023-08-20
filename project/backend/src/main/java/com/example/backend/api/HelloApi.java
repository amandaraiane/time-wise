package com.example.backend.api;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api
@RestController
@RequestMapping("teste")
public class HelloApi {

    @GetMapping
    public String getHello() {
        return "Hello";
    }

}
