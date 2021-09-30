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

function getDistanceBetween(point, figure){
    if (figure.type == 'circle'){
        return Math.sqrt((figure.x - point.x)**2 + (figure.y - point.y)**2) - figure.radius;
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