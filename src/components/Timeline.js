import React from 'react';
import brain from '../assets/images/brain.png';
import run from '../assets/images/run.png';
import inside from '../assets/images/inside.png';
import building from '../assets/images/building.png';
import curve from '../assets/images/curve.png';
import sandglass from '../assets/images/sandglass.png';

const Timeline = () => {
  return (
    <div className="grid grid-cols-3 gap-1 p-12 pt-36">
      <div className="flex items-center cursor-pointer bg-amber-50 hover:bg-red-400">
        <div className="w-1/2 p-10">
          <img src={brain}/>
        </div>
        <div className="w-1/2 uppercase font-bold text-xl pl-5">
          the concept
        </div>
      </div>
      <div className="flex items-center cursor-pointer bg-amber-50 hover:bg-red-400">
        <div className="w-1/2 p-10">
          <img src={run}/>
        </div>
        <div className="w-1/2 uppercase font-bold text-xl pl-5">
          the troop
        </div>
      </div>
      <div className="flex items-center cursor-pointer bg-amber-50 hover:bg-red-400">
        <div className="w-1/2 p-10">
          <img src={inside}/>
        </div>
        <div className="w-1/2 uppercase font-bold text-xl pl-5">
          the foundation
        </div>
      </div>
      <div className="flex items-center cursor-pointer bg-amber-50 hover:bg-red-400">
        <div className="w-1/2 p-10">
          <img src={building}/>
        </div>
        <div className="w-1/2 uppercase font-bold text-xl pl-5">
          exploring jikan
        </div>
      </div>
      <div className="flex items-center cursor-pointer bg-amber-50 hover:bg-red-400">
        <div className="w-1/2 p-10">
          <img src={curve}/>
        </div>
        <div className="w-1/2 uppercase font-bold text-xl pl-5">
          the expansion
        </div>
      </div>
      <div className="flex items-center cursor-pointer bg-amber-50 hover:bg-red-400">
        <div className="w-1/2 p-10">
          <img src={sandglass}/>
        </div>
        <div className="w-1/2 uppercase font-bold text-xl pl-5">
          the future
        </div>
      </div>
    </div>
  )
}

export default Timeline;