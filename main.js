function drawRectangle(x, y, width, height, color = 'black', borderWidth = 0, borderColor = 'transparent'){
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.strokeRect(x, y, width, height);
}

function drawCircle(x, y, radius, color = 'black', borderWidth = 0, borderColor = 'transparent'){
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.stroke();
}

let context = canvas.getContext('2d');

drawRectangle(
    x = 0, y = 0, 
    width = context.canvas.width, height = context.canvas.height,
    color = '#ecdab9'
);

drawCircle(70, 70, 10, 'yellow');
