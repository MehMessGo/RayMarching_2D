function createScene(){
    for (let i = 0; i < 10; i++) {
        scene.push({
            type: 'circle',
            x: Math.random()*context.canvas.width,
            y: Math.random()*context.canvas.height,
            radius: Math.random()*35+5,   
        })

        scene.push({
            type: 'rectangle',
            x: Math.random()*context.canvas.width,
            y: Math.random()*context.canvas.height,
            sizeX: Math.random()*35+5,
            sizeY: Math.random()*35+5,
        })
    }
}

function getDistanceBetween(point, figure){
    if (figure.type == 'circle'){
        return Math.sqrt((figure.x - point.x)**2 + (figure.y - point.y)**2) - figure.radius;
    }
    if (figure.type == 'rectangle'){ 
        let d = {
            x: Math.abs(point.x - figure.x - figure.sizeX/2) - figure.sizeX/2,
            y: Math.abs(point.y - figure.y - figure.sizeY/2) - figure.sizeY/2
        };
        return Math.sqrt(Math.max(d.x, 0)**2 + Math.max(d.y, 0)**2) + Math.min(Math.max(d.x, d.y), 0);
    }
}

function nearestDistanceFromPoint(point){
    nearestDistance = context.canvas.width + context.canvas.height;

    scene.forEach(figure => {
        currentDistance = getDistanceBetween(point, figure);
        if (currentDistance < nearestDistance)
            nearestDistance = currentDistance;
    });

    return nearestDistance;
}

let scene = []
createScene()