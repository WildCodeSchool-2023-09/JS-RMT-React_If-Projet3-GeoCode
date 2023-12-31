import React from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import CardItem from "./CardItem";

function DisplayCards({ basePath }) {
  const items = useLoaderData();

  return (
    <div>
      {items.map((item) => (
        <CardItem key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}
DisplayCards.propTypes = {
  basePath: PropTypes.string.isRequired,
};
export default DisplayCards;
