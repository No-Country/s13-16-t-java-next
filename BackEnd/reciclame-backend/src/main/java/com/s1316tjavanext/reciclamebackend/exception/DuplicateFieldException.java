package com.s1316tjavanext.reciclamebackend.exception;

public class DuplicateFieldException extends RuntimeException {
    
    public DuplicateFieldException(String message) {
        super(message);
    }

    public DuplicateFieldException(String message, Throwable cause) {
        super(message, cause);
    }
}
