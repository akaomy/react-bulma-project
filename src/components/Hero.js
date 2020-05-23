import React from "react";

function Hero(props) {
    const displayHeroText = () => {
        props.action('hero btn');
    }
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Lorem ipsum
                    </h1>
                    <h2 className="subtitle">
                        From Wikipedia, the free encyclopedia
                    </h2>
                    <button
                        onClick={displayHeroText}
                        className="button">
                        Hero Button
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;