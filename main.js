let context = canvas.getContext('2d');
context.canvas.width  = document.body.clientWidth;
context.canvas.height = document.body.clientHeight;

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

function createScene(){
    for (let i = 0; i < Math.floor(Math.random() * 20 + 5); i++) {
        scene.push({
            type: 'circle',
            x: Math.random()*context.canvas.width,
            y: Math.random()*context.canvas.height,
            radius: Math.random()*35+5,   
        })
    }
}

let scene = []
createScene()

context.canvas.addEventListener('mousemove', function(event){
    updateMousePosition(event);
    drawScene();
});
drawScene();