const gameArea = document.getElementById('gameArea');
const ball = document.getElementById('ball');
const paddleA = document.getElementById('paddleA');
const paddleB = document.getElementById('paddleB');

let ballDirection = { x: 2, y: 2 };

function moveBall() {
    let ballPos = ball.getBoundingClientRect();
    let gameAreaPos = gameArea.getBoundingClientRect();
    let paddleAPos = paddleA.getBoundingClientRect();
    let paddleBPos = paddleB.getBoundingClientRect();

    // Bounce off top and bottom walls
    if (ballPos.top <= gameAreaPos.top || ballPos.bottom >= gameAreaPos.bottom) {
        ballDirection.y *= -1;
    }

    // Bounce off paddles
    if ((ballPos.left <= paddleAPos.right && ballPos.top >= paddleAPos.top && ballPos.bottom <= paddleAPos.bottom) || 
        (ballPos.right >= paddleBPos.left && ballPos.top >= paddleBPos.top && ballPos.bottom <= paddleBPos.bottom)) {
        ballDirection.x *= -1;
    }

    ball.style.left = ballPos.left + ballDirection.x + 'px';
    ball.style.top = ballPos.top + ballDirection.y + 'px';

    requestAnimationFrame(moveBall);
}

moveBall();
