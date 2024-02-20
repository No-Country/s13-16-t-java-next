package com.s1316tjavanext.reciclamebackend.repository;

import com.s1316tjavanext.reciclamebackend.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Integer> {
    List<Location> findByProvinceId(int provinceId);
}
