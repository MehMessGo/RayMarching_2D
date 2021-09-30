function drawScene(){
    drawRectangle(
        {x: 0, y: 0}, 
        width = context.canvas.width, height = context.canvas.height,
        color = '#ecdab9'
    );

    scene.forEach(figure => {
        if (figure.type == 'circle'){
            drawCircle(
                {x: figure.x, y: figure.y},
                radius = figure.radius,
                color = '#a47053'
            );
        }
        if (figure.type == 'rectangle'){
            drawRectangle(
                {x: figure.x, y: figure.y},
                width = figure.sizeX, height = figure.sizeY,
                color = '#a47053'
            );
        }
    });

    raymarch(
        {
            x: context.canvas.width / 2,
            y: context.canvas.height / 2
        },
        {
            x: context.canvas.mousePosition.x - context.canvas.width / 2,
            y: context.canvas.mousePosition.y - context.canvas.height / 2
        }
    )
}

context.canvas.addEventListener('mousemove', function(event){
    updateMousePosition(event);
    drawScene();
});
drawScene();