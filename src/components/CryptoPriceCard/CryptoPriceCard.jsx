import React from 'react'
import './CryptoPriceCard.scss';

const CryptoPriceCard = ({ currency, price,description }) => {
    return (
        <div className="crypto-card">
            <h3>{currency}</h3>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default CryptoPriceCard