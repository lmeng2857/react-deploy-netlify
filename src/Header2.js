import React from "react";
import { useState } from "react";

const Header = ({ chosenSection, setChosenSection }) => {
  const [sectionStates, setSectionStates] = useState([1, 0, 0]);
  const handleStateChange = (loc) => {
    const changedStates = [0, 0, 0];
    changedStates[loc] = 1;
    setSectionStates(changedStates);
  };
  const sectionStyle = { backgroundColor: "black", color: "white" };

  return (
    <>
      {/* <header>
        <section
          className="users"
          id="users"
          style={sectionStates[0] ? sectionStyle : null}
          onClick={(e) => {
            handleStateChange(0);
            //   console.log(e.target.innerText);
            setChosenSection(e.target.innerText);
          }}
        >
          <p>users</p>
        </section>
        <section
          className="posts"
          id="posts"
          style={sectionStates[1] ? sectionStyle : null}
          onClick={(e) => {
            handleStateChange(1);
            setChosenSection(e.target.innerText);
          }}
        >
          <p>posts</p>
        </section>
        <section
          className="comments"
          id="comments"
          style={sectionStates[2] ? sectionStyle : null}
          onClick={(e) => {
            handleStateChange(2);
            setChosenSection(e.target.innerText);
          }}
        >
          <p>comments</p>
        </section>
      </header> */}
      <fieldset>
        <legend>choose a section:</legend>
        <p>
          <input type="radio" id="users" name="chosenSection" />
          <label htmlFor="users">users</label>
        </p>
        <p>
          <input type="radio" id="posts" name="chosenSection" />
          <label htmlFor="posts">posts</label>
        </p>
        <p>
          <input type="radio" id="comments" name="chosenSection" />
          <label htmlFor="comments">comments</label>
        </p>
      </fieldset>
    </>
  );
};

export default Header;
