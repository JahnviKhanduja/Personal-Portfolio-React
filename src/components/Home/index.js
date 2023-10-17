import React, { useEffect } from 'react'
// import LogoJahnvi from '../../assets/images/LogoJahnvi.jpg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['J', 'a', 'h', 'n', 'v', 'i']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => {
        clearTimeout(timeoutId);
      };
    }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _12`}>'m</span>
          &nbsp;
          {/* <img src={LogoJahnvi} alt="developer" /> */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Front-end developer / react.js developer</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
