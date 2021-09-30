
function vectorNormalization(vector){
    let length = Math.sqrt(vector.x*vector.x + vector.y*vector.y)

    return {
        x: vector.x / length,
        y: vector.y / length,
    }
}

function raymarch(point, direction){
    direction = vectorNormalization(direction);
    startPoint = point;

    for (let index = 0; index < 30; index++) {
        // Отрисовка точки, для которой ищется ближайшее расстояние
        drawCircle(
            position = point,
            radius = 4,
            color = 'black',
        );

        // Поиск ближайшего расстояния для этой точки
        nearest_distance = nearestDistanceFromPoint(point);

        // Отрисовка окружности, 
        // показывающей расстояние от точки до ближайшего объекта
        drawCircle(
            position = point,
            radius = nearest_distance,
            color = 'transparent',
            borderWidth = 3,
            borderColor = '#cec3c8'
        );

        // Откладывание новой точки, 
        // вдоль направление на полученное расстояние (до ближайшего объекта)
        point = {
            x: point.x + direction.x*nearest_distance,
            y: point.y + direction.y*nearest_distance,
        }

        // Если луч вышел за границы экрана остановить raymarching
        if (point.x > context.canvas.width || point.x < 0 ||
            point.y > context.canvas.height || point.y < 0){
                break;
        }
    }

    // Отрисовка линни от начальной точки, до конечной
    drawLine(
        startPosition = startPoint, 
        endPosition =  point,
        width = 2,
        color = '#909cac'
    );
}