import { VFC } from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export const TwitterIcon: VFC = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <FaTwitterSquare />
    </IconContext.Provider>
  );
};
