import React from "react";

const Header = ({ chosenSection, setChosenSection }) => {
  return (
    <>
      <fieldset>
        <legend>choose a section:</legend>
        <p
          style={
            chosenSection === "users"
              ? { backgroundColor: "black", color: "white" }
              : null
          }
        >
          <input
            type="radio"
            id="users"
            name="chosenSection"
            onClick={(e) => setChosenSection(e.target.id)}
          />
          <label htmlFor="users">users</label>
        </p>
        <p
          style={
            chosenSection === "posts"
              ? { backgroundColor: "black", color: "white" }
              : null
          }
        >
          <input
            type="radio"
            id="posts"
            name="chosenSection"
            onClick={(e) => setChosenSection(e.target.id)}
          />
          <label htmlFor="posts">posts</label>
        </p>
        <p
          style={
            chosenSection === "comments"
              ? { backgroundColor: "black", color: "white" }
              : null
          }
        >
          <input
            type="radio"
            id="comments"
            name="chosenSection"
            onClick={(e) => setChosenSection(e.target.id)}
          />
          <label htmlFor="comments">comments</label>
        </p>
      </fieldset>
    </>
  );
};

export default Header;
