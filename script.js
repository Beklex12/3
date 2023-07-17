document.addEventListener("DOMContentLoaded", () => {
  const balls = document.querySelectorAll(".ball");

  balls.forEach(ball => {
    moveBall(ball);
  });
});

function moveBall(ball) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  let posX = Math.random() * (screenWidth - ballWidth);
  let posY = Math.random() * (screenHeight - ballHeight);
  let velX = Math.random() * 4 - 2; // Random horizontal velocity between -2 and 2
  let velY = Math.random() * 4 - 2; // Random vertical velocity between -2 and 2

  function updatePosition() {
    posX += velX;
    posY += velY;

    // Bounce off the screen edges
    if (posX + ballWidth > screenWidth || posX < 0) {
      velX *= -1;
    }
    if (posY + ballHeight > screenHeight || posY < 0) {
      velY *= -1;
    }

    ball.style.left = `${posX}px`;
    ball.style.top = `${posY}px`;

    requestAnimationFrame(updatePosition);
  }

  updatePosition();
}
