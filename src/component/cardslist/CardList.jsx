import React from "react";
import Card from "../card/Card";
function CardList({ items }) {
  return (
    <>
      {items &&
        items?.map((fruits, index) => (
          <Card {...fruits} key={index} index={index} />
        ))}
    </>
  );
}

export default CardList;
