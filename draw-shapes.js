function drawRectangle(position, width, height, color = 'black', borderWidth = 0, borderColor = 'transparent'){
    context.fillStyle = color;
    context.fillRect(position.x, position.y, width, height);

    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.strokeRect(position.x, position.y, width, height);
}


function drawCircle(position, radius, color = 'black', borderWidth = 0, borderColor = 'transparent'){
    if (radius > 0) {
        context.beginPath();

        context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();

        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;
        context.stroke();
    }
}


function drawLine(startPosition, endPosition, width = 1, color = 'black'){
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
    context.lineTo(endPosition.x, endPosition.y);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
}