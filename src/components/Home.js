import React, { useEffect, useState } from 'react';
import landing from '../assets/images/landing.png';
import '../custom.css';
const Home = () => {
  const [showText, setShowText] = useState(true);
  const [showLogger, setShowLogger] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText();
    }, 6000);
    return () => clearTimeout(timer);
  });
  useEffect(() => {
    let timer;
    if(!showText) {
      timer = setTimeout(() => {
        setShowLogger(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showText])
  return (
    <div className='landing-container'>
      <div className='wrapper'>
        {
          showText && (
            <ul className='dynamic-txts'>
              <li>
                <span>MOMENT</span>
              </li>
              <li>
                <span>NOW</span>
              </li>
              <li>
                <span>US</span>
              </li>
            </ul>
          )
        }
        {
          showLogger && (
            <img src={landing}/>
          )
        }

      </div>
    </div>
  )
}
export default Home;