import React, { useState, useEffect } from "react";
import "./Cryptocurrency.scss";
import CryptoPriceCard from "../CryptoPriceCard/CryptoPriceCard";

const Cryptocurrency = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState({});

  const fetchBitcoinPrices = async () => {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setBitcoinPrices(data.bpi);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBitcoinPrices();
  }, []);

  console.log("bitcoinPrices", bitcoinPrices);

  return (
    <div className="main-crypto-container">
      <h2>Bitcoin Prices in different currencies, GBP, USD and EUR</h2>
      <div className="crypto-container">
        {Object.keys(bitcoinPrices).map((currency) => (
          <CryptoPriceCard
            key={currency}
            currency={currency}
            price={bitcoinPrices[currency].rate}
            description={bitcoinPrices[currency].description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrency;
