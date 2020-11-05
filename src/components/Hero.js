import React from "react";

const langs = ["HTML", "css", "js Es5", "js Es6", "React"];

function Hero(props) {
    return (
        <div className="cardHero">
            <img src={props.img} alt="hero img" />
            <p>{langs.join(" ")}</p>
            <h2>
                Io {props.nome} {props.cognome} ho {props.eta} anni, conosco
                molto bene {props.skill}
            </h2>
        </div>
    );
}

export default Hero;
