package com.s1316tjavanext.reciclamebackend.service;

import com.s1316tjavanext.reciclamebackend.entity.Location;
import com.s1316tjavanext.reciclamebackend.entity.Province;

import java.util.List;

public interface LocationService {
    List<Province> getProvinces();

    List<Location> getLocationsByProvince(int provinceId);
}
