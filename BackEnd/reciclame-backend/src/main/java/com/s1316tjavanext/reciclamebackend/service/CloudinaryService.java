package com.s1316tjavanext.reciclamebackend.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;

/**
 * @author jdmon on 26/02/2024
 * @project reciclame-backend
 */
public interface CloudinaryService {

    Map<Object, Object> upload(MultipartFile mpf) throws IOException;
    File convert (MultipartFile mpf) throws FileNotFoundException;

}
