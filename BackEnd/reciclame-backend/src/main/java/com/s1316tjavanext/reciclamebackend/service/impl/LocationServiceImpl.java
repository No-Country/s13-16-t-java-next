package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.entity.Province;
import com.s1316tjavanext.reciclamebackend.repository.ProvinceRepository;
import com.s1316tjavanext.reciclamebackend.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {
    private final ProvinceRepository provinceRepository;

    @Autowired
    public LocationServiceImpl(ProvinceRepository provinceRepository) {
        this.provinceRepository = provinceRepository;
    }

    @Override
    public List<Province> getProvinces() {
        System.out.println("LocationServiceImpl.getProvinces");
        System.out.println("Provinces:" + provinceRepository.findAll());
        return provinceRepository.findAll();
    }
}
