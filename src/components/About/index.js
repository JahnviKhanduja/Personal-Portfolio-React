import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { faBootstrap, faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 2000);
        return () => {
            clearTimeout(timeoutId);
          };
        }, []);
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Hi there! I'm Jahnvi Khanduja, a passionate front-end developer with skills in react, CSS, HTML and javascript. I hold a degree in B.Tech from DIT University, and my journey has taken me through exciting projects Like Netflix clone and many other, I honed my skills and developed a keen eye for detail.</p>

                <p>This portfolio is a reflection of my creative journey. It's a compilation of my front-end projects, with a particular emphasis on branding and logo design. My goal is to showcase not only the final designs but also the thought process and creative exploration behind each project.</p>

                <p>I firmly believe in the value of collaboration and open communication with everyone. Through my work, I strive to bring your ideas to life, ensuring they are beautifully and effectively represented.
                Thank you for taking the time to explore my portfolio. I'm excited to share my work with you and Would like to work with your firm and contribute my ideas and creativity there.</p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color='#30F76A' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faBootstrap} color='#5618BA' />
                    </div>

                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>

    )
}


export default About;