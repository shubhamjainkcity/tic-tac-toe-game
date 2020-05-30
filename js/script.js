const tictactoe = (function(){

    const infoelement = document.getElementById('info');

    const boxelements = document.getElementsByClassName('box');

    const boxs = [];



    let turn = 'O'; 
    let playing = true; 



    infoelement.innerText = turn + '\'s TURN';



    for (let index = 0; index < boxelements.length; index++) {

        boxelements[index].addEventListener('click', evt => boxClick(evt, index));

    

        boxs[index] = {

            element: boxelements[index],

            value: null, // is this box X or O

            reset: function() {

                this.element.classList.remove(this.value);

                this.value = null;

            }

        }

    }



    function boxClick(evt, index) {

        if(playing && boxs[index].value === null) {

            boxs[index].value = turn;

            boxs[index].element.classList.add(turn);



            toogleTurn();

            checkWinner();

        }

    }



    function toogleTurn() {

        turn = turn === 'O' ? 'X' : 'O';



        infoelement.innerText = turn + '\'s TURN';

    }





    function checkWinner() {

        let winner = null;



        if(boxs[0].value !== null && boxs[0].value === boxs[1].value && boxs[0].value === boxs[2].value) winner = boxs[0].value;

        else if(boxs[3].value !== null && boxs[3].value === boxs[4].value && boxs[3].value === boxs[5].value) winner = boxs[3].value; 

        else if(boxs[6].value !== null && boxs[6].value === boxs[7].value && boxs[6].value === boxs[8].value) winner = boxs[6].value; 

        else if(boxs[0].value !== null && boxs[0].value === boxs[3].value && boxs[0].value === boxs[6].value) winner = boxs[0].value;

        else if(boxs[1].value !== null && boxs[1].value === boxs[4].value && boxs[1].value === boxs[7].value) winner = boxs[1].value; 

        else if(boxs[2].value !== null && boxs[2].value === boxs[5].value && boxs[2].value === boxs[8].value) winner = boxs[2].value; 

        else if(boxs[0].value !== null && boxs[0].value === boxs[4].value && boxs[0].value === boxs[8].value) winner = boxs[0].value; 

        else if(boxs[2].value !== null && boxs[2].value === boxs[4].value && boxs[2].value === boxs[6].value) winner = boxs[2].value; 

        



        if(winner !== null) {

            playing = false;

            infoelement.innerHTML = winner + ' WINS<br><button onclick="tictactoe.restart()">RESTART</button>';

        } else if ( // check draw

            boxs[0].value !== null && boxs[1].value !== null && boxs[2].value !== null && 

            boxs[3].value !== null && boxs[4].value !== null && boxs[5].value !== null && 

            boxs[6].value !== null && boxs[7].value !== null && boxs[8].value !== null

        ) {

            playing = false;

            infoelement.innerHTML = 'DRAW<br><button onclick="tictactoe.restart()">RESTART</button>';

        }

    }



    return {

        restart: function() {

            playing = true;

            turn = 'O';

            infoelement.innerText = turn + '\'s TURN';



            for (let index = 0; index < boxs.length; index++) {

                boxs[index].reset();

            }

        }

    }

})();