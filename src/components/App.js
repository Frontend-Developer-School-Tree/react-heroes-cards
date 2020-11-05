import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import heroes from "../dataHeroes";

function App() {
    return (
        <div className="container">
            <Header />
            {/* quindi avro tre <Hero> */}
            <div className="containerCards">
                {heroes.map((hero) => {
                    const { id, nome, cognome, eta, skill, img } = hero;
                    return (
                        <Hero
                            key={id}
                            nome={nome}
                            cognome={cognome}
                            eta={eta}
                            skill={skill}
                            img={img}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
