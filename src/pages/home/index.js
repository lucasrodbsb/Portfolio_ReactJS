import React from 'react';
import './style.css';
import Tilt from 'react-parallax-tilt';

const Home = () => {

    return (
        <main>
            <section className="thumb">
                <div className="content-thumb">
                    <Tilt tiltReverse="true" scale="1.1" id="foto" className="image-thumb"></Tilt>
                    <div className="text-thumb">
                        <h1 id="nome">Lucas Rodrigues</h1>
                        <span id="txt">Front-End Developer and UI/UX Designer</span>
                        <div className="media-icons">
                            <a href="https://www.linkedin.com/in/lucas-rocha-515358223" target="_blank" title="Linkedin" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://wa.me/5561982789687" target="_blank" title="Whatsapp" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://instagram.com/gh0st_l?igshid=YmMyMTA2M2Y=" target="_blank" title="Instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://github.com/lucasrodbsb" target="_blank" title="Github" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
// api usada:
// https://www.npmjs.com/package/react-parallax-tilt