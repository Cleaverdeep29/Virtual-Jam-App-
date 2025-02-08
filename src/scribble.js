class Scribble {
    constructor() {
        this.canvas = document.getElementById('drawingCanvas');
        this.context = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;
        this.lineWidth = 5;
        this.color = 'black';
        this.addEventListeners();
    }

    addEventListeners() {
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());

        // Add clear canvas button functionality
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear Canvas';
        clearButton.addEventListener('click', () => this.clearCanvas());
        document.body.appendChild(clearButton);
    }

    startDrawing(e) {
        this.isDrawing = true;
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }

    draw(e) {
        if (!this.isDrawing) return;
        this.context.beginPath();
        this.context.moveTo(this.lastX, this.lastY);
        this.context.lineTo(e.offsetX, e.offsetY);
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.lineWidth;
        this.context.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }

    stopDrawing() {
        this.isDrawing = false;
        this.context.closePath();
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Scribble();
});
