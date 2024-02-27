package com.s1316tjavanext.reciclamebackend.util;

/**
 * @author jdmon on 26/02/2024
 * @project reciclame-backend
 */
public class Constants {
    public final static String REGEX_TITLE = "[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ ]{3,50}";
    public final static String REGEX_DESCRIPTION = "[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ!¡¿?,.\\-_ ]{3,500}";
    public final static String INVALID_CHARACTERS = "El campo contiene caracteres inválidos";

    public final static String INVALID_EMAIL = "El email no es valido";

    public final static String INVALID_PASSWORD = """
             El campo debe ser mínimo de 8 caracteres,
             al menos una letra mayúscula,
             y opcionalmente solo se permite los siguientes caracteres especiales:
             .!@#$&*%_-=
            """;

    public final static String INVALID_PHONE_NUMBER = "El numero de telefono no es valido";
}
