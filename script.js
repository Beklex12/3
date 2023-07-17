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
  
    function getRandomAngle() {
      return Math.random() * 2 * Math.PI;
    }
  
    function getRandomSpeed() {
      return 1 + Math.random() * 3; // Adjust the speed range as needed
    }
  
    let posX = Math.random() * (screenWidth - ballWidth);
    let posY = Math.random() * (screenHeight - ballHeight);
  
    let angle = getRandomAngle();
    let speed = getRandomSpeed();
  
    function updatePosition() {
      posX += speed * Math.cos(angle);
      posY += speed * Math.sin(angle);
  
      // Wrap the balls around the screen edges
      if (posX > screenWidth) posX = -ballWidth;
      if (posX < -ballWidth) posX = screenWidth;
      if (posY > screenHeight) posY = -ballHeight;
      if (posY < -ballHeight) posY = screenHeight;
  
      ball.style.left = `${posX}px`;
      ball.style.top = `${posY}px`;
  
      requestAnimationFrame(updatePosition);
    }
  
    updatePosition();
  }
  