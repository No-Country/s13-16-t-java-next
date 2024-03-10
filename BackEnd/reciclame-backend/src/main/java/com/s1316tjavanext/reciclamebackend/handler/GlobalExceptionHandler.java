package com.s1316tjavanext.reciclamebackend.handler;

import com.s1316tjavanext.reciclamebackend.exception.IdNotFoundException;
import com.s1316tjavanext.reciclamebackend.exception.ObjectNotValidException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<?> handleObjectNotValidException(IdNotFoundException exception) {   
        return ResponseEntity
                .badRequest()
                .body(getErrorsMap(Arrays.asList(exception.getMessage())));
    }

    @ExceptionHandler(ObjectNotValidException.class)
    public ResponseEntity<?> handleObjectNotValidException(ObjectNotValidException exception) {

        return ResponseEntity
                .badRequest()
                .body(getErrorsMap(exception.getErrorMessages()));
    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<Map<String, Object>> handleConstraintViolationException(
            SQLIntegrityConstraintViolationException exception){

        Map<String, Object> errors;
        String message = exception.getMessage();
        if (message != null && message.startsWith("Duplicate")
            && message.contains("@")) {
            Map<String, String> errorMail = new HashMap<>();
            errorMail.put("Email","valorDuplicado: "+ message.substring(
                    message.indexOf(" '") + 2,
                    message.indexOf("' ")
            ));
            errors=getErrorsMap (errorMail);
        } else if (message != null && message.startsWith("Cannot")){
            errors=getErrorsMap("Acción no permitida");
        }
        else errors=getErrorsMap("Error de restricción de integridad" + message);
        return ResponseEntity.badRequest().body(errors);
    }

    private Map<String, Object> getErrorsMap(Object errors) {
        Map<String, Object> errorResponse = new HashMap<>();
        errorResponse.put("errors", errors);
        return errorResponse;
    }
}
