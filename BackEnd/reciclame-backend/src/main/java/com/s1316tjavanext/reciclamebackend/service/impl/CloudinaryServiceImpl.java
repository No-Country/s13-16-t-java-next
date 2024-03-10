package com.s1316tjavanext.reciclamebackend.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.s1316tjavanext.reciclamebackend.service.CloudinaryService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/**
 * @author jdmon on 26/02/2024
 * @project reciclame-backend
 */
@Service
public class CloudinaryServiceImpl implements CloudinaryService {
    @Value("${cloudinary.cloud_secret}")
    private String CLOUD_SECRET;

    @Value("${cloudinary.cloud_name}")
    private String CLOUD_NAME;

    @Value("${cloudinary.cloud_key}")
    private String CLOUD_KEY;

    private Cloudinary cloudinary;

    private final Map<String, String> valuesMap = new HashMap<>();

    @PostConstruct
    public void init() {
        valuesMap.put("cloud_name", CLOUD_NAME);
        valuesMap.put("api_key", CLOUD_KEY);
        valuesMap.put("api_secret", CLOUD_SECRET);
        this.cloudinary = new Cloudinary(valuesMap);
    }

    @Override
    public Map upload(MultipartFile mpf) throws IOException {
        File file = convert(mpf);
        Map result = cloudinary.uploader()
                .upload(
                        file,
                        ObjectUtils.asMap("folder", "Reciclame/"));
        file.delete();
        return result;
    }

    @Override
    public File convert(MultipartFile mpf) {
        File file = new File(Objects.requireNonNull(mpf.getOriginalFilename()));
        try (FileOutputStream fo= new FileOutputStream(file)){
            fo.write(mpf.getBytes());
        }catch (IOException e) {
            throw new RuntimeException(e);
        }
        return file;
    }
}
