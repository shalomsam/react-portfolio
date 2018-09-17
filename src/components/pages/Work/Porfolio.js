import React, { Component } from "react";
import styles from "./Work.scss";
import Work from "./Work";
import PortfolioData from "../../../data/portfolio.json";

export default class Portfolio extends Component {

    state = {
        components: {},
    }

    componentWillMount() {

        PortfolioData.map((work, i) => {
            if (typeof work.desc === "object" && work.desc.hasOwnProperty('path')) {
                
                import(`../../../templates/en/${work.desc.path}`)
                    .then(component => {
                        const components = Object.assign({}, this.state.components);
                        components[i] = component.default();
                        this.setState({ components: components });
                    });

            } else if (typeof work.desc === "object" && !work.desc.hasOwnProperty('path')) {
                throw new Error('if work.desc is an object it must contain property path. Property path missing!')
            }

            return work;
        });
    }

    render () {
        
        const AllWork = PortfolioData.map((work, i) => {
            return (
                <Work key={i} work={work}>{this.state.components[i]}</Work>
            );
        });

        return (
            <div className={"container-fluid  " + styles.Portfolio}>
                <div className="row">
                    <div className="col px-lg-5 py-lg-4">
                        <h2>Portfolio</h2>
                        <p>Projects/Brands I have worked on</p>
                        <div className={styles.PortfolioWrp}>
                            {AllWork}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

