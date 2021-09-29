function drawScene(){
    drawRectangle(
        x = 0, y = 0, 
        width = context.canvas.width, height = context.canvas.height,
        color = '#ecdab9'
    );

    scene.forEach(figure => {
        if (figure.type == 'circle'){
            drawCircle(
                x = figure.x, y = figure.y,
                radius = figure.radius,
                color = '#a47053'
            );
        }
    });

    drawCircle(
        x = context.canvas.width / 2, y = context.canvas.height / 2,
        radius = 20.5,
        color = '#a47053'
    );

    drawLine(
        startX = context.canvas.width / 2, startY = context.canvas.height / 2, 
        endX =  context.canvas.mousePosition.x, endY =  context.canvas.mousePosition.y,
        width = 2,
        color = '#909cac'
    );
}

context.canvas.addEventListener('mousemove', function(event){
    updateMousePosition(event);
    drawScene();
});
drawScene();