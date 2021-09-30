function drawRectangle(x, y, width, height, color = 'black', borderWidth = 0, borderColor = 'transparent'){
    context.fillStyle = color;
    context.fillRect(x, y, width, height);

    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.strokeRect(x, y, width, height);
}


function drawCircle(x, y, radius, color = 'black', borderWidth = 0, borderColor = 'transparent'){
    if (radius > 0) {
        context.beginPath();

        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();

        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;
        context.stroke();
    }
}


function drawLine(startX, startY, endX, endY, width = 1, color = 'black'){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
}