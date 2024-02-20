package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.service.TestService;
import org.springframework.stereotype.Service;

@Service
public class TestServiceImpl implements TestService {
    @Override
    public String test() {
        return "OK!";
    }
}
