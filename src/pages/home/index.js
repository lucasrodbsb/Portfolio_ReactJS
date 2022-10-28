import React from 'react';
import './style.css';
import Tilt from 'react-parallax-tilt';
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {

    const [Nome] = useTypewriter({
        words: ['Lucas Rodrigues'],
        typeSpeed: 100,
        cursor: true,
        cursorStyle: "|",
        cursorColor: "#fff"
      });

      const [Profissao] = useTypewriter({
        words: ["Front-End Developer!", "UI/UX Designer!", "Web Developer!", "Tech Lover!", ],
        loop: 0, // Infinit
        typeSpeed: 100,
        delaySpeed: 5000
      });

    return (
        <main>
            <section className="thumb">
                <div className="content-thumb">
                    <Tilt tiltReverse="true" scale="1.1" id="foto" className="image-thumb"></Tilt>
                    <div className="text-thumb">
                        <h1 id="nome">{Nome}<Cursor /></h1>
                        <span id="txt">I Am a {Profissao}<Cursor /></span>
                        <div className="media-icons">
                            <a href="https://www.linkedin.com/in/lucas-rocha-515358223" target="_blank" title="Linkedin" rel="noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
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
// api usada: https://www.npmjs.com/package/react-simple-typewriter