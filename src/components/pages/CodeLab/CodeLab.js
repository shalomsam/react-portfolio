import React from "react";
import img from "../../../assets/images/codelab/react-particles.png";

const CodeLab = () => {
    return (
        <div className="container-fluid">
            <h2>Code Lab</h2>
            <p className="fs-italic fw-lighter mb-4">
                Experiments gone wild
            </p>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <img className="card-img-top img-responsive" height="180" src={img} alt="react-canvas-js" />
                        <div className="card-body">
                            <h5 className="card-title">react-canvas-js</h5>
                            <p className="card-text">Awesome HTML canvas animation with React. Currently supports for a beautiful customizable particle animation. Moving towards a holistic canvas animation support.</p>
                            <a href="https://github.com/shalomsam/react-canvas-js" className="card-link">GitHub</a>
                            <a href="https://www.npmjs.com/package/react-canvas-js" className="card-link">NPM</a>
                            <a href="https://shalomsam.github.io/react-canvas-js/" className="card-link">Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodeLab;
