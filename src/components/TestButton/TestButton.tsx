import React from "react";
import { Link } from "react-router-dom";

interface TestButton {
  title: string;
  route: string;
}

const TestButton: React.FC<TestButton> = ({ title, route }) => {
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    TextAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "8px",
  };

  return (
    <>
      <Link to={route}>
        <button style={buttonStyle}>{title}</button>
      </Link>
    </>
  );
};

export default TestButton;
