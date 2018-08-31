export default class Particle {
    constructor(canvas, shape, color, options) {
        const {
            size,
            maxSize,
            minSize,
            minVelocity,
            maxVelocity,
            x,
            y,
            vx,
            vy,
            ttl,
        } = options;

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.shape = shape || "circle";
        this.color = color || "#F20000";
        this.maxSize = maxSize || 20;
        this.minSize = minSize || 10;
        this.size = this.parseSize(size) || this.genRandomSize();
        this.minVelocity = minVelocity || 0.01;
        this.maxVelocity = maxVelocity || 0.09;
        this.x = x || this.getRandomCoordinate('x');
        this.y = y || this.getRandomCoordinate('y');
        this.vx = vx || this.getRandomFloat(this.minVelocity, this.maxVelocity);
        this.vy = vy || this.getRandomFloat(this.minVelocity, this.maxVelocity);
        this.ttl = ttl || undefined;
    }

    parseSize = (size) => {
        let trueSize = size;
        if (typeof size !== 'object') {
            trueSize = this.shape === 'circle' ? { radius: size } : { width: size, height: size };
        }
        return trueSize;
    }

    draw = (x = this.x, y = this.y, size = this.size) => {
        const posX = this.x = x;
        const posY = this.y = y;
        const rSize = this.size = size;

        switch (this.shape) {
            case "rectangle":
            case "rect":
            case "square":
                let { width, height } = rSize;
                if (this.shape === "square") {
                    height = width;
                }
                this.drawRectangle(posX, posY, width, height);
                break;

            case "circle":
            default:
                const { radius } = rSize;
                this.drawCircle(posX, posY, radius);
                break;
        }

    }

    drawCircle = (x, y, radius) => {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    drawRectangle = (x, y, width, height) => {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, y, width, height);
    }

    getRandomCoordinate = (axis, from, to, fixed) => {
        from = from || 0;
        fixed = fixed || 2;

        if (axis === "x") {
            // canvas width - size to keep particles within canvas boundary
            to = to || this.canvas.width - this.getSize('x');
        } else if (axis === "y") {
            // canvas width - size to keep particles within canvas boundary
            to = to || this.canvas.height - this.getSize('y');
        } else {
            throw new Error("Illegal Axis!");
        }

        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }

    getSize = (axis) => {
        if (axis === 'x') {
            return this.size.width || this.size.radius;
        } else if (axis === 'y') {
            return this.size.height || this.size.radius;
        }
    }

    genRandomSize = () => {
        let size;
        if (this.shape === "circle") {
            size = { radius: this.getRandomInt(this.minSize, this.maxSize) };
        } else {
            size = {
                width: this.getRandomInt(this.minSize, this.maxSize),
                height: this.getRandomInt(this.minSize, this.maxSize)
            };
        }

        return size;
    }

    getRandomFloat = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
