import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "./Nav";

function Header(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Nav>
  );
}

export default Header;
