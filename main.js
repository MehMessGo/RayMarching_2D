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


function drawLine(startX, startY, endX, endY, width = 1, color = 'black'){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
}

let context = canvas.getContext('2d');

context.canvas.width  = document.body.clientWidth;
context.canvas.height = document.body.clientHeight;

drawRectangle(
    x = 0, y = 0, 
    width = context.canvas.width, height = context.canvas.height,
    color = '#ecdab9'
);

drawCircle(
    x = context.canvas.width / 2, y = context.canvas.height / 2,
    radius = 40,
    color = '#a47053'
);

drawLine(
    startX = context.canvas.width / 2, startY = context.canvas.height / 2, 
    endX = 100, endY = 10
);