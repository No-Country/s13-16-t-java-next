package com.s1316tjavanext.reciclamebackend.handler;

import com.s1316tjavanext.reciclamebackend.exception.IdNotFoundException;
import com.s1316tjavanext.reciclamebackend.exception.ObjectNotValidException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ObjectNotValidException.class)
    public ResponseEntity<?> handleObjectNotValidException(ObjectNotValidException exception) {
        return ResponseEntity
                .badRequest()
                .body(getErrorsMap(exception.getErrorMessages().stream().collect(Collectors.toList())));
    }

    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<?> handleObjectNotValidException(IdNotFoundException exception) {   
        return ResponseEntity
                .badRequest()
                .body(getErrorsMap(Arrays.asList(exception.getMessage())));
    }

    private Map<String, List<String>> getErrorsMap(List<String> errors) {
        Map<String, List<String>> errorResponse = new HashMap<>();
        errorResponse.put("errors", errors);
        return errorResponse;
    }
}
