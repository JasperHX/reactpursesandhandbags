import React from "react";

function Tile({image, title, children}) {
    return (
        <section className="section">
            {image && <img src={image} alt="brand"/>}
            <h2 className="h2">{title}</h2>
            {/*<p className="section.p"> {paragraph}</p>*/}
            <p className="section.p">{children}</p>
        </section>
    );
}

export default Tile;

// children ipv paragraph erin zetten op dezelfde manier
// waarde gemaakt met paragraph value en deze kan je maar 1 keer aanroepen
// props werk je mee wanneer je maar 1 waarde hebt en deze vast staat
// children valt altijd binnen een component en is een gesloten element
// alles wat property's zijn apart benoemen in het component en niet als gesloten element
// regel 6: && true or false. Na false stop het lezen van js. Bij true gaat hij door en return hij de image
// regel 8: greyed out! Hier return je dus een aparte property aan in dit geval p met paragraph.
// Maar als je met children werk
// Lorem.