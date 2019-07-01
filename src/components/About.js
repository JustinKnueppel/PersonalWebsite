import React from "react";

export default class About extends React.Component {
    componentDidMount() {
        document.title = "Justin Knueppel | About";
    }
    render() {
        return (
            <div className="content">
                <h3>Education</h3>
                <p>
                    Hi, my name is Justin Knueppel. I am a rising junior at the
                    Ohio State University studying Data Analytics. Currently, I
                    am a claims analytics intern for Nationwide Insurance, have
                    have held this position since the beginning of 2019.
                </p>
                <p>
                    I began programming in high school by learning Java to
                    create Minecraft mods. Since then, I have taken courses with
                    Ohio State that teach software engineering principals, data
                    structures and algorithms, discrete mathematics and more.
                </p>
                <h3>Hobbies</h3>
                <p>
                    All of my life I have been around and involved in music.
                    Singing from middle school to the Men's Glee Club at Ohio
                    State, I have had many valuable opportunities. I was
                    fortunate enough to tour Ireland, work with Dr. Craig Jessop
                    - former director of the Mormon Tabernacle choir, and even
                    sing at Carnegie Hall.
                </p>
                <p>
                    Naturally following my love for music, I also have a love
                    for nice headphones. I currently am enjoying my{" "}
                    <a href="https://majorhifi.com/etymotic-hf5-noise-isolating-earphones-review/">
                        Etymotic Research hf5
                    </a>{" "}
                    IEMs and{" "}
                    <a href="https://majorhifi.com/sennheiser-hd-579-review/">
                        Sennheiser HD 579
                    </a>{" "}
                    open backs. I love listening to music and having high
                    quality headphones truly does make a difference!
                </p>
                <p>
                    Additionally, I have been building computers for the past 5
                    years. My current build includes a{" "}
                    <a href="https://www.amd.com/en/products/cpu/amd-ryzen-5-2600x">
                        Ryzen 5 2600x
                    </a>
                    ,{" "}
                    <a href="https://www.amd.com/en/products/graphics/radeon-rx-580">
                        RX 580
                    </a>
                    , and of course my{" "}
                    <a href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&p=4164">
                        Vortex Cypher
                    </a>{" "}
                    65% keyboard with Cherry MX Browns and{" "}
                    <a href="https://www.amazon.com/Qisan-Mechanical-Keyboard-Backlight-Magicforce/dp/B01HHTFSIK">
                        Qisan Magicforce
                    </a>{" "}
                    full sized keyboard with gatreon reds.
                </p>
            </div>
        );
    }
}
