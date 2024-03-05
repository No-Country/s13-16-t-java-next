package com.s1316tjavanext.reciclamebackend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
@Setter
@Getter
public class ObjectNotValidException extends RuntimeException{

    private final Map<String, List<String>> ErrorMessages;

}
