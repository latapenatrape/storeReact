import React from "react";
import classes from "../Style/Components/UIButton.module.scss";

interface IUIButton {
  children: React.ReactNode;
  onClick: () => void;
  type?: string;
}

const UIButton = ({ type, children, onClick }: IUIButton) => {
  return (
    <div
      onClick={onClick}
      className={
        type == "string"
          ? classes["UIButton"] + " " + classes["string"]
          : type == "number"
          ? classes["UIButton"] + " " + classes["number"]
          : classes["UIButton"] + " " + classes["active"]
      }
    >
      {children}
    </div>
  );
};
export default UIButton;
