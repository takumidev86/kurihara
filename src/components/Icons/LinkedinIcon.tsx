import { VFC } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
export const LinkdinIcon: VFC = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <FaLinkedin />
    </IconContext.Provider>
  );
};
