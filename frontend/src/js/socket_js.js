const url = 'http://<INSTANCE_IP>:8080';
let stompClient;
let gameId;
let playerType;

function connectToSocket(gameId) {

    console.log("connecting to the game");
    let socket = new SockJS(url + "/gameplay");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log("connected to the frame: " + frame);
        stompClient.subscribe("/topic/game-progress/" + gameId, function (response) {
            let data = JSON.parse(response.body);
            console.log(data);
            displayResponse(data);
        })
    })
}

function create_game() {
    let name = document.getElementById("name").value;
    if (name == null || name === '') {
        alert("Please enter name");
    } else {
        $.ajax({
            url: url + "/game/start",
            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "name": name
            }),
            success: function (data) {
                gameId = data.gameId;
                playerType = 'X';
                reset();
                connectToSocket(gameId);
                alert("Your created a game. Game id is: " + data.gameId);
                gameOn = true;
                console.log("succ")
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
}


function connectToRandom() {
    let name = document.getElementById("name").value;
    if (name == null || name === '') {
        alert("Please enter name");
    } else {
        $.ajax({
            url: url + "/game/connect/random",
            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "name": name
            }),
            success: function (data) {
                gameId = data.gameId;
                playerType = 'O';
                reset();
                connectToSocket(gameId);
                alert("Congrats you're playing with: " + data.player1.name);
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
}

function connectToSpecificGame() {
    let name = document.getElementById("name").value;
    if (name == null || name === '') {
        alert("Please enter name");
    } else {
        let gameId = document.getElementById("game_id").value;
        if (gameId == null || gameId === '') {
            alert("Please enter game id");
        }
        $.ajax({
            url: url + "/game/connect",
            type: 'POST',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "player": {
                    "name": name
                },
                "gameId": gameId
            }),
            success: function (data) {
                gameId = data.gameId;
                playerType = 'O';
                reset();
                connectToSocket(gameId);
                alert("Congrats you're playing with: " + data.player1.name);
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
}