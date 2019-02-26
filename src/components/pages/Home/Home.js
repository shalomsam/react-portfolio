import React from "react";
import Avatar from "../../Avatar/Avatar";
import styles from "./Home.scss";
import {Canvas} from "react-canvas-js";
import ParticleOptions from "../../../data/homeParticleOptions.json";

const home = (props) => {
    return (
        <div className={styles.HomeWrp}>
            <Canvas className={styles.Canvas} options={ParticleOptions} />
            <div className={"container-fluid " + styles.Home}>
                <div className="row">
                    <div className="col">
                        <Avatar />
                        <h1>Hi, I'm Shalom Sam</h1>
                        <h2 className="fw-lighter">LAMP/MEAN FullStack Developer, Architect and UI/UX FrontEnd Engineer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;
