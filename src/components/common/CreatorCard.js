import React from 'react';

const CreatorCard = ({ image, name, twitter, description }) => {
  return (
    <div className="w-full bg-red-400 h-full">
      <div>
        <img src={image} />
      </div>
      <div className="p-4">
        <div className="text-xl font-bold mb-2">
          {name}
        </div>
        <div className="font-bold mb-1">
          {twitter}
        </div>
        <div className="text-justify w-full">
          {description}
        </div>
      </div>
    </div>
  )
}

export default CreatorCard;