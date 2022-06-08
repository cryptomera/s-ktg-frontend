import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import home from '../../assets/images/home.png';

const Header = () => {
  const [path, setPath] = useState();
  const location = useLocation();
  const activeClass = 'cursor-pointer hover:text-gray-200 text-white bg-orange-400 p-3 mx-12 ';
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div className="flex flex-wrap justify-between items-center font-bold text-xs mx-24 ">
      <Link className={path === '/manifesto' ? activeClass : 'mx-12'} to="/manifesto">MANIFESTO</Link>
      <Link className={path === '/thestudios' ? activeClass : 'mx-12'} to="/thestudios">THE STUDIOS</Link>
      <Link className={path === '/timeline' ? activeClass : 'mx-12'} to="/timeline">TIMELINE</Link>
      <div className="grow"></div>
      <Link to="/">
        <img className="w-24 h-24" src={home} />
      </Link>
      <div className="grow"></div>
      <div className="mx-12 ">TROOP HOUSE</div>
      <div className="mx-12">STAKING</div>
    </div>
  )
}

export default Header;