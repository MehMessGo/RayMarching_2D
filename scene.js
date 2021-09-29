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