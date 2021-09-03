import { VFC } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export const FacebookIcon: VFC = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <FaFacebookSquare />
    </IconContext.Provider>
  );
};
