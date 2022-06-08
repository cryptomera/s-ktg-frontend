import React from 'react';
import sit from '../assets/images/sit.png';
import creator1 from '../assets/images/creator1.png';
import creator2 from '../assets/images/creator2.png';
import creator3 from '../assets/images/creator3.png';
import creator4 from '../assets/images/creator4.png';
import CreatorCard from './common/CreatorCard';

const creators = [
  {
    image: creator1,
    name: "ROXI | FOUNDER",
    twitter: "@roxi_____",
    description: "Artistic connoisseur meets mathematic genius, Roxi spends day and night materializing Jikan after Jikan while solving algebraic graph theories simultaneously."
  },
  {
    image: creator2,
    name: "CORRUPT | CO-FOUNDER",
    twitter: "@Oxcorrupt",
    description: "Purveyor of talents and developer extraordinaire, Corrupt is the embodiment of Tony Stark (before the snap, of course) - a visionary. Careful not to get him started because he'll entrance you with his limitless head of ideas. Also easily enticed by tea."
  },
  {
    image: creator3,
    name: "DYNO | ADVISOR",
    twitter: "@CryptoDynoZ",
    description: "A fund manager by trade, Dyno is a decentralisation maxi that has been a crypto veteran since 2016 and is also a co-founder of The OpenDAO, 721 starter, 721 fair market and Lunar Project."
  },
  {
    image: creator4,
    name: "TUNAN | ARTIST",
    twitter: "",
    description: "A quiet individual who only comes out of hiding to replace his drawing tablet with a new one. Rumor has it - he's the reason why the local store is out of stock on drawing tablets as he burns through them with every creation."
  }
];
const Studios = () => {
  return (
    <div className="flex">
      <div className="w-1/2 mt-24" >
        <div className="overflow-y-scroll" style={{ height: '500px'}}>
          <div className="uppercase text-6xl font-bold">utility</div>
          <div className="uppercase font-bold text-2xl mt-12 text-orange-400">community</div>
          <div className="mt-12 pr-24 text-justify">
            Jikan Studios is much more than a collection of pfps. Jikan is defined by our drive for creating a community focused on our story, style, culture, and most importantly, the community that hold together the foundation of the project.
          </div>
          <div className="uppercase font-bold text-2xl mt-12 text-orange-400">tokenomics</div>
          <div className="mt-12 pr-24 text-justify">
            From fueling the utilities created by Jikan Studios, to enabling our community members to choose their own path within our roadmap. $TROOP will be the token that powers the Jikan ecosystem.
          </div>
          <div className="uppercase text-6xl font-bold my-12">creators</div>
          <div className="grid grid-cols-2 gap-2">
            {
              creators.map((creator, i) => (
                <div key={i}>
                  <CreatorCard image={creator.image} name={creator.name} twitter={creator.twitter} description={creator.description} />
                </div>
              ))
            }
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 -ml-5">
          <div className="flex">
            <div className="w-1/2"></div>
            <div className="w-1/2 bg-red-400 h-2"></div>
          </div>
          <div className="flex">
            <div className="w-1/2 bg-gray-400 h-2"></div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 -ml-24">
          <img src={sit} />
        </div>
      </div>
    </div>
  )
}

export default Studios;