import { hasProperty } from "../../utils";

export default class Particle {
    constructor(canvas, options) {
        const {
            shape,
            color,
            image,
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
            debugOptions
        } = options;

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.shape = shape || "circle";
        this.color = color || "#F20000";
        this.maxSize = parseFloat(maxSize) || 20;
        this.minSize = parseFloat(minSize) || 10;
        this.size = this.parseSize(size) || this.genRandomSize();
        this.minVelocity = parseFloat(minVelocity) || 0.01;
        this.maxVelocity = parseFloat(maxVelocity) || 0.09;
        this.x = x || this.getRandomCoordinate('x');
        this.y = y || this.getRandomCoordinate('y');
        this.vx = vx || this.getRandomFloat(this.minVelocity, this.maxVelocity);
        this.vy = vy || this.getRandomFloat(this.minVelocity, this.maxVelocity);
        this.ttl = ttl || undefined;
        this.imageOptions = image || undefined;
        this.image = new Image();
        this.debug = debugOptions || { enabled: false };

        // Errors
        if (image !== undefined && !hasProperty("src", image)) {
            throw new Error("Image object must have 'src' property.");
        }

        if (!(hasProperty("width", this.size) && hasProperty("height", this.size)) && !hasProperty("radius", this.size)) {
            throw new Error("Size object must have either 'width' AND 'height' OR 'radius' property.");
        }

        if (this.debug.enabled) {
            if (hasProperty('attachAllParticles', this.debug) && this.debug.attachAllParticles) {
                window.Particles = window.Particles || [];
                window.Particles.push(Particle);
            }
            if (hasProperty('attachSingleParticles', this.debug) && window.Particle ) {
                window.Particle = this;
            }
        }
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


        if (this.imageOptions) {
            this.image.src = this.imageOptions.src;
            this.ctx.drawImage(this.image, this.x, this.y, this.getSize('x'), this.getSize('y'));

        } else {

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

    drawImage = (...args) => {
        console.log(args);
        this.ctx.drawImage.apply(this.ctx, args);
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
