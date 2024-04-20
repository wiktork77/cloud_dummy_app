package com.wiktor.tictactoebackend.Exception;

public class InvalidParamException extends Exception {
    public String message;

    public InvalidParamException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
