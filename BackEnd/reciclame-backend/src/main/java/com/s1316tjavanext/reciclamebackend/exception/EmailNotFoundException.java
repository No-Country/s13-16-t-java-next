package com.s1316tjavanext.reciclamebackend.exception;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class EmailNotFoundException extends RuntimeException {
    
    public EmailNotFoundException(String message) {
        super(message);
    }

    public EmailNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

}
