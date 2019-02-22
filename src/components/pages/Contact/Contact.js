import React from "react";
import styles from "./Contact.scss";

const Contact = () => {
    return (
        <div className={"container-fluid " + styles.Contact}>
            <div className="row">
                <div className="col px-lg-5 py-lg-4">
                    <h2>Get In Touch</h2>
                    <div className={"mt-4 " + styles.ContactWrp}>
                        <p>Hi, I'm actively looking out for a remote working opportunity. If you are interested in hiring me, or if you would just like to just chat about some crazy ideas, feel free to get in touch on one of the social media links given below.</p>
                        <br/>
                        <div className={"col px-lg-5 py-lg-4 text-center " + styles.SocialWrp}>
                            <a className="fas fa-envelope" href="mailto:shalom.k.sam@gmail.in">
                                <span className="sr-only">email</span>
                            </a>
                            <a className="fab fa-facebook-f" href="http://www.facebook.com/shalom.sam" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">facebook</span>
                            </a>
                            {/* <a className="fab fa-twitter" href="http://www.twitter.com/Shalom_Sam" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">twitter</span>
                            </a> */}
                            <a className="fab fa-linkedin-in" href="https://www.linkedin.com/profile/view?id=55968477" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">linkedin</span>
                            </a>
                            <a className="fab fa-angellist" href="https://angel.co/shalom-sam" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">angellist</span>
                            </a>
                            <a className="fab fa-github" href="https://github.com/shalomsam" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">github</span>
                            </a>
                            <a class="fab fa-stack-overflow" href="https://stackoverflow.com/users/890391/shalomsam?tab=profile" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">stackoverflow</span>
                            </a>
                            <a class="fab fa-hackerrank" href="https://www.hackerrank.com/shalomsam?hr_r=1" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">hackerrank</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
