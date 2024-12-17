document.addEventListener("DOMContentLoaded", () => {
      const player = document.getElementById("player");
      const opponent = document.getElementById("opponent");
  
      const entities = [
          { element: player, x: 50, y: 50, dx: 2, dy: 2 },
          { element: opponent, x: 300, y: 200, dx: -3, dy: 2 },
      ];
  
      function updateContainerSize() {
          return {
              width: window.innerWidth,
              height: window.innerHeight,
          };
      }
  
      let container = updateContainerSize();
      window.addEventListener("resize", () => {
          container = updateContainerSize();
      });
  
      function bounce() {
          entities.forEach((entity) => {
              const { element } = entity;
              const imageWidth = element.offsetWidth;
              const imageHeight = element.offsetHeight;
  
              entity.x += entity.dx;
              entity.y += entity.dy;
  
              if (entity.x <= 0) {
                  entity.dx = Math.abs(entity.dx);
                  entity.x = 0; 
              } else if (entity.x + imageWidth >= container.width) {
                  entity.dx = -Math.abs(entity.dx); 
                  entity.x = container.width - imageWidth; 
              }
  
              if (entity.y <= 0) {
                  entity.dy = Math.abs(entity.dy); 
                  entity.y = 0; 
              } else if (entity.y + imageHeight >= container.height) {
                  entity.dy = -Math.abs(entity.dy); 
                  entity.y = container.height - imageHeight; 
              }
       
              element.style.transform = `translate(${entity.x}px, ${entity.y}px)`;
          });
  
          requestAnimationFrame(bounce);
      }
  
      bounce();
  });
  