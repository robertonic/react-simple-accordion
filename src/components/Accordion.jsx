/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Accordion({ count, item }) {
  const [showDetail, setShowDetail] = useState(false);

  const flipDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <li className="item">
      <content-box className="number">
        {count}
        <div className="title">{item.title}</div>{" "}
        <div onClick={flipDetail}>&oplus;</div>
        {showDetail && <span>{item.text}</span>}
      </content-box>
    </li>
  );
}
