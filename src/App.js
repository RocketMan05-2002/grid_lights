import React, { useState } from "react";
import Cell from "./components/Cell";
import "./styles.css";

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]; // part of our UI. can make any shape by playing with this. try making traffic signal timer project

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice(); // just a copy of order. can't make changes directly to order
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // console.log(newOrder);
    // edge case = duplicate values in order
    //track deactivating of cells
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    } // removes all of falsy values config array here, 101 ka 0
  };

  return (
    <div className="wrapper">
        <h1 className="gradient__text">Grid Lights Simulation</h1>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled = {order.includes(index)}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
};

export default App;
