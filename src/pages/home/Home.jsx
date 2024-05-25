import React from "react";
import CardList from "../../component/cardslist/CardList";
import { data } from "../../data/cardData";
import { trendingFruits } from "../../data/trendingData";
const Home = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h1>Buy Fruits </h1>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <CardList items={data} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h1>Trending Cards</h1>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <CardList items={trendingFruits} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
