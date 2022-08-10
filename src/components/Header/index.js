import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "./Nav";

function Header(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row container space-between py-2">
      <div>
        <h1>Merrick</h1>
      </div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
    </header>
  );
}

export default Header;
