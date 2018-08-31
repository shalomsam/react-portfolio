import React, { Component } from "react";
import Particles from "./Particles";
import ParticleOptions from "./particleOptions.json";

export default class Canvas extends Component {
    
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.canvasSizing(this.refs.canvas);
        });

        this.canvasSizing(this.refs.canvas);
        requestAnimationFrame(this.animate);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {
            this.canvasSizing(this.refs.canvas);
        });
    }

    canvasSizing = (canvas) => {
        const wWidth = this.refs.canvas.parentElement.clientWidth;
        const wHeight = this.refs.canvas.parentElement.clientHeight;
        const scale = window.devicePixelRatio;

        window.testCanvas = this.refs.canvas;

        canvas.style.width = wWidth + "px";
        canvas.style.height = wHeight + "px";

        canvas.width = scale * wWidth;
        canvas.height = scale * wHeight;
    }

    animate = () => {
        const particles = new Particles(this.refs.canvas, ParticleOptions);
        this.interval = setInterval(() => {
            particles.animate();
        });
    };

    render() {
        return (
            <canvas className={this.props.className} ref="canvas" />
        );
    }

}
