import React, { Component } from "react";
import Particles from "./Particles";


export default class Canvas extends Component {
    
    componentDidMount() {
        window.addEventListener('resize', () => {
            if (this.refs.canvas) {
                this.canvasSizing(this.refs.canvas);
            }
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
        window.can = canvas;
        const wWidth = canvas.parentElement.clientWidth;
        const wHeight = canvas.parentElement.clientHeight;
        
        const scale = window.devicePixelRatio;

        canvas.style.width = wWidth + "px";
        canvas.style.height = wHeight + "px";

        canvas.width = scale * wWidth;
        canvas.height = scale * wHeight;
    }

    animate = () => {
        let options = this.props.options;
        const particles = new Particles(this.refs.canvas, options);
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
