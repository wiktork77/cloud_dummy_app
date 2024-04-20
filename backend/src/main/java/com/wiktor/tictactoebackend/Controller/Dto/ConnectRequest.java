package com.wiktor.tictactoebackend.Controller.Dto;


import com.wiktor.tictactoebackend.Model.Player;
import lombok.Data;

@Data
public class ConnectRequest {
    private Player player;
    private String gameId;
}
