import React from "react";
import reactCanvasImg from "../../../assets/images/codelab/react-particles.png";
import chatBotImg from "../../../assets/images/codelab/hangout-chat-bot-icon.png";
import reactOnRailsImg from "../../../assets/images/codelab/react-on-rails.png";
import audioBuzzLogo from '../../../assets/images/codelab/AudioBuzz-logo.png';
import styles from "./CodeLab.scss";

const CodeLab = () => {
  return (
    <div className={"container-fluid " + styles.CodeLab}>
      <h2>Code Lab</h2>
      <p className="fs-italic fw-lighter mb-4">
        Experiments gone wild
      </p>
      <div className="row">
        {/* AudioBuzz Mobile App */}
        <div className="col-sm-6 mb-5">
          <div className={"card " + styles.Card}>
            <div className={"card-img-top text-center " + styles.CardImg}>
              <img className={styles.AudioBuzzLogo} src={audioBuzzLogo} alt="AudioBuzz" />
            </div>
            <div className="card-body">
              <h5 className="card-title">AudioBuzz</h5>
              <p className="card-text">This is an Android app, built using React Native, that shows a list of top 100 trending music across libraries such as AppleMusic, YouTube, LastFm &amp; Spotify. It uses APIs exposed by the MusicTrends web App (to be renamed as AudioBuzz). Clicking on the listing also allows you to play them on the their respective medium/app.</p>
              <a href="https://github.com/shalomsam/MusicTrendsNative" className="card-link">GitHub</a>
              <a href="https://play.google.com/store/apps/details?id=in.audiobuzz.app" className="card-link">Play Store</a>
            </div>
          </div>
        </div>
        {/* MusicTrends App */}
        <div className="col-sm-6 mb-5">
          <div className={"card " + styles.Card}>
            <div className={"card-img-top text-center " + styles.CardImg + " " + styles.Dark} >
              <i className={"fa fa-music " + styles.MusicTrends }></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">MusicTrends App</h5>
              <p className="card-text">This Application is a web application that shows the end user the top trending music across platforms such as YouTube, AppleMusic, LastFm &amp; Spotify.</p>
              <a href="https://github.com/shalomsam/todo-mvc-react-on-rails" className="card-link">GitHub</a>
              <a href="https://shalomsam.com/musictrends/" className="card-link">Preview</a>
            </div>
          </div>
        </div>
        {/* Todo MVC on ReactOnRails */}
        <div className="col-sm-6 mb-5">
          <div className={"card " + styles.Card}>
            <div className={"card-img-top text-center " + styles.CardImg}>
              <img className={styles.ReactOnRails} src={reactOnRailsImg} alt="Todo MVC on ReactOnRails" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Todo MVC on ReactOnRails</h5>
              <p className="card-text">This application is a simple Todo MVC application built using ShakaCode's ReactOnRails framework.</p>
              <a href="https://github.com/shalomsam/todo-mvc-react-on-rails" className="card-link">GitHub</a>
              <a href="https://afternoon-anchorage-49678.herokuapp.com/" className="card-link">Preview</a>
            </div>
          </div>
        </div>
        {/* Hangout Chat Bot */}
        <div className="col-sm-6 mb-5">
          <div className={"card " + styles.Card}>
            <div className={"card-img-top text-center " + styles.CardImg }>
              <img className={styles.ChatBotImg} src={chatBotImg} alt="react-canvas-js" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Hangout Chat TaskList Bot</h5>
              <p className="card-text">This is a Google Hangout Chat bot to view/manage  tasks in the current chat window. This bot was built using Google Scripts and integrated with Google Cloud.</p>
              <a href="https://github.com/shalomsam/hangouts-tasklist-bot" className="card-link">GitHub</a>
            </div>
          </div>
        </div>
        {/* react-canvas-js */}
        <div className="col-sm-6 mb-5">
          <div className={"card " + styles.Card}>
            <div className={"card-img-top text-center " + styles.CardImg}>
              <img className="img-responsive" height="180" src={reactCanvasImg} alt="react-canvas-js" />
            </div>
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
