import { VFC } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
export const GithubIcon: VFC = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <FaGithubSquare />
    </IconContext.Provider>
  );
};
