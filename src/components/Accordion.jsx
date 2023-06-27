/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Accordion({ count, item }) {
  const [showDetail, setShowDetail] = useState(false);

  const flipDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <li className="accordion">
      <div className="item">
        {count}
        <div className="title">{item.title}</div>{" "}
        <div onClick={flipDetail}>&oplus;</div>
        {showDetail ? (
          <div className="content-box">
            <span>{item.text}</span>
          </div>
        ) : (
          <ul>
            <div className="content-box"></div>
          </ul>
        )}
      </div>
    </li>
  );
}
