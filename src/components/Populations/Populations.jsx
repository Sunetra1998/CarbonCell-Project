import React, { useState, useEffect } from "react";
import BarChart from "../BarChart";
import LineChart from "../LineChart";
import "./Populations.scss";

const Populations = () => {
  const [populationData, setPopulationData] = useState([]);
  const [userData, setUserData] = useState(() => ({
    labels: [],
    datasets: [],
  }));

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setPopulationData(jsonData.data);
      const sortedPopulationData = [...populationData].sort(
        (a, b) => a.Year - b.Year
      );
      setUserData({
        labels: sortedPopulationData.map((data) => data.Year),
        datasets: [
          {
            label: "Population",
            data: sortedPopulationData.map((data) => data.Population),
            backgroundColor: ["skyblue", "#50AF95", "#F3BA2F"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [populationData]);

  return (
    <div className="population-container">
      <h2>Population of USA over period of Years</h2>
      <div className="population-container_items">
        <div>
          <BarChart chartData={userData} />
          <h2>Population of USA over period of Years</h2>
        </div>
        <div>
          <LineChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Populations;
