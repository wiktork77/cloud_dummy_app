package com.wiktor.tictactoebackend.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TicToe {
    X(1), O(2);

    private Integer value;
}
