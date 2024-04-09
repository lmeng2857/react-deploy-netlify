import React from "react";

const Table = ({ cols, rows, items }) => {
  const key = cols[3];
  console.log(key);
  console.log(typeof items[0][key]);
  const value = items[0][key];
  console.log(value);
  console.log(JSON.stringify(value));
  const jsonvalue = JSON.stringify(value);
  console.log(typeof jsonvalue);
  console.log(JSON.stringify(items[0]));
  return (
    <table>
      <caption>A Table</caption>
      <thead>
        <tr>
          {cols.map((col) => (
            <th scope="col">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            {cols.map((col) => (
              <td>{JSON.stringify(item[col])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    //   {/* {cols.map((col) => (
    //     <div>
    //       <p>{col}</p>
    //       <p>{JSON.stringify(items[0][col])}</p>
    //     </div>
    //   ))}
    //   <p>{rows}</p>
    //   <p>{JSON.stringify(items[0][cols[0]])}</p> */}
  );
};

export default Table;
