import React from "react";
import "./overViewCard.css";

function OverViewCard({ icon, number, subtitle }) {
  return (
    <div>
      <div className='overview_card'>
        {/* Icon */}
        <div className='overview_card__icon'>
          <i className={icon}></i>
        </div>
        
        {/* Card Information */}
        <div className='overview_card__info'>
          <div className='overview_card_wrap'>
            {/* Number */}
            <h2 className='overview_card__title'>{number}</h2>
            {/* Subtitle */}
            <p className='overview_card__subtitle'>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewCard;
