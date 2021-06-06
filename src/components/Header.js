import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'} color={showAdd? '#208b3a' : 'black'}/>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
