import React from 'react';
import landing from '../assets/images/landing.png';

const Home = () => {
  return (
    <div className="flex justify-center">
      <img className="xl:w-3/4 sm:w-full" src={landing}/>
    </div>
  )
}
export default Home;