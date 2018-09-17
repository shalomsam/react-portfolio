import Particle from "./Particle";
import { hasProperty, isObject } from "../../utils";

export default class Particles {

    /**
     * @param canvas The html canvas element
     * 
     * Example Particle Options:
     * @param options = {
     *   maxParticles: 0,
     *   colors: ['red', 'green', '#ff1000'],
     *   shapes: ['square', 'circle', 'rectangle', { type: 'image', src: '/path/to/image' }],
     *   size: 0.00,
     *   minSize: 0.00,
     *   maxSize: 0.00,
     *   velocity: 0.00,
     *   minVelocity: 0.00,
     *   maxVelocity: 0.00,
     *   alpha: 0.7    
     * }
     * 
     */
    constructor(canvas, options) {

        const {
            maxParticles,
            colors,
            shapes,
            alpha,
            randomLoop,
        } = options;

        this.particles = [];
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.particleCount = maxParticles || 100;
        this.colors = (Array.isArray(colors) ? colors : [colors]);

        this.shapes = Array.isArray(shapes) ? shapes : [shapes] ||
            ["circle", "square", "rectangle"];

        this.alpha = alpha || 0.5;
        this.particleOptions = options;

        this.randomLoop = randomLoop || true;

        if (maxParticles === this.shapes.length || !this.randomLoop) {
            this.createLimitedParticles()
        } else {
            this.createRandomParticles();
        }
    }

    createLimitedParticles = () => {
        this.particles = this.shapes.map((item) => {

            this.particleOptions.shape = item;
            this.particleOptions.color = this.colors[Math.floor(Math.random() * this.colors.length)] || undefined;

            if (hasProperty("type", item) && item.type === "image") {
                this.particleOptions.shape = typeof this.particleOptions.size === "object" ? "rectangle" : "square";
                this.particleOptions.image = item;
            } else if (hasProperty("type", item)) {
                throw new Error("Shape object must have a property 'type'.");
            }

            if (hasProperty("color", item)) {
                this.particleOptions.color = item.color;
            }

            if (hasProperty("size", item) && isObject(item.size)) {
                this.particleOptions.size = item.size;
            }

            const particle = new Particle(this.canvas, this.particleOptions);
            particle.draw();
            return particle;
        });
    }

    createRandomParticles = () => {
        for (let i = 1; i <= this.particleCount; i++) {

            this.particleOptions.color = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.particleOptions.shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];


            if (hasProperty("type", this.particleOptions.shape)) {
                let shape = Object.assign({}, this.particleOptions.shape);

                if (shape.type === "image") {
                    this.particleOptions.shape = typeof this.particleOptions.size === "object" ? "rectangle" : "square";
                    this.particleOptions.image = shape;
                } else {
                    this.particleOptions.shape = shape.type;
                }

                if (hasProperty("color", shape)) {
                    this.particleOptions.color = shape.color;
                }
    
                if (hasProperty("size", shape) && isObject(shape.size)) {
                    this.particleOptions.size = shape.size;
                }
            } else if (isObject(this.particleOptions.shape)) {
                throw new Error("Shape object must have a property 'type'.");
            }

            let particle = new Particle(this.canvas, this.particleOptions);

            if (i !== 1) {
                this.collisionCorrection(particle, this.particles[i - 2]);
            }

            this.particles.push(particle);
            this.draw(particle);
        }
    }

    collisionCorrection = (newParticle, prevParticle) => {

        const padding = 5;
        const totalWidth = newParticle.getSize('x') + prevParticle.getSize('x');
        const distx = newParticle.x > prevParticle.x ?
            (prevParticle.x + prevParticle.getSize('x')) - newParticle.x :
            (newParticle.x + newParticle.getSize('x')) - prevParticle.x;

        if (distx < totalWidth) {
            let newX;
            const spaceToRight = this.canvas.width - (prevParticle.x + prevParticle.width);
            // const spaceToLeft = newParticle.x;
            if ((newParticle.width + (2 * padding)) < spaceToRight) {
                // move to right
                if (newParticle.x > prevParticle.x) {
                    newX = (prevParticle.x + prevParticle.width) - newParticle.x + padding;
                } else {
                    newX = (prevParticle.x + prevParticle.width) + padding;
                }
            } else {
                // move to left
                newX = prevParticle.x - (newParticle.width + padding);
            }

            newParticle.x = newX;
        }

        const totalHeight = newParticle.getSize('y') + prevParticle.getSize('y');
        const disty = newParticle.y > prevParticle.y ?
            (prevParticle.y + prevParticle.getSize('y')) - newParticle.y :
            (newParticle.y + newParticle.getSize('y')) - prevParticle.y

        if (disty < totalHeight) {
            let newY;
            const spaceToBottom = this.canvas.height - (prevParticle.y + prevParticle.height);
            // const spaceToLeft = newParticle.x;
            if ((newParticle.height + (2 * padding)) < spaceToBottom) {
                // move to right
                if (newParticle.y > prevParticle.y) {
                    newY = (prevParticle.y + prevParticle.height) - newParticle.y + padding;
                } else {
                    newY = (prevParticle.y + prevParticle.height) + padding;
                }
            } else {
                // move to left
                newY = prevParticle.y - (newParticle.height + padding);
            }

            newParticle.y = newY;
        }

        return newParticle;
    }

    getRandomCoordinate = (axis, from, to, fixed) => {
        from = from || 0;
        fixed = fixed || 2;

        if (axis === "x") {
            to = to || this.canvas.width;
        } else if (axis === "y") {
            to = to || this.canvas.height;
        } else {
            throw new Error("Illegal Axis!");
        }

        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }

    draw = (particle) => {
        particle.draw();
    }

    animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = this.alpha;

        this.particles.map((particle) => {

            const test = [true, false];
            if (test[Math.floor(Math.random() * test.length)]) {
                particle.x += particle.vx;
            } else {
                particle.y += particle.vy;
            }

            let pWidthMin = particle.shape === 'circle' ? particle.x - particle.getSize('x') : particle.x;
            const pWidthMax = particle.x + particle.getSize('x');
            if (pWidthMin < 0 || pWidthMax > this.canvas.width) {

                if (pWidthMin < 0 && particle.shape === 'circle') {
                    particle.x = particle.getSize('x');
                } else if (pWidthMin < 0) {
                    particle.x = 0;
                }
                particle.vx = -particle.vx;
            }

            let pHeightMin = particle.shape === 'circle' ? particle.y - particle.getSize('y') : particle.y;
            const pHeightMax = particle.y + particle.getSize('y');
            if (pHeightMin < 0 || pHeightMax > this.canvas.height) {

                if (pHeightMin < 0 && particle.shape === 'circle') {
                    particle.y = particle.getSize('y');
                } else if (pHeightMin < 0) {
                    particle.y = 0;
                }
                particle.vy = -particle.vy;
            }

            this.draw(particle);
            this.ctx.restore();

            return particle;
        });
    }
}