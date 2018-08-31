import React from "react";
import styles from "./About.scss";

const home = (props) => {
    return (
        <div className={"container-fluid " + styles.About}>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-7 px-lg-5 py-lg-4">
                    <h2>A Passion driven full stack developer with an eye for design</h2>
                    <p className="fw-lighter aboutWrp">
                        Hi, I'm a full stack developer based out of Bombay(India) with LAMP and 
                        MEAN stack development experience for over 8 years. I have maintained, 
                        developed and launched multiple projects from scratch. 
                        <br/><br/>
                        I am driven by my passion for coding and web development. And this never
                        restricts me to a language or tool. I am always trying out / learning new 
                        language(s) and tools that facilitate better development.
                        <br/><br/>
                        
                        <br/>
                        
                    </p>
                </div>
            </div>
        </div>
    );
}

export default home;
