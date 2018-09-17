import React from "react";
import styles from "./About.scss";
import { importAll } from "../../../utils";

const images = importAll(require.context('../../../assets/images/photos', false, /\.(png|jpe?g|svg)$/));

const about = (props) => {

    const index = Math.floor(Math.random() * images.length);
    const imageSrc = images[index];
    const indexClass = 'img-' + (index + 1);
    const imageClass = styles.Img + ' ' + styles[indexClass];

    return (
        <div className={"container-fluid " + styles.About}>
            <div className="row">
                <div className={"col-12 col-lg-6 col-xl-7 " + styles.Mask}>
                    <div className={imageClass} style={{backgroundImage: 'url('+ imageSrc +')'}}></div>
                </div>
                <div className="col-12 col-lg-6 col-xl-7 px-lg-5 py-lg-4">
                    <h2>A Passion driven full stack developer with an eye for design</h2>
                    <p className="fw-lighter">
                        Hi, I'm a full stack developer based out of Bombay(India) with LAMP and MEAN stack development experience for over 8 years. I have maintained, developed and launched multiple projects from scratch, including providing UI/UX inputs, ideating architecture and building complete end-to-end workflows in grunt and automated integration tools such as Bamboo (by Atlassian).
                        <br/><br/>
                        I am driven by my passion for coding and web development. And this never restricts me to a single language or tool. I am always trying out/learning new languages and tools that facilitate better development. And that passion has driven me to start multiple small projects in my free time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default about;
