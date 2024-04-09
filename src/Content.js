import React from "react";

const Content = ({ items }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="listitem" key={item.id}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
