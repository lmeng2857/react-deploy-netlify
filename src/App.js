import Header from "./Header";
import Content from "./Content";
import Table from "./Table";
import { useState, useEffect } from "react";

function App() {
  const [chosenSection, setChosenSection] = useState("users");
  const [items, setItems] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState(0);
  const JSON_URL = "https://jsonplaceholder.typicode.com/";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const choseURL = JSON_URL + chosenSection;
        // console.log(choseURL);
        const response = await fetch(choseURL);

        if (!response.ok) throw Error("Please Reload Your App");
        const listItems = await response.json();
        setItems(listItems);
        // console.log(JSON.stringify(listItems[0]));
        // console.log(Object.keys(listItems[0]));
        setCols(Object.keys(listItems[0]));
        setRows(listItems.length);
        setFetchErr(null);
      } catch (error) {
        setFetchErr(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    // setTimeout(fetchItems, 1000);
    fetchItems();

    setIsLoading(true);
  }, [chosenSection]);

  return (
    <div className="App">
      <Header
        chosenSection={chosenSection}
        setChosenSection={setChosenSection}
      ></Header>
      {fetchErr && (
        <p style={{ color: "red", fontSize: "bold" }}>ERROR:{fetchErr}</p>
      )}
      {isLoading && (
        <p style={{ color: "blue", fontSize: "bold" }}>IS LOADING ...</p>
      )}
      {/* {!isLoadin && <Content items={items}></Content>} */}
      {!isLoading && <Table cols={cols} rows={rows} items={items}></Table>}
    </div>
  );
}

export default App;
