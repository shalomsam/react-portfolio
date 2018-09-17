import React, { Component } from "react";
import styles from "./Work.scss";

export default class Work extends Component {

    state = {
        subComponents: {}
    }

    render() {

        const tags = this.props.work.tags.map((tag, i) => {
            return (
                <span key={i} className={"badge badge-pill badge-primary mx-1 " + styles.Tag}>
                    {tag}
                </span>
            );
        });

        const links = this.props.work.links.map((link, i) => {
            link.className = link.className + " btn btn-sm btn-primary mx-1";
            link.key = i;
            return <a {...link}>{link.text}</a>;
        });

        const gitlinks = this.props.work.gitLinks.map((gitLink, i) => {
            gitLink.className = gitLink.className + " btn btn-sm btn-primary mx-1";
            gitLink.key = i;
            return <a {...gitLink}>{gitLink.text}</a>;
        });

        return (
            <div className={styles.Work}>
                <h4>{this.props.work.title}</h4>
                <div className={styles.Tags}>{tags}</div>
                <div className={styles.LinksWrp}>
                    <span className={styles.Links}>{links}</span>
                    <span className={styles.GitLinks}>{gitlinks}</span>
                </div>
                <div className={styles.Description}>
                    {this.props.children || "...Loading..."}
                </div>
            </div>
        )
    }
}

