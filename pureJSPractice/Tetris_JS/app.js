document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const width = 10;
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    //console.log(squares);

    //the tetromino's
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [1, width + 1, width + 2, width + 3]
    ];

    const zTetromino = [
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2],
        [1, 2, width, width + 1],
        [1, width + 1, width + 2, width * 2 + 2]
    ];

    const tTetromino = [
        [2, width + 1, width + 2, width + 3],
        [1, width + 1, width + 2, width * 2 + 1],
        [1, 2, 3, width + 2],
        [2, width + 1, width + 2, width * 2 + 2]
    ];

    const oTetromino = [
        [1, 2, width + 1, width + 2],
        [1, 2, width + 1, width + 2],
        [1, 2, width + 1, width + 2],
        [1, 2, width + 1, width + 2]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [1, 2, 3, 4],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [1, 2, 3, 4]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 3;
    let currentRotation = 0;
    let nextRandom = 0;
    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation];
    //console.log(current);
    //draw function
    function draw (){
        current.forEach(element => {
            squares[currentPosition + element].classList.add('Tetromino')
        });
    };

    //undraw function
    function unDraw () {
        current.forEach(element => {
            squares[currentPosition + element].classList.remove('Tetromino')
        });
    };

    //freeze function
    function freeze () {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            // start a new tetrimino
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
        }
    };

    //move left function
    function moveLeft () {
        unDraw();
        let isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
        if (!isAtLeftEdge){currentPosition -= 1};
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1;
        }
        draw();
    };

    //move right function
    function moveRight () {
        unDraw();
        let isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
        if(!isAtRightEdge){currentPosition += 1};
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1;
        };
        draw();
    };

    //rotate function
    function rotate () {
        unDraw();
        if(currentRotation == 0 || currentRotation == 1 || currentRotation == 2){
            currentRotation++;
        } else if(currentRotation == 3){
            currentRotation = 0;
        }
        current = theTetrominoes[random][currentRotation];
        draw();
    }

    //move down function
    function moveDown() {
        unDraw();
        currentPosition += width;
        draw();
        //console.log(currentPosition);
        freeze();
    };

    //movedown timer
    timerId = setInterval(() => {
       moveDown();
       //console.log(current);
    }, 500);

    //Click event listener function
    function control (e){
        if(e.keyCode === 37){
            moveLeft();
        } else if(e.keyCode === 39) {
            moveRight();
        } else if(e.keyCode === 38) {
            rotate();
        } else if(e.keyCode === 40) {
            moveDown();
        }
    };

    document.addEventListener('keyup', control);
    
    //for display of next tetromino in mini grid
    let displaySquares = Array.from(document.querySelectorAll('.mini-grid div'));
    //let displayIndex = 0;
    let displayWidth = 4;

    const nextTetromino = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], 
        [1, 2, displayWidth, displayWidth + 1],
        [2, displayWidth + 1, displayWidth + 2, displayWidth + 3], 
        [1, 2, displayWidth + 1, displayWidth + 2], 
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1]
    ];

    function displayShape () {
        //purge the mini grid first
        displaySquares.forEach(element => {element.classList.remove('Tetromino')});
        //set current to next tetrimino
        //console.log(nextTetromino[nextRandom] + "   "+ nextRandom)
        nextTetromino[nextRandom].forEach( index => {
            displaySquares[index].classList.add('Tetromino')
            //displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
          })
    };

















})


