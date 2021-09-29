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

function get_distance_between(point, figure){
    if (figure.type == 'circle'){
        return Math.sqrt((figure.x - point.x)**2 + (figure.y - point.y)**2) - figure.radius;
    }
}

function nearest_distance_from_point(point){
    nearest_distance = context.canvas.width + context.canvas.height;

    scene.forEach(figure => {
        current_distance = get_distance_between(point, figure);
        if (current_distance < nearest_distance)
            nearest_distance = current_distance;
    });

    return nearest_distance;
}

let scene = []
createScene()