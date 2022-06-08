import React from 'react';
import robot from '../assets/images/robot.png';
import hat from '../assets/images/hat.png';

const Manifesto = () => {
  return (
    <div className="xl:flex">
      <div className="xl:w-1/3 xl:mt-24 w-full">
        <div className="uppercase font-bold text-4xl">manifesto</div>
        <div className="mt-12">
          In all of time, I have found fortune.
        </div>
        <div>
          In all of time, I have conquered malice.
        </div>
        <div>
          In all of time, I have spilt blood.
        </div>
        <div className="mt-4">
          I have done all there is to do, but live a moment where truth forgets its name.
        </div>
        <div className="mt-4">
          Whichever direction I go, whatever goal I seek, I will not forget those who stand beside me.
        </div>
        <div className="mt-4">
          This is for the dreamers, with the courage to step into the unknown, where hope flourishes under dark and heavy skies.
        </div>
        <div className="mt-4">
          This is for the valiant, who lead in hopeless moments, with an infinite army whose armors glisten with radiance.
        </div>
        <div className="mt-4">
          I was a Jikan before, and I will be a Jikan tomorrow.
          From the start of time until the very end.
        </div>
        <div className="mt-4">
          Why predict the future, when Jikan can create it?
        </div>
      </div>
      <div className="flex xl:w-2/3 w-full justify-center">
        <div className="xl:ml-24 xl:w-1/2 w-0 h-0 invisible xl:visible">
          <img src={robot} />
        </div>
        <div className="xl:-ml-48 xl:w-1/2 w-full">
          <img src={hat} />
        </div>
      </div>
    </div>
  )
}

export default Manifesto;