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
                        Interactive Elements
                    </h1>
                    <h2 className="subtitle">
                        This is the page where I showcase interactive web elements
                    </h2>
                    <button
                        onClick={displayHeroText}
                        className="button">
                        Show me
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;