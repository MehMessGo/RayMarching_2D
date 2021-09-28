let context = canvas.getContext('2d');

function updateMousePosition(event) {
    let rect = canvas.getBoundingClientRect();
    context.canvas.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}


function drawScene(){
    drawRectangle(
        x = 0, y = 0, 
        width = context.canvas.width, height = context.canvas.height,
        color = '#ecdab9'
    );

    drawCircle(
        x = context.canvas.width / 2, y = context.canvas.height / 2,
        radius = 40,
        color = '#a47053'
    );

    drawLine(
        startX = context.canvas.width / 2, startY = context.canvas.height / 2, 
        endX =  context.canvas.mousePosition.x, endY =  context.canvas.mousePosition.y
    );
}


context.canvas.addEventListener('mousemove', function(event){
    updateMousePosition(event);
    drawScene();
});


context.canvas.width  = document.body.clientWidth;
context.canvas.height = document.body.clientHeight;

context.canvas.mousePosition = {x: 0, y: 0};
drawScene();