package com.s1316tjavanext.reciclamebackend.service.impl;

import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Province;
import com.s1316tjavanext.reciclamebackend.repository.LocationRepository;
import com.s1316tjavanext.reciclamebackend.repository.ProvinceRepository;
import com.s1316tjavanext.reciclamebackend.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {
    private final ProvinceRepository provinceRepository;
    private final LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(ProvinceRepository provinceRepository, LocationRepository locationRepository) {
        this.provinceRepository = provinceRepository;
        this.locationRepository = locationRepository;
    }

    @Override
    public List<Province> getProvinces() {
        return provinceRepository.findAll();
    }

    @Override
    public List<Location> getLocationsByProvince(int provinceId) {
        return locationRepository.findByProvinceId(provinceId);
    }
}
