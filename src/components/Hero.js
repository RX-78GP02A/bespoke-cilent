import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { Button } from "./Button";

function Hero({
  mainBackground,
  mainHeader,
  mainText,
  mainTextDescription,
  headline,
  description,
  hasButton,
  buttonLabel,
  img,
  alt
}) {
  function renderButton() {
    return hasButton ? (
      <Link to="/Recipes">
        <Button buttonSize="btn--wide" buttonColor="blue">
          {buttonLabel}
        </Button>
      </Link>
    ) : (
      ""
    );
  }
  return (
    <>
      <div
        className={mainBackground ? "hero_section" : "hero_section background"}
      >
        <div className="container">
          <div
            className="row hero_row"
            style={{
              display: "flex"
            }}
          >
            <div className="column">
              <div className="hero_text_wrapper">
                <div className="top-line">{mainHeader}</div>
                <h1 className={mainText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    mainTextDescription
                      ? "hero_subtitle"
                      : "hero_subtitle dark"
                  }
                >
                  {description}
                </p>
                {renderButton()}
              </div>
            </div>
            <div className="column">
              <div className="hero_img_wrapper">
                <img src={img} alt={alt} className="hero_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
