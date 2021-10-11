window.onload = function(){

    /*----- constants -----*/
    var squares = document.querySelectorAll("#board div");
    /*----- app"s state (variables) -----*/

    var turn = 1;
    var state = ["","","","","","","","",""];
    var dict = {};
    var status = document.getElementById("status");


    /*----- cached element references -----*/

    var pos = 0;
    squares.forEach(square => {
        square.classList.add("square");
        addListener(square, pos);
        addHover(square);
        removeHover(square);
        pos = pos + 1;
    })

    document.querySelector("button").addEventListener("click", function(){
        for(var square of squares){
            square.classList.remove("X");
            square.classList.remove("O");
            square.innerHTML = "";
            square.innerHTML = "";
        }
        turn = 1;
        state = ["","","","","","","","",""];
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
    });

    function addListener(square, pos) {
        square.addEventListener("click", function() {
            if(turn == 1 && this.innerHTML == ""){
                this.innerHTML = "X";
                this.classList.add("X")
                state[pos] = turn;
                
                if( state[0] == turn && state[1] == turn && state[2] == turn ||
                    state[3] == turn && state[4] == turn && state[5] == turn ||
                    state[6] == turn && state[7] == turn && state[8] == turn ||
                    state[0] == turn && state[3] == turn && state[6] == turn ||
                    state[1] == turn && state[4] == turn && state[7] == turn ||
                    state[2] == turn && state[5] == turn && state[8] == turn ||
                    state[0] == turn && state[4] == turn && state[8] == turn ||
                    state[2] == turn && state[4] == turn && state[6] == turn){
                    this.classList.add("you-won");
                    if(turn==1){
                        status.textContent = "Congratulations! X is the Winner!";
                    }else{
                        status.textContent = "Congratulations! O is the Winner!";
                    }
                }
                this.style.pointerEvents = 'none';
                turn = 2;
            }else if(turn == 2 && this.innerHTML == ""){
                this.innerHTML = "O";
                this.classList.add("O")
                state[pos] = turn;

                if( state[0] == turn && state[1] == turn && state[2] == turn ||
                    state[3] == turn && state[4] == turn && state[5] == turn ||
                    state[6] == turn && state[7] == turn && state[8] == turn ||
                    state[0] == turn && state[3] == turn && state[6] == turn ||
                    state[1] == turn && state[4] == turn && state[7] == turn ||
                    state[2] == turn && state[5] == turn && state[8] == turn ||
                    state[0] == turn && state[4] == turn && state[8] == turn ||
                    state[2] == turn && state[4] == turn && state[6] == turn){
                    this.classList.add("you-won");
                    if(turn==1){
                        status.textContent = "Congratulations! X is the Winner!";
                    }else{
                        status.textContent = "Congratulations! O is the Winner!";
                    }
                }
                this.style.pointerEvents = 'none';
                turn = 1;
            }
        })
    }

    function addHover(square) {
        square.addEventListener("mouseover", function(){
            this.classList.add("hover");
        });
    }

    function removeHover(square) {
        square.addEventListener("mouseout",function(){
            this.classList.remove("hover");
        });
    }

}