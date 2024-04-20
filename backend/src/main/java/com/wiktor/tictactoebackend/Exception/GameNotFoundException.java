package com.wiktor.tictactoebackend.Exception;

public class GameNotFoundException extends Exception {
    public String message;

    public GameNotFoundException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
