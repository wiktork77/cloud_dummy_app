package com.wiktor.tictactoebackend.Exception;

public class InvalidGameException extends Exception {
    public String message;

    public InvalidGameException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
