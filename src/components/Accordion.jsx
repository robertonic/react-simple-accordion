/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Accordion({ count, item }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleToggle = () => {
    setShowDetail((showDetail) => !showDetail);
  };

  return (
    <div className="accordion">
      <div className={showDetail ? "item open" : "item"} onClick={handleToggle}>
        <p className="number">
          {count < 10 && "0"}
          {count}
        </p>
        <p className="title">{item.title}</p>
        <p className="icon">{showDetail ? "-" : "+"}</p>

        {showDetail && <div className="content-box">{item.text}</div>}
      </div>
    </div>
  );
}
