import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <nav className="px-2">
      <ul className="flex-row">
        {categories.map((category) => (
          <li
            className={`mx-1 px-1 hvr-bob ${
              currentCategory.name === category.name && "navActive"
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
