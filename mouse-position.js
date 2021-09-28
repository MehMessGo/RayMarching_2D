function updateMousePosition(event) {
    let rect = canvas.getBoundingClientRect();
    context.canvas.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}

context.canvas.mousePosition = {x: 0, y: 0};