import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import home from '../../assets/images/home.png';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState();
  const [path, setPath] = useState();
  const location = useLocation();
  const activeClass = 'bg-gray-900 flex justify-center py-6 px-12';
  const inActiveClass = 'flex justify-center py-6 px-12';
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div>
      <div className="bg-gray-400 items-center px-10 py-2 flex">
        <Link to="/">
          <img className="w-24 h-24" src={home} />
        </Link>
        <div className="grow"></div>
        <div onClick={() => setOpenMenu(!openMenu)} className="text-white">
          {
            !openMenu ? (
              <MenuIcon className="w-10" />
            ) : (
              <XIcon className="w-10" />
            )
          }
        </div>
      </div>
      {
        !!openMenu && (
          <div className="flex justify-center bg-gray-400 text-white">
            <div className="text-xl font-bold">
              <div className={path === '/manifesto' ? activeClass : inActiveClass}>
                <Link to="/manifesto">MANIFESTO</Link>
              </div>
              <div className={path === '/thestudios' ? activeClass : inActiveClass}>
                <Link to="/thestudios">THE STUDIOS</Link>
              </div>
              <div className={path === '/timeline' ? activeClass : inActiveClass}>
                <Link to="/timeline">TIMELINE</Link>
              </div>
              <div className={inActiveClass}>
                TROOP HOUSE
              </div>
              <div className={inActiveClass}>
                STAKING
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default MobileHeader;